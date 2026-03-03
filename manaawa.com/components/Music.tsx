"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import YouTubePlayer, { type Video } from "./YouTubePlayer";

const videos: Video[] = [
  { id: "MCwwfDH-mWs", title: "Nature Live-Set" },
];

export default function Music() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const playerRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section id="music" className="relative bg-espresso py-32 md:py-44 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-20 flex flex-col items-center text-center gap-5"
        >
          <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.5em] uppercase text-tan/30 font-light">
            Listen
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl md:text-6xl tracking-[0.08em] text-cream uppercase">
            Nature Live-Sets
          </h2>
          <div className="w-8 h-px bg-tan/20 mt-2" />
        </div>

        {/* Player */}
        <div ref={playerRef} className="reveal">
          <YouTubePlayer videos={videos} />
        </div>
      </div>
    </section>
  );
}
