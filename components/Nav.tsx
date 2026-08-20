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
        top: 20,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0" : "-16px"})`,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 6px 0 16px",
        height: 44,
        background: "rgba(250,248,245,0.92)",
        backdropFilter: "blur(16px)",
        borderRadius: 10,
        border: "1px solid var(--color-border)",
        boxShadow: "0 4px 32px rgba(27,43,75,0.10), 0 1px 4px rgba(27,43,75,0.06)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)",
        whiteSpace: "nowrap",
      }}
    >
      {/* Wordmark */}
      <span style={{
        fontFamily: "var(--font-lora-var)",
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: "-0.025em",
        color: "var(--color-navy)",
        marginRight: 8,
      }}>
        Pare
      </span>

      {/* Divider */}
      <div style={{ width: 1, height: 16, background: "var(--color-border)", flexShrink: 0 }}/>

      {/* Chapter numbers */}
      {CHAPTERS.map(({ id, n }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-inter-var)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: active === id ? "var(--color-teal)" : "var(--color-muted)",
            background: active === id ? "rgba(42,157,143,0.08)" : "transparent",
            border: "none",
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: 6,
            transition: "color 0.2s, background 0.2s",
          }}
        >
          {n}
        </button>
      ))}
    </nav>
  );
}
