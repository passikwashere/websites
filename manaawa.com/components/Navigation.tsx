"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#D4C4A8]/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.3em] text-[#1a1a1a] uppercase hover:opacity-60 transition-opacity duration-300"
        >
          Manaawa
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#featured"
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Listen
          </a>
          <a
            href="#connect"
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
