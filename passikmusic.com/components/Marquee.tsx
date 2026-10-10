import { tracks } from "@/lib/site";

export default function Marquee() {
  const items = [...tracks, ...tracks];
  return (
    <section aria-label="Tracks" className="group/marquee relative bg-ink border-y border-bone/[0.07] py-8 md:py-10 overflow-hidden">
      <div className="marquee-track flex w-max items-center group-hover/marquee:[animation-play-state:paused]">
        {items.map((t, i) => (
          <div key={i} className="flex items-center" aria-hidden={i >= tracks.length || undefined}>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={i >= tracks.length ? -1 : undefined}
              className={`font-display uppercase text-3xl md:text-5xl whitespace-nowrap px-6 md:px-10 transition-colors duration-300 hover:text-bone ${
                i % 2 === 0 ? "text-sand" : "text-bone/20"
              }`}
            >
              {t.title}
            </a>
            <span className="text-tan/40 text-lg">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
