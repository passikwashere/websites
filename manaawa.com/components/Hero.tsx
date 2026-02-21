export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F5F0E8]"
    >
      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D4C4A8]/30 blur-[120px]" />
        <div className="bg-orb-delay absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E8DFD0]/50 blur-[100px]" />
        <div className="bg-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#D4C4A8]/20 blur-[140px]" />
      </div>

      {/* Thin horizontal rule above title */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="w-12 h-px bg-[#1a1a1a]/30 mb-4" />

        <h1 className="hero-title font-[family-name:var(--font-cormorant)] font-light text-[clamp(4rem,14vw,12rem)] leading-none tracking-[0.15em] text-[#1a1a1a] uppercase">
          Manaawa
        </h1>

        <p className="hero-tagline font-[family-name:var(--font-inter)] text-xs md:text-sm tracking-[0.35em] uppercase text-[#1a1a1a]/50 font-light">
          DJ &nbsp;·&nbsp; Producer &nbsp;·&nbsp; Electronic Music
        </p>

        <div className="w-12 h-px bg-[#1a1a1a]/30 mt-4" />
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/30">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#1a1a1a]/30 to-transparent" />
      </div>
    </section>
  );
}
