"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function FeaturedSet() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section
      id="featured"
      className="relative bg-[#1a1a1a] py-28 md:py-40 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div ref={ref} className="fade-in mb-16 flex flex-col items-center text-center gap-4">
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#D4C4A8]/50">
            Featured Set
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-[#F5F0E8] uppercase">
            Listen
          </h2>
          <div className="w-8 h-px bg-[#D4C4A8]/30 mt-2" />
        </div>

        {/* YouTube embed */}
        <div className="fade-in relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <iframe
            src="https://www.youtube.com/embed/MCwwfDH-mWs?rel=0&modestbranding=1&color=white"
            title="Manaawa — Featured Set"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
