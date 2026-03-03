export default function Marquee() {
  const segment = "MANAAWA \u00B7 ";
  const text = segment.repeat(14);

  return (
    <div className="overflow-hidden py-6 bg-sand/30 border-y border-tan/10 select-none">
      <div className="marquee-track flex whitespace-nowrap">
        <span
          className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-light tracking-[0.15em] text-espresso/[0.04] uppercase"
          aria-hidden="true"
        >
          {text}
        </span>
        <span
          className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-light tracking-[0.15em] text-espresso/[0.04] uppercase"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
