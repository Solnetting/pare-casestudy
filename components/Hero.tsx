"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const subRef  = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ease = "cubic-bezier(0.16,1,0.3,1)";
    const items: [React.RefObject<HTMLElement | null>, number][] = [
      [headRef as React.RefObject<HTMLElement>, 60],
      [subRef  as React.RefObject<HTMLElement>, 200],
      [metaRef as React.RefObject<HTMLElement>, 320],
    ];
    items.forEach(([ref, delay]) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      setTimeout(() => {
        el.style.transition = `opacity 1s ${ease}, transform 1s ${ease}`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <header style={{ display: "grid", gridTemplateColumns: "38fr 62fr", minHeight: "100svh" }}>

      {/* Left — navy spine */}
      <div style={{
        background: "var(--color-navy)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "44px 52px 56px",
      }}>
        <span style={{
          fontFamily: "var(--font-lora-var)",
          fontWeight: 600,
          fontSize: "clamp(18px, 2.2vw, 28px)",
          color: "white",
          letterSpacing: "-0.03em",
        }}>
          Pare
        </span>

        <div>
          <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.18)", marginBottom: 28 }}/>
          {[
            ["Role",  "Product Design"],
            ["Year",  "2025"],
            ["Scope", "App · Brand · Campaign"],
          ].map(([k, v]) => (
            <div key={k} style={{ marginBottom: 20 }}>
              <p style={{
                fontFamily: "var(--font-inter-var)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 4,
              }}>{k}</p>
              <p style={{
                fontFamily: "var(--font-inter-var)",
                fontSize: 13,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.5,
              }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — canvas */}
      <div style={{
        background: "var(--color-canvas)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "44px 80px 64px 72px",
      }}>
        <p style={{
          fontFamily: "var(--font-inter-var)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-muted)",
        }}>
          Case Study · 2025
        </p>

        <h1
          ref={headRef}
          style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(52px, 7.5vw, 112px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--color-navy)",
            margin: 0,
          }}
        >
          Make the<br/>
          better<br/>
          choice<br/>
          <em style={{ fontStyle: "italic", color: "var(--color-teal)" }}>feel easy.</em>
        </h1>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
          <p
            ref={subRef}
            style={{
              fontFamily: "var(--font-inter-var)",
              fontSize: 17,
              lineHeight: 1.68,
              color: "var(--color-subtle)",
              maxWidth: 340,
              margin: 0,
            }}
          >
            A curated sustainable retailer — where the better option is always the easier one.
          </p>

          <div ref={metaRef} style={{ flexShrink: 0, textAlign: "right" }}>
            <a
              href="#overview"
              onClick={e => {
                e.preventDefault();
                document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-inter-var)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-teal)",
                textDecoration: "none",
              }}
            >
              01 — Overview
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
