import { socials, BOOKING_EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-20 md:pt-28 pb-8 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-24">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.3em] uppercase text-bone/50 hover:text-sand transition-colors duration-500"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${BOOKING_EMAIL}`} className="text-[11px] tracking-[0.3em] uppercase text-bone/50 hover:text-sand transition-colors duration-500">
            {BOOKING_EMAIL}
          </a>
        </div>

        <div className="font-display uppercase text-smoke text-[17.5vw] 2xl:text-[16rem] leading-[0.8] tracking-[-0.04em] text-center whitespace-nowrap select-none">
          Passik
        </div>

        <div className="relative mt-10 pt-6 border-t border-bone/10 text-[10px] tracking-[0.3em] uppercase text-bone/30">
          © {new Date().getFullYear()} PASSIK
        </div>
      </div>
    </footer>
  );
}
