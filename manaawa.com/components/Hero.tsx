"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-tan/30 blur-[120px]" />
        <div className="orb-alt absolute bottom-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-sand/50 blur-[100px]" />
        <div className="orb-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-tan/20 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <Image
          src="/images/PNG-01.png"
          alt="Manaawa"
          width={800}
          height={200}
          priority
          className="hero-logo h-24 md:h-36 lg:h-44 w-auto mb-2"
        />

        <div className="hero-line w-16 h-px bg-espresso/20 origin-center" />

        {/* Animated tagline words */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hero-word-1 text-[11px] md:text-xs tracking-[0.4em] uppercase text-espresso/40 font-medium">
            Emotional
          </span>
          <span className="hero-word-dot-1 text-espresso/20">&middot;</span>
          <span className="hero-word-2 text-[11px] md:text-xs tracking-[0.4em] uppercase text-espresso/40 font-medium">
            Nature
          </span>
          <span className="hero-word-dot-2 text-espresso/20">&middot;</span>
          <span className="hero-word-3 text-[11px] md:text-xs tracking-[0.4em] uppercase text-espresso/40 font-medium">
            Melancholic
          </span>
        </div>

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
