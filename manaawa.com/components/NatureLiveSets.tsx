"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "MCwwfDH-mWs", title: "Fernweh E14" },
  { id: "PAr75FgWojQ", title: "Fernweh E13" },
  { id: "IJ3-HVQJ-ys", title: "Fernweh E12" },
  { id: "fJVx37TdNzc", title: "Fernweh E11" },
  { id: "4F-XuCFw7OY", title: "Fernweh E10" },
  { id: "bh6pDL1rpxE", title: "Fernweh E9" },
  { id: "zR6V3BuZiug", title: "Fernweh E8" },
  { id: "_-dQdxYLCCE", title: "Fernweh E7" },
  { id: "37j4sTGcPFM", title: "Fernweh E6" },
  { id: "-CYEXLt-XYM", title: "Fernweh E5" },
  { id: "tRoTI6LBq7w", title: "Fernweh E4" },
  { id: "aLqnHWQD6J8", title: "Fernweh E3" },
  { id: "LVeuBleTOvU", title: "Fernweh E2" },
  { id: "anQK_i9TPlk", title: "Fernweh E1" },
  { id: "uoXFzfJqrA4", title: "AVAION Opening" },
];

export default function NatureLiveSets() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>(200);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="live-sets"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0d0d0d 50%, #111111 100%)",
      }}
    >
      <div className="max-w-[2000px] mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-20 md:mb-28 flex flex-col items-center text-center gap-5 px-6"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold/50 font-medium">
            Fernweh Series
          </span>
          <div className="w-[60px] h-px bg-gold/20" />
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-[10vw] md:text-[8vw] leading-[0.9] tracking-[0.08em] text-cream uppercase">
            Nature Live-Sets
          </h2>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="reveal relative">
          {/* Scroll arrows — minimal thin lines */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 p-3 text-gold/50 hover:text-gold transition-colors duration-500"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 4L8 12L16 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 p-3 text-gold/50 hover:text-gold transition-colors duration-500"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="gallery-scroll flex gap-6 md:gap-10 overflow-x-auto px-16 md:px-36 py-4"
          >
            {videos.map((video, i) => (
              <VideoCard
                key={video.id}
                video={video}
                isFirst={i === 0}
                isPlaying={playingId === video.id}
                onPlay={() => setPlayingId(video.id)}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-10 mx-auto max-w-md px-6">
            <div className="h-px bg-cream/[0.06] relative">
              <div
                className="absolute top-0 left-0 h-full bg-gold/40 transition-[width] duration-300 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  isFirst,
  isPlaying,
  onPlay,
}: {
  video: Video;
  isFirst: boolean;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div
      className={`gallery-item ${
        isFirst ? "w-[85vw] md:w-[70vw] lg:w-[60vw]" : "w-[75vw] md:w-[40vw] lg:w-[35vw]"
      }`}
    >
      <div
        className="relative aspect-video overflow-hidden bg-espresso group cursor-pointer"
        onClick={() => !isPlaying && onPlay()}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.03] group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="play-pulse relative w-[56px] h-[56px] md:w-[68px] md:h-[68px] rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-cream transition-all duration-600 group-hover:scale-110">
                <svg width="18" height="22" viewBox="0 0 22 26" fill="none" className="ml-0.5">
                  <path d="M22 13L0 26V0L22 13Z" fill="var(--espresso)" />
                </svg>
              </div>
            </div>

            {/* Title — slides up on hover */}
            <div className="absolute bottom-0 inset-x-0 p-5 md:p-8 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600">
              <p className="text-[10px] md:text-[11px] text-gold/80 tracking-[0.4em] uppercase font-medium">
                {video.title}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
