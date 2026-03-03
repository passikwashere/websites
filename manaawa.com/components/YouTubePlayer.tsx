"use client";

import { useState } from "react";

export interface Video {
  id: string;
  title: string;
}

export default function YouTubePlayer({ videos }: { videos: Video[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = videos[activeIndex];
  const thumbnail = `https://img.youtube.com/vi/${current.id}/maxresdefault.jpg`;

  const selectVideo = (i: number) => {
    setActiveIndex(i);
    setPlaying(false);
  };

  return (
    <div className="space-y-5">
      {/* ── Main player ── */}
      <div
        className="relative aspect-video overflow-hidden bg-espresso group cursor-pointer shadow-2xl shadow-black/25"
        onClick={() => !playing && setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="play-pulse relative w-[72px] h-[72px] rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-cream transition-transform duration-700 ease-out group-hover:scale-110">
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                  className="ml-1"
                >
                  <path d="M22 13L0 26V0L22 13Z" fill="var(--espresso)" />
                </svg>
              </div>
            </div>

            {/* Title bar */}
            <div className="absolute bottom-0 inset-x-0 p-5 md:p-7 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <p className="font-[family-name:var(--font-heading)] text-[11px] md:text-sm text-cream/60 tracking-[0.2em] uppercase font-light">
                {current.title}
              </p>
            </div>
          </>
        )}
      </div>

      {/* ── Playlist thumbnails (only if multiple) ── */}
      {videos.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {videos.map((video, i) => (
            <button
              key={video.id}
              onClick={() => selectVideo(i)}
              className={`relative aspect-video overflow-hidden group/t transition-all duration-500 ${
                i === activeIndex
                  ? "ring-2 ring-tan ring-offset-2 ring-offset-espresso"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                <span className="font-[family-name:var(--font-heading)] text-[9px] md:text-[10px] text-cream/70 tracking-[0.2em] uppercase font-light truncate">
                  {video.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
