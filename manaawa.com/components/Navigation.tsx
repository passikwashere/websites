"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#music", label: "Music" },
  { href: "#live-sets", label: "Live Sets" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:booking@manaawa.com"
              className="text-[11px] font-medium tracking-[0.25em] uppercase bg-espresso text-cream px-4 py-2 hover:bg-espresso/80 transition-colors duration-300"
            >
              Booking
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-px w-5 bg-espresso transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-espresso transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-espresso transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 flex flex-col items-center justify-center gap-8 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium tracking-[0.3em] uppercase text-espresso/60 hover:text-espresso transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:booking@manaawa.com"
          onClick={() => setMenuOpen(false)}
          className="text-sm font-medium tracking-[0.3em] uppercase bg-espresso text-cream px-6 py-3 hover:bg-espresso/80 transition-colors duration-300"
        >
          Booking
        </a>
      </div>
    </>
  );
}
