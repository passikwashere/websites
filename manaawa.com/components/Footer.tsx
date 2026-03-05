export default function Footer() {
  const segment = "MANAAWA \u00B7 ";
  const marqueeText = segment.repeat(14);

  return (
    <footer className="bg-espresso overflow-hidden">
      {/* Marquee strip */}
      <div className="py-6 border-b border-cream/[0.04] select-none">
        <div className="marquee-track flex whitespace-nowrap">
          <span
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light tracking-[0.12em] text-cream/[0.04] uppercase"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
          <span
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light tracking-[0.12em] text-cream/[0.04] uppercase"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-cormorant)] text-sm font-light tracking-[0.3em] uppercase text-cream/20">
          Manaawa
        </span>
        <span className="text-[10px] tracking-[0.15em] text-cream/15 font-medium">
          &copy; Manaawa 2026
        </span>
      </div>
    </footer>
  );
}
