"use client";

import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "overview",      n: "01" },
  { id: "product",       n: "02" },
  { id: "design-system", n: "03" },
  { id: "brand",         n: "04" },
  { id: "campaign",      n: "05" },
  { id: "reflection",    n: "06" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0, rootMargin: "-35% 0px -55% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach(io => io.disconnect());
  }, []);

  return (
    <nav
      aria-label="Chapter navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 64px",
        background: "rgba(250,248,245,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <span style={{
        fontFamily: "var(--font-lora-var)",
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: "-0.025em",
        color: "var(--color-navy)",
      }}>
        Pare
      </span>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {CHAPTERS.map(({ id, n }) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-inter-var)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: active === id ? "var(--color-teal)" : "var(--color-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.25s",
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </nav>
  );
}
