"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "uoXFzfJqrA4", title: "AVAION Opening" },
  { id: "zR6V3BuZiug", title: "Fernweh E8" },
  { id: "bh6pDL1rpxE", title: "Fernweh E9" },
  { id: "4F-XuCFw7OY", title: "Fernweh E10" },
  { id: "fJVx37TdNzc", title: "Fernweh E11" },
  { id: "IJ3-HVQJ-ys", title: "Fernweh E12" },
  { id: "PAr75FgWojQ", title: "Fernweh E13" },
  { id: "MCwwfDH-mWs", title: "Fernweh E14" },
  { id: "AjNiZbKd9ZY", title: "Fernweh E15" },
  { id: "1WjScDM6kLI", title: "Fernweh E16" },
  { id: "wmlJbRAY1pU", title: "Fernweh E17" },
  { id: "anQK_i9TPlk", title: "Fernweh E1" },
  { id: "LVeuBleTOvU", title: "Fernweh E2" },
  { id: "aLqnHWQD6J8", title: "Fernweh E3" },
  { id: "tRoTI6LBq7w", title: "Fernweh E4" },
  { id: "-CYEXLt-XYM", title: "Fernweh E5" },
  { id: "37j4sTGcPFM", title: "Fernweh E6" },
  { id: "_-dQdxYLCCE", title: "Fernweh E7" },
];

const COUNT = videos.length;
const CENTER_START = 10; // E17
const CARD_GAP = 20;
const CARD_WIDTH_DESKTOP = 560;
const REAL_OFFSET = COUNT;

const tripled = [...videos, ...videos, ...videos];

function useCardWidth() {
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);

  useEffect(() => {
    const update = () => {
      setCardWidth(window.innerWidth < 768 ? window.innerWidth * 0.85 : CARD_WIDTH_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardWidth;
}

export default function NatureLiveSets() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>(200);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingKey, setPlayingKey] = useState<number | null>(null);
  const [centerIndex, setCenterIndex] = useState(CENTER_START);
  const isJumping = useRef(false);
  const cardWidth = useCardWidth();
  const step = cardWidth + CARD_GAP;

  const getScrollLeft = useCallback(
    (realIdx: number) => (REAL_OFFSET + realIdx) * step,
    [step]
  );

  // Initialize + re-center when cardWidth changes (e.g. resize / orientation)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = getScrollLeft(centerIndex);
  }, [step, getScrollLeft, centerIndex]);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isJumping.current) return;

    const tripledIdx = Math.round(el.scrollLeft / step);
    const realIdx = ((tripledIdx % COUNT) + COUNT) % COUNT;
    setCenterIndex((prev) => {
      if (prev !== realIdx) setPlayingKey(null);
      return realIdx;
    });

    const realStart = REAL_OFFSET * step;
    const realEnd = (REAL_OFFSET + COUNT - 1) * step;

    if (el.scrollLeft < realStart - step * 2 || el.scrollLeft > realEnd + step * 2) {
      isJumping.current = true;
      el.scrollLeft = (REAL_OFFSET + realIdx) * step;
      requestAnimationFrame(() => {
        isJumping.current = false;
      });
    }
  }, [step]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, [onScroll]);

  const scrollDir = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const scrollToReal = useCallback(
    (realIdx: number) => {
      const el = scrollRef.current;
      if (!el) return;
      el.scrollTo({
        left: getScrollLeft(realIdx),
        behavior: "smooth",
      });
    },
    [getScrollLeft]
  );

  return (
    <section id="live-sets" className="relative bg-espresso py-28 md:py-40 overflow-hidden">
      <div className="mx-auto">
        <div
          ref={headingRef}
          className="reveal mb-16 flex flex-col items-center text-center gap-4 px-6"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-tan/40 font-medium">
            Fernweh Series
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-cream uppercase">
            Nature Live-Sets
          </h2>
          <div className="w-8 h-px bg-tan/25 mt-2" />
        </div>

        <div ref={galleryRef} className="reveal relative">
          <button
            onClick={() => scrollDir("left")}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/10 backdrop-blur-md border border-cream/10 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/20 transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scrollDir("right")}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/10 backdrop-blur-md border border-cream/10 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/20 transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-espresso to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-espresso to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="gallery-scroll flex gap-5 overflow-x-auto py-6"
            style={{
              paddingLeft: `calc(50vw - ${cardWidth / 2}px)`,
              paddingRight: `calc(50vw - ${cardWidth / 2}px)`,
            }}
          >
            {tripled.map((video, i) => {
              const realIdx = i % COUNT;
              return (
                <VideoCard
                  key={`${video.id}-${i}`}
                  video={video}
                  cardWidth={cardWidth}
                  isCentered={realIdx === centerIndex}
                  isPlaying={playingKey === i}
                  onClick={() => {
                    if (realIdx === centerIndex) {
                      setPlayingKey(i);
                    } else {
                      scrollToReal(realIdx);
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  cardWidth,
  isCentered,
  isPlaying,
  onClick,
}: {
  video: Video;
  cardWidth: number;
  isCentered: boolean;
  isPlaying: boolean;
  onClick: () => void;
}) {
  const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div
      className="gallery-item transition-all duration-500 ease-out"
      style={{
        width: `${cardWidth}px`,
        transform: isCentered ? "scale(1.05)" : "scale(0.92)",
        opacity: isCentered ? 1 : 0.5,
      }}
    >
      <div
        className="relative aspect-video rounded-xl overflow-hidden bg-espresso group cursor-pointer shadow-2xl shadow-black/30 border border-cream/5"
        onClick={() => !isPlaying && onClick()}
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="play-pulse relative w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-cream transition-transform duration-500 group-hover:scale-110">
                <svg width="20" height="24" viewBox="0 0 22 26" fill="none" className="ml-1">
                  <path d="M22 13L0 26V0L22 13Z" fill="var(--espresso)" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <p className="text-[11px] md:text-sm text-cream/70 tracking-[0.15em] uppercase font-medium">
                {video.title}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
