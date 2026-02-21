"use client";

import { FaYoutube, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa6";
import { useScrollFade } from "@/hooks/useScrollFade";

const platforms = [
  {
    name: "YouTube",
    handle: "@manaawa.project",
    url: "https://www.youtube.com/@manaawa.project",
    icon: FaYoutube,
    description: "Sets & mixes",
  },
  {
    name: "Instagram",
    handle: "@manaawa.project",
    url: "https://www.instagram.com/manaawa.project/",
    icon: FaInstagram,
    description: "Behind the scenes",
  },
  {
    name: "Spotify",
    handle: "Manaawa",
    url: "https://open.spotify.com/intl-de/artist/0DuSv6WDqfozjWVK47Cejj?si=uzDwIMHwT-eiAJItRFYZMQ",
    icon: FaSpotify,
    description: "Artist profile",
  },
  {
    name: "TikTok",
    handle: "@manaawa",
    url: "https://tr.ee/nLv28DKuXg",
    icon: FaTiktok,
    description: "Short clips",
  },
];

export default function Connect() {
  const headingRef = useScrollFade<HTMLDivElement>();

  return (
    <section
      id="connect"
      className="relative bg-[#F5F0E8] py-28 md:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="fade-in mb-20 flex flex-col items-center text-center gap-4">
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#1a1a1a]/40">
            Press Kit
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-[#1a1a1a] uppercase">
            Connect
          </h2>
          <div className="w-8 h-px bg-[#1a1a1a]/20 mt-2" />
        </div>

        {/* Platform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platforms.map((platform, i) => (
            <PlatformCard key={platform.name} platform={platform} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformCard({
  platform,
  delay,
}: {
  platform: (typeof platforms)[0];
  delay: number;
}) {
  const ref = useScrollFade<HTMLAnchorElement>(delay);
  const Icon = platform.icon;

  return (
    <a
      ref={ref}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fade-in group flex items-center gap-6 p-7 border border-[#D4C4A8]/60 hover:border-[#1a1a1a]/30 hover:bg-[#E8DFD0]/60 transition-all duration-400 rounded-sm"
    >
      <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-[#D4C4A8] group-hover:border-[#1a1a1a]/30 rounded-sm transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors duration-300" />
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/40 font-light">
          {platform.description}
        </span>
        <span className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-wide text-[#1a1a1a]">
          {platform.name}
        </span>
        <span className="font-[family-name:var(--font-inter)] text-xs text-[#1a1a1a]/40 truncate">
          {platform.handle}
        </span>
      </div>
      <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#1a1a1a]/50">
          <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}
