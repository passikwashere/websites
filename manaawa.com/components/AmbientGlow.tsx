"use client";

import { useEffect, useState } from "react";

export default function AmbientGlow() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: ((e.clientY + window.scrollY) / document.documentElement.scrollHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] opacity-40 transition-opacity duration-[2000ms]"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}% ${(mousePos.y)}%, var(--tan), transparent 55%)`,
      }}
    />
  );
}
