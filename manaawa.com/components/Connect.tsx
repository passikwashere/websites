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
    <section id="connect" className="relative bg-cream py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-20 flex flex-col items-center text-center gap-5"
        >
          <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.5em] uppercase text-espresso/25 font-light">
            Socials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl md:text-6xl tracking-[0.08em] text-espresso uppercase">
            Connect
          </h2>
          <div className="w-8 h-px bg-espresso/10 mt-2" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
      className={`reveal group relative flex flex-col justify-between overflow-hidden border border-tan/30 transition-all duration-700 ease-out hover:border-espresso/15 ${
        isLarge
          ? `${platform.span} bg-espresso p-8 md:p-10 min-h-[240px] md:min-h-[320px]`
          : `${platform.span} bg-sand/20 p-6 md:p-8 min-h-[140px] md:min-h-[160px] hover:bg-sand/40`
      }`}
    >
      {/* Icon */}
      <Icon
        className={`transition-all duration-700 ease-out group-hover:scale-110 ${
          isLarge
            ? "w-10 h-10 md:w-12 md:h-12 text-cream/50 group-hover:text-cream/80"
            : "w-6 h-6 text-espresso/30 group-hover:text-espresso/60"
        }`}
      />

      {/* Text */}
      <div className="mt-auto">
        <p
          className={`font-[family-name:var(--font-heading)] text-[9px] tracking-[0.35em] uppercase font-light mb-1.5 ${
            isLarge ? "text-tan/40" : "text-espresso/25"
          }`}
        >
          {platform.description}
        </p>
        <p
          className={`font-[family-name:var(--font-heading)] font-light tracking-wide ${
            isLarge
              ? "text-2xl md:text-3xl text-cream"
              : "text-xl text-espresso"
          }`}
        >
          {platform.name}
        </p>
        <p
          className={`text-xs mt-0.5 font-light ${
            isLarge ? "text-cream/25" : "text-espresso/25"
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
        className={`absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          isLarge ? "text-cream/30" : "text-espresso/30"
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
