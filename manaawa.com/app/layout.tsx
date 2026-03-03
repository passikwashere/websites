import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-body",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-[family-name:var(--font-body)]">{children}</body>
    </html>
  );
}
