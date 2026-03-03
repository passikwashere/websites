"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handle = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    section.addEventListener("mousemove", handle);
    return () => section.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream"
    >
      {/* Cursor-tracking ambient light */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 transition-opacity duration-[3000ms]"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, var(--tan), transparent 55%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-[20%] left-[15%] w-[450px] h-[450px] rounded-full bg-tan/20 blur-[140px]" />
        <div className="orb-alt absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-sand/35 blur-[120px]" />
        <div className="orb-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] rounded-full bg-tan/10 blur-[160px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo */}
        <div className="hero-title w-full max-w-[720px] px-4">
          <Logo className="w-full h-auto text-espresso" />
        </div>

        {/* Decorative line */}
        <div className="hero-line w-12 h-px bg-espresso/15 origin-center" />

        {/* Tagline */}
        <p className="hero-tagline font-[family-name:var(--font-heading)] text-[11px] md:text-[13px] tracking-[0.35em] uppercase text-espresso/35 font-light">
          DJ &nbsp;&middot;&nbsp; Producer &nbsp;&middot;&nbsp; Electronic Music
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-[family-name:var(--font-heading)] text-[9px] tracking-[0.5em] uppercase text-espresso/15 font-light">
          Scroll
        </span>
        <div className="scroll-line w-px h-14 bg-gradient-to-b from-espresso/15 to-transparent" />
      </div>
    </section>
  );
}
