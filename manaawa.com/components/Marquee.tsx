"use client";

import { useEffect, useRef, useState } from "react";

export default function Marquee() {
  const segment = "MANAAWA \u00B7 ";
  const text = segment.repeat(14);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden py-8 md:py-12 select-none border-y border-gold/[0.06] transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-60"
      }`}
    >
      <div className="marquee-track flex whitespace-nowrap">
        <span
          className="text-stroke font-[family-name:var(--font-cormorant)] text-[8vw] md:text-[6vw] font-light tracking-[0.1em] uppercase"
          aria-hidden="true"
        >
          {text}
        </span>
        <span
          className="text-stroke font-[family-name:var(--font-cormorant)] text-[8vw] md:text-[6vw] font-light tracking-[0.1em] uppercase"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
