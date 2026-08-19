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
  const [show, setShow]     = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    CHAPTERS.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });

    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <nav
      aria-label="Chapter navigation"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-canvas/95 backdrop-blur-md transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <span
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: 17,
            letterSpacing: "-0.03em",
            color: "var(--color-navy)",
          }}
        >
          Pare
        </span>

        <div className="flex items-center gap-7 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {CHAPTERS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "var(--font-inter-var), sans-serif",
                fontSize: 13,
                fontWeight: active === id ? 500 : 400,
                color: active === id ? "var(--color-navy)" : "var(--color-muted)",
                whiteSpace: "nowrap",
                textDecoration: "none",
                transition: "color 0.2s",
                paddingBottom: 2,
                borderBottom: active === id ? "1.5px solid var(--color-teal)" : "1.5px solid transparent",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
