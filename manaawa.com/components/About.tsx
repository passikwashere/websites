"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>(200);
  const fernwehRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section id="about" className="relative bg-cream py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="reveal mb-16 md:mb-20 flex flex-col items-center text-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-espresso/35 font-medium">
            The Project
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-6xl tracking-[0.1em] text-espresso uppercase">
            About
          </h2>
          <div className="w-8 h-px bg-espresso/15 mt-2" />
        </div>

        {/* Manaawa — image left, text right */}
        <div
          ref={contentRef}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-tan/20">
            <Image
              src="/images/IMG_7766.JPG"
              alt="Manaawa performing a live set in nature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-base md:text-lg leading-relaxed text-espresso/70">
              Manaawa is a Swiss electronic music project creating emotional, melodic and melancholic dance music.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-espresso/70">
              The sound lives somewhere between the nightclub and rainy summer nights — deep, authentic and carried by unmasked lyrics.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-espresso/70">
              With the Fernweh series, Manaawa brings this atmosphere into nature through intimate live sets in unique outdoor locations.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 md:my-28 flex justify-center">
          <div className="w-12 h-px bg-espresso/10" />
        </div>

        {/* Fernweh — text left, image right */}
        <div
          ref={fernwehRef}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-espresso/35 font-medium">
              Fernweh Live-Sets
            </span>
            <p className="text-base md:text-lg leading-relaxed text-espresso/70">
              The Fernweh melancholic dance music live sets are a collaboration with Home-Vision Media, a Swiss film production company.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-espresso/70">
              Created with the ambition to connect music and some of the most beautiful natural landscapes, the series brings together sound, emotion and visual atmosphere in a unique way.
            </p>
          </div>

          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-tan/20 order-1 md:order-2">
            <Image
              src="/images/IMG_7781.JPG"
              alt="Manaawa and Home-Vision Media during a Fernweh live set"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
