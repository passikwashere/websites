import type { Metadata } from "next";
import { Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manaawa — DJ · Producer · Electronic Music",
  description:
    "Manaawa is a DJ and producer crafting electronic music experiences.",
  openGraph: {
    title: "Manaawa",
    description: "DJ · Producer · Electronic Music",
    siteName: "Manaawa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable}`}>
      <body className="font-[family-name:var(--font-syne)]">{children}</body>
    </html>
  );
}
