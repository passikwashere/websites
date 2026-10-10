"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { bio } from "@/lib/site";

export default function About() {
  const imgRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>(150);

  return (
    <section id="about" className="relative bg-char py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-14 md:gap-10">
        <div className="md:col-span-5">
          <div ref={imgRef} className="reveal-img relative aspect-[3/4] overflow-hidden grain-photo">
            <Image
              src="/images/press-sitting.jpg"
              alt="PASSIK"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="tone object-cover"
            />
          </div>
        </div>

        <div ref={textRef} className="reveal md:col-span-6 md:col-start-7 flex flex-col justify-center">
          <h2 className="font-display uppercase text-bone text-5xl md:text-8xl leading-[0.85] mb-10 md:mb-14">About</h2>
          <div className="space-y-6 text-bone/65 text-[15px] md:text-[17px] leading-[1.8] font-light max-w-xl">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
