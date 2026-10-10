"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#sets", label: "Sets" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Instagram" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-ink/70 backdrop-blur-xl border-b border-bone/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="PASSIK — home">
            <Image src="/images/symbol-white.png" alt="" width={40} height={52} className="h-6 w-auto opacity-90" />
            <span className="font-display text-[13px] tracking-[0.25em] text-bone">PASSIK</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.3em] uppercase text-bone/55 hover:text-bone transition-colors duration-500"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="text-[11px] tracking-[0.3em] uppercase text-ink bg-sand hover:bg-bone px-6 py-3 transition-colors duration-500"
            >
              Booking
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-bone transition-transform duration-500 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-bone transition-transform duration-500 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col justify-center px-8 transition-all duration-700 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {[...links, { href: "#booking", label: "Booking" }].map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-5xl uppercase text-bone py-3 transition-all duration-700"
            style={{
              transitionDelay: menuOpen ? `${120 + i * 70}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {l.label}
          </a>
        ))}
        <a href="mailto:hello@passikmusic.com" className="mt-12 text-xs tracking-[0.25em] uppercase text-tan">
          hello@passikmusic.com
        </a>
      </div>
    </>
  );
}
