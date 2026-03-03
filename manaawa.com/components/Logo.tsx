export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      className={className}
      aria-label="Manaawa"
      role="img"
    >
      {/* M */}
      <polyline points="8,125 40,5 72,82 104,5 136,125" />
      {/* A */}
      <polyline points="158,125 194,5 230,125" />
      {/* N */}
      <polyline points="252,125 274,5 338,125 360,5" />
      {/* A */}
      <polyline points="382,125 418,5 454,125" />
      {/* A */}
      <polyline points="476,125 512,5 548,125" />
      {/* W */}
      <polyline points="570,5 602,125 634,48 666,125 698,5" />
      {/* A */}
      <polyline points="720,125 756,5 792,125" />
    </svg>
  );
}
