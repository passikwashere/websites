import Image from "next/image";

export default function Footer() {
  const segment = "MANAAWA \u00B7 ";
  const marqueeText = segment.repeat(14);

  return (
    <footer className="overflow-hidden border-t border-gold/[0.08]">
      {/* Outlined marquee strip */}
      <div className="py-8 select-none">
        <div className="marquee-track flex whitespace-nowrap">
          <span
            className="text-stroke-footer font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-[0.1em] uppercase"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
          <span
            className="text-stroke-footer font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-[0.1em] uppercase"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/images/PNG-05.png"
          alt="Manaawa"
          width={100}
          height={25}
          className="h-3 w-auto opacity-15"
        />
        <span className="text-[10px] tracking-[0.2em] text-cream/10">
          &copy; Manaawa 2026
        </span>
      </div>
    </footer>
  );
}
