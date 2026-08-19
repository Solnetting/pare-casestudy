"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef   = useRef<HTMLDivElement>(null);
  const h1Ref   = useRef<HTMLHeadingElement>(null);
  const subRef  = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* --- Entrance animation on mount --- */
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ease = "cubic-bezier(0.16,1,0.3,1)";

    const elements: [HTMLElement | null, string, number][] = [
      [h1Ref.current,   "translateY(60px)", 80],
      [subRef.current,  "translateY(40px)", 240],
      [metaRef.current, "translateY(30px)", 380],
    ];

    if (!reduced) {
      elements.forEach(([el, from]) => {
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = from;
      });

      const timers = elements.map(([el, , ms]) => {
        return setTimeout(() => {
          if (!el) return;
          el.style.transition = `opacity 1.1s ${ease}, transform 1.1s ${ease}`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, ms);
      });

      return () => timers.forEach(clearTimeout);
    }
  }, []);

  useEffect(() => {
    /* --- Parallax on scroll --- */
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.25}px)`;
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
      {/* Parallax background shapes */}
      <div
        ref={bgRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: "-25%",
          willChange: "transform",
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "absolute", right: "-4%", top: "12%", width: "48%", height: "72%", background: "var(--color-cream)", borderRadius: 20, opacity: 0.85 }}/>
        <div style={{ position: "absolute", right: "22%", bottom: "8%", width: "18%", height: "26%", background: "var(--color-mint)", borderRadius: 12, opacity: 0.75 }}/>
        <div style={{ position: "absolute", left: "3%", bottom: "18%", width: 160, height: 160, background: "var(--color-apricot)", borderRadius: "50%", opacity: 0.55 }}/>
        <div style={{ position: "absolute", left: "30%", top: "10%", width: 80, height: 80, background: "var(--color-teal)", borderRadius: "50%", opacity: 0.08 }}/>
      </div>

      {/* Top bar */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 56px" }}>
        <span style={{ fontFamily: "var(--font-lora-var), serif", fontWeight: 600, fontSize: 20, letterSpacing: "-0.035em", color: "var(--color-navy)" }}>
          Pare
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-teal)" }}/>
          <span style={{ fontFamily: "var(--font-inter-var), sans-serif", fontSize: 12, color: "var(--color-muted)", letterSpacing: "0.07em" }}>Case Study · 2025</span>
        </div>
      </div>

      {/* Headline */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 56px",
        }}
      >
        <h1
          ref={h1Ref}
          style={{
            fontFamily: "var(--font-lora-var), serif",
            fontWeight: 600,
            fontSize: "clamp(60px, 9vw, 120px)",
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            color: "var(--color-navy)",
            margin: 0,
            maxWidth: "80vw",
          }}
        >
          Make the<br />
          better choice<br />
          <em style={{ fontStyle: "italic", color: "var(--color-teal)" }}>feel easy.</em>
        </h1>
      </div>

      {/* Bottom: sub + meta */}
      <div
        ref={metaRef}
        style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 56px 52px", gap: 32, flexWrap: "wrap" }}
      >
        <p
          ref={subRef}
          style={{ fontFamily: "var(--font-inter-var), sans-serif", fontSize: 18, lineHeight: 1.65, color: "var(--color-subtle)", maxWidth: 400, margin: 0 }}
        >
          Pare is a curated retailer for thoughtful, lower-waste everyday essentials — where sustainable choices are the easy default.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 24 }}>
          <div style={{ display: "flex", gap: 32 }}>
            {[["Role","Product Design"],["Year","2025"],["Scope","App · Brand · Campaign"]].map(([k,v]) => (
              <div key={k}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 4 }}>{k}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-navy)" }}>{v}</p>
              </div>
            ))}
          </div>
          <a
            href="#overview"
            onClick={(e) => { e.preventDefault(); document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none" }}
          >
            Explore the case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
