"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
          {/* Logo — drop your logo.png into /public */}
          {!logoError && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/logo.png"
              alt=""
              className="h-7 w-auto"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-[family-name:var(--font-cormorant)] text-lg font-light tracking-[0.25em] text-espresso uppercase">
            Manaawa
          </span>
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#music"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-300"
          >
            Music
          </a>
          <a
            href="#connect"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-300"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
