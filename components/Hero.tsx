"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const shapeRef  = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (shapeRef.current)   shapeRef.current.style.transform   = `translateY(${y * 0.22}px)`;
      if (contentRef.current) contentRef.current.style.transform = `translateY(${y * 0.06}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "relative",
        minHeight: "100svh",
        background: "var(--color-canvas)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background shapes — parallax */}
      <div ref={shapeRef} aria-hidden style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        {/* Large cream rectangle */}
        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "8%",
            width: "46%",
            height: "80%",
            background: "var(--color-cream)",
            borderRadius: 16,
            opacity: 0.8,
          }}
        />
        {/* Mint accent */}
        <div
          style={{
            position: "absolute",
            right: "18%",
            bottom: "12%",
            width: "22%",
            height: "28%",
            background: "var(--color-mint)",
            borderRadius: 12,
            opacity: 0.7,
          }}
        />
        {/* Apricot circle */}
        <div
          style={{
            position: "absolute",
            left: "5%",
            bottom: "15%",
            width: 180,
            height: 180,
            background: "var(--color-apricot)",
            borderRadius: "50%",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Top bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 56px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: "-0.03em",
            color: "#1B2B4B",
          }}
        >
          Pare
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D8F" }}/>
          <span
            style={{
              fontFamily: "var(--font-inter-var), sans-serif",
              fontSize: 12,
              color: "#8C9BAD",
              letterSpacing: "0.06em",
            }}
          >
            Case Study · 2025
          </span>
        </div>
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 56px 52px",
          willChange: "transform",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: "clamp(58px, 8.5vw, 108px)",
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
            color: "#1B2B4B",
            maxWidth: "70vw",
            marginBottom: 36,
          }}
        >
          Make the better<br />
          choice{" "}
          <em style={{ fontStyle: "italic", color: "#2A9D8F" }}>feel easy.</em>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter-var), sans-serif",
              fontSize: 18,
              lineHeight: 1.65,
              color: "#6B7A8A",
              maxWidth: 400,
              margin: 0,
            }}
          >
            Pare is a curated retailer for thoughtful, lower-waste everyday
            essentials — where sustainable choices are the easy default.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 24 }}>
            <div style={{ display: "flex", gap: 32 }}>
              {[["Role", "Product Design"], ["Year", "2025"], ["Scope", "App · Brand · Campaign"]].map(([k, v]) => (
                <div key={k}>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8C9BAD", marginBottom: 4 }}>{k}</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "#1B2B4B" }}>{v}</p>
                </div>
              ))}
            </div>

            <a
              href="#overview"
              onClick={(e) => { e.preventDefault(); document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-inter-var), sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "#2A9D8F",
                textDecoration: "none",
              }}
            >
              Explore the case study
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
