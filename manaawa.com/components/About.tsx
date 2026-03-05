"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>(300);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = imageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      setParallaxY((progress - 0.5) * -40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #141210 50%, #111111 100%)",
      }}
    >
      {/* Heading — centered */}
      <div
        ref={headingRef}
        className="reveal mb-20 md:mb-28 flex flex-col items-center text-center gap-5 px-6"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase text-gold/50 font-medium">
          The Project
        </span>
        <div className="w-[60px] h-px bg-gold/20" />
        <h2 className="font-[family-name:var(--font-cormorant)] font-light text-[10vw] md:text-[8vw] leading-[0.9] tracking-[0.08em] text-cream uppercase">
          About
        </h2>
      </div>

      {/* Asymmetric layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1px_1fr] gap-0 items-center">
        {/* Image — bleeds to left edge */}
        <div
          ref={imageRef}
          className={`relative aspect-[3/4] md:aspect-auto md:h-[85vh] overflow-hidden about-image-reveal ${
            imageVisible ? "visible" : ""
          }`}
        >
          <div
            style={{ transform: `translateY(${parallaxY}px)` }}
            className="absolute inset-[-40px] transition-transform duration-100"
          >
            <Image
              src="/images/IMG_7766.JPG"
              alt="Manaawa performing a live set in nature"
              fill
              className="object-cover saturate-[0.85]"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-amber-900/[0.08] mix-blend-multiply" />
          </div>
        </div>

        {/* Gold separator line — desktop only */}
        <div className="hidden md:block w-px h-[60%] self-center bg-gold/15" />

        {/* Text */}
        <div
          ref={textRef}
          className="reveal-stagger px-8 md:px-16 lg:px-24 py-12 md:py-0 flex flex-col gap-8 max-w-[520px]"
        >
          <p className="text-[15px] md:text-base leading-[2] text-cream/60">
            Manaawa is a Swiss electronic music project creating emotional, melodic and melancholic dance music.
          </p>
          <p className="text-[15px] md:text-base leading-[2] text-cream/60">
            The sound lives somewhere between the nightclub and rainy summer nights — deep, authentic and carried by unmasked lyrics.
          </p>
          <p className="text-[15px] md:text-base leading-[2] text-cream/60">
            With the Fernweh series, Manaawa brings this atmosphere into nature through intimate live sets in unique outdoor locations.
          </p>
        </div>
      </div>
    </section>
  );
}
