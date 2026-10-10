"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GalleryTile({
  src,
  alt,
  href,
  cls,
  delay,
  remote,
}: {
  src: string;
  alt: string;
  href: string;
  cls: string;
  delay: number;
  remote?: boolean;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>(delay);
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal-img group relative block overflow-hidden grain-photo ${cls}`}
    >
      {remote ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          decoding="async"
          className="tone tone-hover absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04]"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 66vw, 100vw"
          className="tone tone-hover object-cover group-hover:scale-[1.04]"
        />
      )}
    </a>
  );
}
