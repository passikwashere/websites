"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "py-3 bg-cream/80 backdrop-blur-2xl border-b border-tan/15"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center hover:opacity-60 transition-opacity duration-500"
        >
          <Logo className="h-5 w-auto text-espresso" />
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#music"
            className="font-[family-name:var(--font-heading)] text-[11px] font-light tracking-[0.25em] uppercase text-espresso/40 hover:text-espresso transition-colors duration-500"
          >
            Live-Sets
          </a>
          <a
            href="#connect"
            className="font-[family-name:var(--font-heading)] text-[11px] font-light tracking-[0.25em] uppercase text-espresso/40 hover:text-espresso transition-colors duration-500"
          >
            Connect
          </a>
          <a
            href="mailto:booking@manaawa.com"
            className="font-[family-name:var(--font-heading)] text-[11px] font-light tracking-[0.2em] uppercase text-espresso/90 border border-espresso/15 px-5 py-2.5 hover:bg-espresso hover:text-cream transition-all duration-500"
          >
            Booking
          </a>
        </div>
      </div>
    </nav>
  );
}
