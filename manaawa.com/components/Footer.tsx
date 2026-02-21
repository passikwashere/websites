export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-cormorant)] text-sm font-light tracking-[0.3em] uppercase text-[#F5F0E8]/30">
          Manaawa
        </span>
        <span className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-[#F5F0E8]/20">
          © Manaawa 2026
        </span>
      </div>
    </footer>
  );
}
