"use client";

import { useEffect, useRef } from "react";

export default function AmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let inHero = true;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        inHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
      }
    };

    const animate = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      const size = inHero ? 600 : 300;
      const alpha = inHero ? 0.35 : 0.15;
      el.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, rgba(196, 167, 125, ${alpha}), transparent 55%)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-[2]"
    />
  );
}
