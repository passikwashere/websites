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
    let raf: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, var(--tan), transparent 55%)`;
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
      className="fixed inset-0 pointer-events-none z-[2] opacity-40"
    />
  );
}
