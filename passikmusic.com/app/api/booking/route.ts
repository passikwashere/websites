import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BOOKING_EMAIL } from "@/lib/site";

// Env:
//   RESEND_API_KEY  — from resend.com (domain passikmusic.com must be verified there)
//   BOOKING_FROM    — optional sender, defaults to "PASSIK Website <website@passikmusic.com>"

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields, humans don't. Pretend success.
  if (clip(body.company_website, 200)) return NextResponse.json({ ok: true });

  const data = {
    name: clip(body.name, 120),
    email: clip(body.email, 200),
    subject: clip(body.subject, 150),
    message: clip(body.message, 5000),
  };

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Please fill in name, a valid email and a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[booking] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Mail service not configured." }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Subject", data.subject],
  ];

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#0b0a08;max-width:560px">
      <h2 style="margin:0 0 16px;font-size:18px;letter-spacing:2px">NEW MESSAGE — PASSIKMUSIC.COM</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#8a7a5f;white-space:nowrap">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:20px;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(data.message)}</p>
    </div>`;

  const text = [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), "", data.message].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.BOOKING_FROM || "PASSIK Website <website@passikmusic.com>",
      to: [BOOKING_EMAIL],
      replyTo: data.email,
      subject: `${data.subject || "Booking / Contact"} — ${data.name}`,
      html,
      text,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[booking] send failed", err);
    return NextResponse.json({ error: "Could not send right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
