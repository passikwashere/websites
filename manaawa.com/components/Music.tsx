"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import YouTubePlayer, { type Video } from "./YouTubePlayer";

const videos: Video[] = [
  { id: "MCwwfDH-mWs", title: "Featured Set" },
];

export default function Music() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const playerRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section id="music" className="relative bg-espresso py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-16 flex flex-col items-center text-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-tan/40 font-medium">
            Featured
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-cream uppercase">
            Music
          </h2>
          <div className="w-8 h-px bg-tan/25 mt-2" />
        </div>

        {/* Player */}
        <div ref={playerRef} className="reveal">
          <YouTubePlayer videos={videos} />
        </div>
      </div>
    </section>
  );
}
