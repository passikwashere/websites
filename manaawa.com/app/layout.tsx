import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manaawa — Electronic Music Project",
  description:
    "Manaawa is a Swiss electronic music project creating emotional, melodic and melancholic dance music.",
  openGraph: {
    title: "Manaawa",
    description: "Emotional, melodic and melancholic dance music.",
    siteName: "Manaawa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${libre.variable}`}>
      <body className="font-[family-name:var(--font-libre)]">{children}</body>
    </html>
  );
}
