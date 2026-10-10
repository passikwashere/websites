"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { liveSets, type LiveSet } from "@/lib/site";

const COUNT = liveSets.length;
const CENTER_START = 0;
const CARD_GAP = 24;
const CARD_WIDTH_DESKTOP = 880;
// Repeat enough copies so wide screens never run out of cards on either side.
const COPIES = 7;
const REAL_OFFSET = COUNT * Math.floor(COPIES / 2);

const repeated = Array.from({ length: COPIES }, () => liveSets).flat();

function useCardWidth() {
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardWidth(w < 768 ? w * 0.86 : Math.min(CARD_WIDTH_DESKTOP, w * 0.62));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardWidth;
}

export default function LiveSets() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>(200);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingKey, setPlayingKey] = useState<number | null>(null);
  const [centerIndex, setCenterIndex] = useState(CENTER_START);
  const isJumping = useRef(false);
  const cardWidth = useCardWidth();
  const step = cardWidth + CARD_GAP;

  const getScrollLeft = useCallback((realIdx: number) => (REAL_OFFSET + realIdx) * step, [step]);

  // Initialize + re-center when cardWidth changes (resize / orientation)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = getScrollLeft(centerIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, getScrollLeft]);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isJumping.current) return;

    const idx = Math.round(el.scrollLeft / step);
    const realIdx = ((idx % COUNT) + COUNT) % COUNT;
    setCenterIndex((prev) => {
      if (prev !== realIdx) setPlayingKey(null);
      return realIdx;
    });

    const realStart = REAL_OFFSET * step;
    const realEnd = (REAL_OFFSET + COUNT - 1) * step;

    if (el.scrollLeft < realStart - step * COUNT || el.scrollLeft > realEnd + step * COUNT) {
      isJumping.current = true;
      el.scrollLeft = (REAL_OFFSET + realIdx) * step + ((el.scrollLeft % step) + step) % step;
      requestAnimationFrame(() => {
        isJumping.current = false;
      });
    }
  }, [step]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollDir = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  const scrollToKey = useCallback(
    (key: number) => {
      scrollRef.current?.scrollTo({ left: key * step, behavior: "smooth" });
    },
    [step]
  );

  const current = liveSets[centerIndex];

  return (
    <section id="sets" className="relative bg-ink pt-28 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      <div ref={headingRef} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 mb-14 md:mb-20">
        <div className="flex items-end justify-between gap-6 border-b border-bone/10 pb-8">
          <div>
                        <h2 className="font-display uppercase text-bone text-5xl md:text-8xl leading-[0.85]">
              Live
              <br />
              Sets
            </h2>
          </div>
          <div className="flex flex-col items-end gap-6">
            <span className="font-display text-sand text-sm md:text-base tracking-[0.1em]">
              {String(centerIndex + 1).padStart(2, "0")}
              <span className="text-bone/25"> / {String(COUNT).padStart(2, "0")}</span>
            </span>
            <div className="flex gap-2">
              <ArrowButton dir="left" onClick={() => scrollDir("left")} />
              <ArrowButton dir="right" onClick={() => scrollDir("right")} />
            </div>
          </div>
        </div>
      </div>

      <div ref={galleryRef} className="reveal relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="gallery-scroll flex overflow-x-auto py-4 snap-x snap-mandatory"
          style={{
            gap: `${CARD_GAP}px`,
            paddingLeft: `calc(50vw - ${cardWidth / 2}px)`,
            paddingRight: `calc(50vw - ${cardWidth / 2}px)`,
          }}
        >
          {repeated.map((set, i) => {
            const realIdx = i % COUNT;
            return (
              <SetCard
                key={`${set.id}-${i}`}
                set={set}
                cardWidth={cardWidth}
                isCentered={realIdx === centerIndex}
                isPlaying={playingKey === i}
                onClick={() => {
                  if (realIdx === centerIndex) setPlayingKey(i);
                  else scrollToKey(i);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mt-10 flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        <p key={current.id} className="fade-in font-display uppercase text-bone text-xl md:text-3xl">
          {current.title}
        </p>
        <p className="text-[11px] tracking-[0.3em] uppercase text-tan/70">{current.meta}</p>
      </div>
    </section>
  );
}

function ArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous set" : "Next set"}
      className="w-12 h-12 md:w-14 md:h-14 border border-bone/15 hover:border-sand hover:bg-sand hover:text-ink text-bone/70 flex items-center justify-center transition-colors duration-500"
    >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path
          d={dir === "left" ? "M12 4L6 10L12 16" : "M8 4L14 10L8 16"}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}

function SetCard({
  set,
  cardWidth,
  isCentered,
  isPlaying,
  onClick,
}: {
  set: LiveSet;
  cardWidth: number;
  isCentered: boolean;
  isPlaying: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="shrink-0 snap-center transition-all duration-700 ease-out"
      style={{
        width: `${cardWidth}px`,
        transform: isCentered ? "scale(1)" : "scale(0.88)",
        opacity: isCentered ? 1 : 0.35,
      }}
    >
      <div
        className="group relative aspect-video overflow-hidden bg-char cursor-pointer border border-bone/[0.06]"
        onClick={() => !isPlaying && onClick()}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${set.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title={set.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <div className="absolute inset-0 grain-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${set.id}/maxresdefault.jpg`}
              alt={set.title}
              loading="lazy"
              className="tone tone-hover absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 z-[2] bg-ink/25 group-hover:bg-ink/5 transition-colors duration-700" />

            <div className="absolute inset-0 z-[3] flex items-center justify-center">
              <div className="play-pulse relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-sand/95 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg width="18" height="22" viewBox="0 0 22 26" fill="none" className="ml-1">
                  <path d="M22 13L0 26V0L22 13Z" fill="var(--ink)" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
