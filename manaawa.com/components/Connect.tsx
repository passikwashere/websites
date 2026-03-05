"use client";

import {
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa6";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { IconType } from "react-icons";

interface Platform {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
  description: string;
  span: string;
}

const platforms: Platform[] = [
  {
    name: "YouTube",
    handle: "@manaawa.project",
    url: "https://www.youtube.com/@manaawa.project",
    icon: FaYoutube,
    description: "Sets & mixes",
    span: "col-span-2 row-span-2",
  },
  {
    name: "Instagram",
    handle: "@manaawa.project",
    url: "https://www.instagram.com/manaawa.project/",
    icon: FaInstagram,
    description: "Behind the scenes",
    span: "col-span-1",
  },
  {
    name: "Spotify",
    handle: "Manaawa",
    url: "https://open.spotify.com/intl-de/artist/0DuSv6WDqfozjWVK47Cejj?si=uzDwIMHwT-eiAJItRFYZMQ",
    icon: FaSpotify,
    description: "Artist profile",
    span: "col-span-1",
  },
  {
    name: "TikTok",
    handle: "@manaawa",
    url: "https://tr.ee/nLv28DKuXg",
    icon: FaTiktok,
    description: "Short clips",
    span: "col-span-2",
  },
];

export default function Connect() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="connect" className="relative bg-cream py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-20 flex flex-col items-center text-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-espresso/35 font-medium">
            Press Kit
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-espresso uppercase">
            Connect
          </h2>
          <div className="w-8 h-px bg-espresso/15 mt-2" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, i) => (
            <BentoCard key={platform.name} platform={platform} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  platform,
  delay,
}: {
  platform: Platform;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>(delay);
  const Icon = platform.icon;
  const isLarge = platform.span.includes("row-span-2");

  return (
    <a
      ref={ref}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-xl border border-tan/40 transition-all duration-500 hover:border-espresso/20 hover:shadow-lg hover:shadow-tan/20 ${
        isLarge
          ? `${platform.span} bg-espresso p-8 md:p-10 min-h-[240px] md:min-h-[320px]`
          : `${platform.span} bg-sand/30 p-6 md:p-8 min-h-[140px] md:min-h-[160px] hover:bg-sand/60`
      }`}
    >
      {/* Icon */}
      <Icon
        className={`transition-transform duration-500 group-hover:scale-110 ${
          isLarge
            ? "w-10 h-10 md:w-12 md:h-12 text-cream/60 group-hover:text-cream/90"
            : "w-6 h-6 text-espresso/40 group-hover:text-espresso/70"
        }`}
      />

      {/* Text */}
      <div className="mt-auto">
        <p
          className={`text-[10px] tracking-[0.3em] uppercase font-medium mb-1 ${
            isLarge ? "text-tan/50" : "text-espresso/30"
          }`}
        >
          {platform.description}
        </p>
        <p
          className={`font-[family-name:var(--font-cormorant)] font-light tracking-wide ${
            isLarge
              ? "text-2xl md:text-3xl text-cream"
              : "text-xl text-espresso"
          }`}
        >
          {platform.name}
        </p>
        <p
          className={`text-xs mt-0.5 ${
            isLarge ? "text-cream/30" : "text-espresso/30"
          }`}
        >
          {platform.handle}
        </p>
      </div>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={`absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          isLarge ? "text-cream/40" : "text-espresso/40"
        }`}
      >
        <path
          d="M3 13L13 3M13 3H6M13 3V10"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
