"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      {/* Cursor-tracking ambient light — more present */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 transition-opacity duration-[1500ms]"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, var(--tan), transparent 55%)`,
        }}
      />

      {/* Secondary warm glow following cursor */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 transition-opacity duration-[2500ms]"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, var(--gold), transparent 50%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-tan/30 blur-[120px]" />
        <div className="orb-alt absolute bottom-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-sand/50 blur-[100px]" />
        <div className="orb-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-tan/20 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Logo image */}
        <Image
          src="/images/PNG-01.png"
          alt="Manaawa"
          width={600}
          height={150}
          priority
          className="hero-logo h-16 md:h-24 lg:h-28 w-auto mb-2"
        />

        {/* Decorative line */}
        <div className="hero-line w-16 h-px bg-espresso/20 origin-center" />

        {/* Tagline */}
        <p className="hero-tagline text-[11px] md:text-xs tracking-[0.4em] uppercase text-espresso/40 font-medium">
          Emotional &nbsp;&middot;&nbsp; Melodic &nbsp;&middot;&nbsp; Melancholic
        </p>

        {/* Decorative line */}
        <div className="hero-line w-16 h-px bg-espresso/20 origin-center" />
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.4em] uppercase text-espresso/20 font-medium">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-espresso/20 to-transparent" />
      </div>
    </section>
  );
}
