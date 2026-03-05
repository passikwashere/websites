"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Platform {
  name: string;
  label: string;
  handle: string;
  url: string;
}

const platforms: Platform[] = [
  {
    name: "YouTube",
    label: "Sets & mixes",
    handle: "@manaawa.project",
    url: "https://www.youtube.com/@manaawa.project",
  },
  {
    name: "Instagram",
    label: "Behind the scenes",
    handle: "@manaawa.project",
    url: "https://www.instagram.com/manaawa.project/",
  },
  {
    name: "Spotify",
    label: "Artist profile",
    handle: "Manaawa",
    url: "https://open.spotify.com/intl-de/artist/0DuSv6WDqfozjWVK47Cejj?si=uzDwIMHwT-eiAJItRFYZMQ",
  },
  {
    name: "TikTok",
    label: "Short clips",
    handle: "@manaawa",
    url: "https://tr.ee/nLv28DKuXg",
  },
];

export default function Connect() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="connect"
      className="relative py-32 md:py-48 px-6"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0f0e0c 50%, #111111 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-24 md:mb-32 flex flex-col items-center text-center gap-5"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold/50 font-medium">
            Press Kit
          </span>
          <div className="w-[60px] h-px bg-gold/20" />
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-[10vw] md:text-[8vw] leading-[0.9] tracking-[0.08em] text-cream uppercase">
            Connect
          </h2>
        </div>

        {/* Links — minimal, staggered */}
        <div className="flex flex-col items-center gap-12 md:gap-16">
          {platforms.map((platform, i) => (
            <ConnectLink key={platform.name} platform={platform} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectLink({
  platform,
  delay,
}: {
  platform: Platform;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>(delay);

  return (
    <a
      ref={ref}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group flex flex-col items-center text-center"
    >
      <span className="text-[10px] tracking-[0.5em] uppercase text-gold/40 font-medium mb-3">
        {platform.label}
      </span>
      <span className="link-underline font-[family-name:var(--font-cormorant)] font-light text-3xl md:text-5xl tracking-[0.08em] text-cream/80 group-hover:text-gold transition-colors duration-600 uppercase">
        {platform.name}
      </span>
      <span className="text-[11px] text-cream/20 mt-2 tracking-wide">
        {platform.handle}
      </span>
    </a>
  );
}
