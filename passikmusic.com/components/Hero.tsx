import Image from "next/image";

const NAME = "PASSIK".split("");

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0 grain-photo">
        <Image
          src="/images/hero-stage.jpg"
          alt="PASSIK on stage in front of a festival crowd"
          fill
          priority
          sizes="100vw"
          className="hero-img tone object-cover object-[50%_35%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col justify-end pb-10 md:pb-14">
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
          <p className="fade-in text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-sand/80" style={{ animationDelay: "1.1s" }}>
            DJ &amp; Producer <span className="text-tan/50 mx-2">/</span> Zürich, CH
          </p>
        </div>

        <h1 className="font-display uppercase text-bone leading-[0.8] text-[16.5vw] md:text-[18.5vw] 2xl:text-[17rem] tracking-[-0.04em] -ml-[0.04em] whitespace-nowrap overflow-hidden">
          {NAME.map((l, i) => (
            <span key={i} className="hero-letter" style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
              {l}
            </span>
          ))}
        </h1>

        <div className="mt-8 md:mt-10 flex items-center justify-end gap-6 border-t border-bone/10 pt-6">
          <div className="fade-in flex items-center gap-4" style={{ animationDelay: "1.55s" }}>
            <a
              href="#sets"
              className="text-[11px] tracking-[0.3em] uppercase text-bone/70 hover:text-bone border border-bone/20 hover:border-bone/60 px-5 md:px-6 py-4 whitespace-nowrap transition-colors duration-500"
            >
              Sets
            </a>
            <a
              href="#booking"
              className="group text-[11px] tracking-[0.3em] uppercase text-ink bg-sand hover:bg-bone px-5 md:px-6 py-4 whitespace-nowrap transition-colors duration-500 flex items-center gap-3"
            >
              Booking
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
