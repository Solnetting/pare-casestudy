"use client";

import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "overview",      label: "Overview" },
  { id: "product",       label: "Product" },
  { id: "design-system", label: "Design" },
  { id: "brand",         label: "Brand" },
  { id: "campaign",      label: "Campaign" },
  { id: "reflection",    label: "Reflection" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <nav
      aria-label="Chapter navigation"
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : -16}px)`,
        zIndex: 100,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        background: "rgba(250,248,245,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(228,221,212,0.55)",
        borderRadius: 12,
        boxShadow: "0 4px 28px rgba(27,43,75,0.1), 0 1px 6px rgba(27,43,75,0.06)",
        display: "flex",
        alignItems: "center",
        height: 44,
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          padding: "0 16px 0 14px",
          borderRight: "1px solid rgba(228,221,212,0.7)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: "-0.03em",
            color: "#1B2B4B",
          }}
        >
          Pare
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", padding: "0 4px" }}>
        {CHAPTERS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              height: 44,
              padding: "0 12px",
              fontFamily: "var(--font-inter-var), sans-serif",
              fontSize: 13,
              fontWeight: active === id ? 500 : 400,
              color: active === id ? "#1B2B4B" : "#8C9BAD",
              textDecoration: "none",
              borderBottom: `1.5px solid ${active === id ? "#2A9D8F" : "transparent"}`,
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
