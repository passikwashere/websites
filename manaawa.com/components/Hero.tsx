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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ken Burns animated gradient background */}
      <div
        className="ken-burns absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, #2a2520 0%, #111111 50%), radial-gradient(ellipse at 70% 60%, #1e1a16 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, #1a1714 0%, #111111 100%)",
        }}
      />

      {/* Cursor-tracking ambient light */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-[2000ms]"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(184,168,138,0.15), transparent 50%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[150px]" />
        <div className="orb-alt absolute bottom-[15%] right-[10%] w-[450px] h-[450px] rounded-full bg-sand/[0.06] blur-[130px]" />
        <div className="orb-slow absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-tan/[0.03] blur-[160px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo — large, cinematic reveal */}
        <Image
          src="/images/PNG-05.png"
          alt="Manaawa"
          width={800}
          height={200}
          priority
          className="hero-logo h-12 md:h-20 lg:h-24 w-auto"
        />

        {/* Gold line */}
        <div className="hero-line w-[60px] h-px bg-gold/30 origin-center" />

        {/* Tagline — staggered word reveal */}
        <div className="flex items-center gap-3 md:gap-4">
          <span className="hero-tagline-word text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-gold/60">
            Emotional
          </span>
          <span className="hero-tagline-word text-gold/30 text-[10px]">&middot;</span>
          <span className="hero-tagline-word text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-gold/60">
            Melodic
          </span>
          <span className="hero-tagline-word text-gold/30 text-[10px]">&middot;</span>
          <span className="hero-tagline-word text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-gold/60">
            Melancholic
          </span>
        </div>
      </div>

      {/* Scroll indicator — thin line pulse, no text */}
      <div className="hero-scroll-line absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="scroll-line-inner w-px h-[40px] bg-gradient-to-b from-gold/30 to-transparent" />
      </div>
    </section>
  );
}
