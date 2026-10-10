"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BOOKING_EMAIL } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function Booking() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLFormElement>(150);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="booking" className="relative bg-bone text-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-16 md:gap-10">
        <div ref={headingRef} className="reveal md:col-span-5 flex flex-col">
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] tracking-[-0.04em]">
            Booking
            <br />
            <span className="text-clay">Contact</span>
          </h2>
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="mt-auto pt-14 font-display text-lg md:text-2xl hover:text-clay transition-colors duration-500"
          >
            {BOOKING_EMAIL}
          </a>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="reveal md:col-span-6 md:col-start-7">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            <Field label="Name" name="name" required autoComplete="name" />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <div className="sm:col-span-2">
              <Field label="Subject" name="subject" />
            </div>
            <div className="sm:col-span-2">
              <label className="block">
                <span className="block text-[10px] tracking-[0.35em] uppercase text-clay mt-4">Message *</span>
                <textarea name="message" required rows={5} className="field resize-none" />
              </label>
            </div>
          </div>

          {/* honeypot */}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group bg-ink text-bone px-10 py-5 text-[11px] tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-smoke disabled:opacity-60 transition-colors duration-500"
            >
              {status === "sending" ? "Sending…" : "Send"}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
            <p aria-live="polite" className="text-sm font-light">
              {status === "sent" && <span className="text-ink">Sent. Thank you.</span>}
              {status === "error" && (
                <span className="text-[#8a3b2a]">
                  {error} Email{" "}
                  <a href={`mailto:${BOOKING_EMAIL}`} className="underline underline-offset-4">
                    {BOOKING_EMAIL}
                  </a>
                  .
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.35em] uppercase text-clay mt-4">
        {label}
        {required && " *"}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className="field" />
    </label>
  );
}
