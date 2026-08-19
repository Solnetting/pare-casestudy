"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "var(--color-canvas)" }}
    >
      {/* Subtle warm shape — parallax */}
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute will-change-transform"
        style={{
          right: "-10%",
          top: "5%",
          width: "55vw",
          height: "75vh",
          borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
          background: "var(--color-apricot)",
          opacity: 0.45,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: "5%",
          bottom: "10%",
          width: "28vw",
          height: "28vw",
          borderRadius: "50%",
          background: "var(--color-mint)",
          opacity: 0.55,
        }}
      />

      {/* Top: wordmark + year */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-10 md:px-14">
        <span
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: "-0.03em",
            color: "var(--color-navy)",
          }}
        >
          Pare
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter-var), sans-serif",
            fontSize: 12,
            color: "var(--color-muted)",
            letterSpacing: "0.06em",
          }}
        >
          Case Study · 2025
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-8 pb-20 md:px-14 md:pb-24">
        <h1
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: "clamp(52px, 7.5vw, 96px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "var(--color-navy)",
            maxWidth: 820,
            marginBottom: 32,
          }}
        >
          Make the better<br />
          choice{" "}
          <em
            style={{ fontStyle: "italic", color: "var(--color-teal)" }}
          >
            feel easy.
          </em>
        </h1>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p
            style={{
              fontFamily: "var(--font-inter-var), sans-serif",
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--color-subtle)",
              maxWidth: 420,
            }}
          >
            Pare is a curated retailer for thoughtful, lower-waste everyday
            essentials — where sustainable choices are the easy default.
          </p>

          <div className="flex flex-col items-start gap-6 md:items-end">
            {/* Meta */}
            <div className="flex gap-10">
              {[
                ["Role", "Product Design"],
                ["Year", "2025"],
                ["Scope", "App · Brand · Campaign"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter-var), sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                      marginBottom: 4,
                    }}
                  >
                    {k}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter-var), sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--color-navy)",
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>

            {/* Scroll CTA */}
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-inter-var), sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--color-teal)",
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

      {/* Bottom rule */}
      <div
        className="relative z-10 mx-8 md:mx-14"
        style={{ height: 1, background: "var(--color-border)" }}
      />
    </header>
  );
}
