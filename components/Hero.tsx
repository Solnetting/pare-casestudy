"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const logoRef  = useRef<HTMLDivElement>(null);
  const bgRef    = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const bodyRef  = useRef<HTMLParagraphElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ease = "cubic-bezier(0.16,1,0.3,1)";

    // [ref, delayMs, initial transform]
    const items: [React.RefObject<HTMLElement | null>, number, string][] = [
      [bgRef    as React.RefObject<HTMLElement>,  80,  "translateX(32px)"],
      [logoRef  as React.RefObject<HTMLElement>,  0,   "translateY(-18px)"],
      [labelRef as React.RefObject<HTMLElement>,  260, "translateY(24px)"],
      [line1Ref as React.RefObject<HTMLElement>,  380, "translateY(40px)"],
      [line2Ref as React.RefObject<HTMLElement>,  470, "translateY(40px)"],
      [line3Ref as React.RefObject<HTMLElement>,  560, "translateY(40px)"],
      [bodyRef  as React.RefObject<HTMLElement>,  700, "translateY(24px)"],
      [ctaRef   as React.RefObject<HTMLElement>,  840, "translateY(18px)"],
    ];

    items.forEach(([ref, delay, transform]) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = transform;
      setTimeout(() => {
        el.style.transition = `opacity 0.95s ${ease}, transform 0.95s ${ease}`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0) translateX(0)";
      }, delay);
    });
  }, []);

  return (
    <header style={{ position: "relative", minHeight: "100svh", overflow: "hidden", background: "#F7F3EB" }}>

      {/* Full-bleed background image + cream gradient veil */}
      <div ref={bgRef} style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.png"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% center" }}
        />
        {/* Cream gradient that veils the left side, matching the Figma overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(247,243,235,0.4) 0%, rgba(247,243,235,0.38) 32%, rgba(247,243,235,0.22) 52%, transparent 68%)",
        }}/>
      </div>

      {/* Content — positioned over the cream left zone */}
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100svh",
        padding: "52px 0 72px 72px",
        maxWidth: 680,
      }}>

        {/* Logo */}
        <div ref={logoRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Pare" style={{ width: 90, height: "auto" }}/>
        </div>

        {/* Text block — vertically centred */}
        <div style={{ marginTop: "22vh" }}>

          <p ref={labelRef} style={{
            fontFamily: "var(--font-inter-var)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#197f78",
            marginBottom: 22,
          }}>Curated Everyday</p>

          <h1 style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 700,
            fontSize: "clamp(38px, 4.5vw, 76px)",
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "#203552",
            margin: "0 0 36px",
          }}>
            <span ref={line1Ref} style={{ display: "block" }}>Make sustainable</span>
            <span ref={line2Ref} style={{ display: "block" }}>choices the easy</span>
            <span ref={line3Ref} style={{ display: "block" }}>default.</span>
          </h1>

          <p ref={bodyRef} style={{
            fontFamily: "var(--font-inter-var)",
            fontSize: "clamp(15px, 1.25vw, 20px)",
            lineHeight: 1.65,
            color: "#53657a",
            maxWidth: 400,
            marginBottom: 48,
          }}>
            A considered edit of verified, lower-impact<br/>
            products from trusted makers.
          </p>

          <div ref={ctaRef}>
            <button
              onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#1a7a70",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "0 24px",
                height: 44,
                fontFamily: "var(--font-inter-var)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Explore more
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}
