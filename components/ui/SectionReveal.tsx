"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  from?: "bottom" | "left" | "right";
  scale?: boolean;
  distance?: number;
}

export default function SectionReveal({
  children,
  className,
  style,
  delay = 0,
  from = "bottom",
  scale = false,
  distance = 40,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const dx = from === "left" ? -distance : from === "right" ? distance : 0;
    const dy = from === "bottom" ? distance : 0;
    const sc = scale ? "scale(0.96)" : "";

    const initial = `translateX(${dx}px) translateY(${dy}px) ${sc}`.trim();

    el.style.opacity = "0";
    el.style.transform = initial;
    el.style.willChange = "opacity, transform";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translateX(0) translateY(0) scale(1)";
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, from, scale, distance]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
