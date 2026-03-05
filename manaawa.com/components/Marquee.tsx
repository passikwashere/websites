export default function Marquee() {
  const segment = "MANAAWA \u00B7 ";
  const text = segment.repeat(14);

  return (
    <div className="overflow-hidden py-5 bg-sand/40 border-y border-tan/15 select-none">
      <div className="marquee-track flex whitespace-nowrap">
        <span
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-[0.12em] text-espresso/[0.06] uppercase"
          aria-hidden="true"
        >
          {text}
        </span>
        <span
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-[0.12em] text-espresso/[0.06] uppercase"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
