import { getInstagramPosts } from "@/lib/instagram";
import { socials } from "@/lib/site";
import GalleryTile from "./GalleryTile";

const photos = [
  { src: "/images/sunice.jpg", alt: "PASSIK at SunIce Festival St. Moritz", cls: "md:col-span-8 aspect-[16/10]" },
  { src: "/images/analog-1.jpg", alt: "PASSIK, analog portrait", cls: "md:col-span-4 aspect-[3/4] md:aspect-auto" },
  { src: "/images/maex-booth.jpg", alt: "PASSIK in the booth at MÄX Zürich", cls: "md:col-span-4 aspect-[3/4]" },
  { src: "/images/festival-night.jpg", alt: "Festival crowd at night", cls: "md:col-span-4 aspect-[3/4]" },
  { src: "/images/analog-2.jpg", alt: "PASSIK on a staircase, analog", cls: "md:col-span-4 aspect-[3/4]" },
  { src: "/images/maex-screen.jpg", alt: "PASSIK logo on the LED wall at MÄX Zürich", cls: "md:col-span-12 aspect-[21/9]" },
];

const instagram = socials.find((s) => s.name === "Instagram")!;

export default async function Gallery() {
  const posts = await getInstagramPosts(6);

  return (
    <section id="gallery" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 md:mb-16 flex items-end justify-between gap-6 border-b border-bone/10 pb-8">
          <h2 className="font-display uppercase text-bone text-5xl md:text-8xl leading-[0.85]">Instagram</h2>
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.3em] uppercase text-bone/50 hover:text-sand transition-colors duration-500 whitespace-nowrap"
          >
            @passikmusic ↗
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {posts.map((p, i) => (
              <GalleryTile
                key={p.id}
                src={p.image}
                alt={p.alt}
                href={p.permalink}
                cls="aspect-[4/5]"
                remote
                delay={(i % 3) * 120}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {photos.map((p, i) => (
              <GalleryTile key={p.src} {...p} href={instagram.url} delay={(i % 3) * 120} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
