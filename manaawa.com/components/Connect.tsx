"use client";

import {
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";
import { SiXiaohongshu } from "react-icons/si";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { IconType } from "react-icons";

interface Platform {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
  external?: boolean;
}

const platforms: Platform[] = [
  {
    name: "YouTube",
    handle: "@manaawa.project",
    url: "https://www.youtube.com/@manaawa.project",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    handle: "@manaawa.project",
    url: "https://www.instagram.com/manaawa.project/",
    icon: FaInstagram,
  },
  {
    name: "Spotify",
    handle: "Manaawa",
    url: "https://open.spotify.com/intl-de/artist/0DuSv6WDqfozjWVK47Cejj?si=uzDwIMHwT-eiAJItRFYZMQ",
    icon: FaSpotify,
  },
  {
    name: "TikTok",
    handle: "@manaawa",
    url: "https://tr.ee/nLv28DKuXg",
    icon: FaTiktok,
  },
  {
    name: "RedNote",
    handle: "@manaawa",
    url: "https://tr.ee/R4xGPlbyyt",
    icon: SiXiaohongshu,
  },
  {
    name: "E-Mail",
    handle: "booking@manaawa.com",
    url: "mailto:booking@manaawa.com",
    icon: FaEnvelope,
    external: false,
  },
];

export default function Connect() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="connect" className="relative bg-cream py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-20 flex flex-col items-center text-center gap-4"
        >
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-espresso uppercase">
            Connect
          </h2>
          <div className="w-8 h-px bg-espresso/15 mt-2" />
        </div>

        {/* Social links — horizontal row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {platforms.map((platform, i) => (
            <SocialCard key={platform.name} platform={platform} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialCard({
  platform,
  delay,
}: {
  platform: Platform;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>(delay);
  const Icon = platform.icon;

  return (
    <a
      ref={ref}
      href={platform.url}
      {...(platform.external !== false ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="reveal group relative flex flex-col items-center justify-center gap-4 py-10 md:py-14 rounded-2xl bg-espresso border border-espresso/80 overflow-hidden transition-all duration-500 hover:border-tan/30 hover:shadow-xl hover:shadow-tan/10"
    >
      {/* Animated gradient bg on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-tan/[0.06] via-transparent to-gold/[0.04]" />

      {/* Glow ring behind icon */}
      <div className="relative">
        <div className="absolute inset-0 scale-[2.5] rounded-full bg-tan/0 group-hover:bg-tan/[0.06] blur-xl transition-all duration-700" />
        <Icon className="relative w-7 h-7 md:w-8 md:h-8 text-cream/40 group-hover:text-cream/90 transition-all duration-500 group-hover:scale-110" />
      </div>

      {/* Name */}
      <span className="relative text-[11px] md:text-xs tracking-[0.3em] uppercase text-cream/50 group-hover:text-cream/90 font-medium transition-colors duration-500">
        {platform.name}
      </span>

      {/* Handle — slides up on hover */}
      <span className="relative text-[9px] tracking-[0.15em] text-cream/0 group-hover:text-cream/30 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        {platform.handle}
      </span>

      {/* Corner accent line */}
      <div className="absolute top-0 right-0 w-0 h-px bg-tan/40 group-hover:w-12 transition-all duration-700" />
      <div className="absolute top-0 right-0 h-0 w-px bg-tan/40 group-hover:h-12 transition-all duration-700" />
    </a>
  );
}
