import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const unbounded = localFont({
  src: [
    { path: "./fonts/Unbounded-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Unbounded-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://passikmusic.com"),
  title: "PASSIK — DJ & Producer, Zürich",
  description:
    "PASSIK — Swiss DJ & Producer. Booking: hello@passikmusic.com",
  openGraph: {
    title: "PASSIK — DJ & Producer",
    description: "Swiss DJ & Producer.",
    siteName: "PASSIK",
    images: ["/images/hero-stage.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A08",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">{children}</body>
    </html>
  );
}
