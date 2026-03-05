"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LatestRelease() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const playerRef = useScrollReveal<HTMLDivElement>(200);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => { if (!dragging) setCurrentTime(audio.currentTime); };
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => { setPlaying(false); setCurrentTime(0); };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [dragging]);

  const seek = useCallback((clientX: number) => {
    const bar = progressRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  }, [duration]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    seek(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) seek(e.clientX);
  };

  const onPointerUp = () => {
    setDragging(false);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="relative bg-espresso py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-16 flex flex-col items-center text-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-tan/40 font-medium">
            New Music
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-cream uppercase">
            Latest Release
          </h2>
          <div className="w-8 h-px bg-tan/25 mt-2" />
        </div>

        {/* Player card */}
        <div
          ref={playerRef}
          className="reveal mx-auto max-w-2xl"
        >
          <div className="relative rounded-2xl overflow-hidden bg-espresso border border-cream/[0.06] shadow-2xl shadow-black/40">
            {/* Top: artwork + info */}
            <div className="flex flex-col sm:flex-row">
              {/* Artwork */}
              <div className="relative w-full sm:w-[240px] md:w-[280px] aspect-square sm:aspect-auto shrink-0 group">
                <Image
                  src="/images/is-it-enough.jpg"
                  alt="Is It Enough — Manaawa & Cole Morehead"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="280px"
                />
                {/* Play overlay on artwork */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    {playing ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="4" y="3" width="4" height="14" rx="1" fill="var(--espresso)" />
                        <rect x="12" y="3" width="4" height="14" rx="1" fill="var(--espresso)" />
                      </svg>
                    ) : (
                      <svg width="18" height="22" viewBox="0 0 22 26" fill="none" className="ml-1">
                        <path d="M22 13L0 26V0L22 13Z" fill="var(--espresso)" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>

              {/* Info + controls */}
              <div className="flex-1 flex flex-col justify-between p-6 md:p-8 gap-6">
                {/* Track info */}
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-tan/40 font-medium mb-3">
                    Manaawa &amp; Cole Morehead
                  </p>
                  <h3 className="font-[family-name:var(--font-cormorant)] font-light text-2xl md:text-3xl tracking-[0.05em] text-cream">
                    Is It Enough
                  </h3>
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4">
                  {/* Play button + time */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/30 hover:bg-cream/[0.04] transition-all duration-300 shrink-0"
                    >
                      {playing ? (
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <rect x="4" y="3" width="4" height="14" rx="1" fill="currentColor" />
                          <rect x="12" y="3" width="4" height="14" rx="1" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg width="14" height="16" viewBox="0 0 22 26" fill="none" className="ml-0.5">
                          <path d="M22 13L0 26V0L22 13Z" fill="currentColor" />
                        </svg>
                      )}
                    </button>

                    <div className="flex-1 flex flex-col gap-2">
                      {/* Progress bar */}
                      <div
                        ref={progressRef}
                        className="relative h-1 bg-cream/[0.08] rounded-full cursor-pointer group/bar"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                      >
                        {/* Filled */}
                        <div
                          className="absolute top-0 left-0 h-full bg-tan/60 rounded-full transition-[width] duration-100"
                          style={{ width: `${progress}%` }}
                        />
                        {/* Thumb */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cream shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200"
                          style={{ left: `calc(${progress}% - 6px)` }}
                        />
                      </div>

                      {/* Time */}
                      <div className="flex justify-between">
                        <span className="text-[10px] text-cream/25 font-mono">
                          {fmt(currentTime)}
                        </span>
                        <span className="text-[10px] text-cream/25 font-mono">
                          {duration > 0 ? fmt(duration) : "--:--"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spotify link */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://open.spotify.com/intl-de/artist/0DuSv6WDqfozjWVK47Cejj?si=gii5Il4tTQeZY_8t6d7fOQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-cream/50 hover:text-cream border border-cream/10 hover:border-cream/25 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              More on Spotify
            </a>
          </div>

          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            src="/music/is-it-enough.mp3"
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
