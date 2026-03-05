"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#live-sets", label: "Live Sets" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["live-sets", "about", "connect"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-2 bg-espresso/40 backdrop-blur-2xl border-b border-gold/[0.08]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center hover:opacity-60 transition-opacity duration-500"
        >
          <Image
            src="/images/PNG-05.png"
            alt="Manaawa"
            width={160}
            height={40}
            className="h-4 w-auto opacity-70"
          />
        </a>

        <div className="flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[10px] tracking-[0.35em] uppercase text-cream/40 hover:text-cream/80 transition-colors duration-500 pb-2"
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
