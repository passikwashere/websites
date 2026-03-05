"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 bg-cream/80 backdrop-blur-xl border-b border-tan/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3 hover:opacity-60 transition-opacity duration-300"
        >
          <Image
            src="/images/PNG-01.png"
            alt="Manaawa"
            width={200}
            height={50}
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="#live-sets"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-300"
          >
            Live Sets
          </a>
          <a
            href="#about"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#connect"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-300"
          >
            Connect
          </a>
          <a
            href="mailto:booking@manaawa.com"
            className="text-[11px] font-medium tracking-[0.25em] uppercase bg-espresso text-cream px-4 py-2 hover:bg-espresso/80 transition-colors duration-300"
          >
            Booking
          </a>
        </div>
      </div>
    </nav>
  );
}
