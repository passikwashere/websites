export default function Footer() {
  const segment = "MANAAWA \u00B7 ";
  const marqueeText = segment.repeat(14);

  return (
    <footer className="bg-espresso overflow-hidden">
      {/* Marquee strip */}
      <div className="py-6 border-b border-cream/[0.04] select-none">
        <div className="marquee-track flex whitespace-nowrap">
          <span
            className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light tracking-[0.15em] text-cream/[0.04] uppercase"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
          <span
            className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light tracking-[0.15em] text-cream/[0.04] uppercase"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-[family-name:var(--font-heading)] text-sm font-light tracking-[0.3em] uppercase text-cream/15">
          Manaawa
        </span>

        <a
          href="mailto:booking@manaawa.com"
          className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.25em] uppercase text-cream/25 hover:text-cream/60 transition-colors duration-500 font-light"
        >
          booking@manaawa.com
        </a>

        <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.15em] text-cream/10 font-light">
          &copy; Manaawa 2026
        </span>
      </div>
    </footer>
  );
}
