"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    label: "Curated Everyday",
    lines: ["Make sustainable", "choices the easy", "default."],
    body: "A considered edit of verified, lower-impact products from trusted makers.",
    imgPos: "60% center",
  },
  {
    label: "Repeat & Save",
    lines: ["Restock what", "you love,", "automatically."],
    body: "Subscribe to everyday essentials and save 10% on every refill, delivered on your schedule.",
    imgPos: "45% center",
  },
  {
    label: "Lower Impact",
    lines: ["The easier", "choice is the", "better one."],
    body: "Every product verified for environmental and ethical standards — so you don't have to check.",
    imgPos: "70% 30%",
  },
];

const DURATION = 5000;

export default function Hero() {
  const [current, setCurrent]   = useState(0);
  const [slideKeys, setSlideKeys] = useState([0, 0, 0]);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef  = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setSlideKeys(prev => prev.map((k, idx) => idx === i ? k + 1 : k));
  }, []);

  // Auto-advance every 5 s
  useEffect(() => {
    timerRef.current = setTimeout(() => goTo((current + 1) % SLIDES.length), DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, goTo]);

  // Initial mount animations for logo + button only
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ease = "cubic-bezier(0.16,1,0.3,1)";
    ([
      [logoRef, 0,   "translateY(-18px)"],
      [ctaRef,  920, "translateY(18px)"],
    ] as [React.RefObject<HTMLElement | null>, number, string][]).forEach(([ref, delay, t]) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = t;
      setTimeout(() => {
        el.style.transition = `opacity 0.95s ${ease}, transform 0.95s ${ease}`;
        el.style.opacity = "1";
        el.style.transform = "none";
      }, delay);
    });
  }, []);

  return (
    <header style={{ position: "relative", minHeight: "100svh", overflow: "hidden", background: "#F7F3EB" }}>

      {/* ── Background images — crossfade between slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute", inset: 0,
            opacity: current === i ? 1 : 0,
            transition: "opacity 0.9s ease-in-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.png"
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: slide.imgPos }}
          />
        </div>
      ))}

      {/* Cream gradient veil over left side */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(247,243,235,0.4) 0%, rgba(247,243,235,0.38) 32%, rgba(247,243,235,0.22) 52%, transparent 68%)",
      }} />

      {/* ── Content layer ── */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column",
        minHeight: "100svh",
        padding: "52px 0 80px 72px",
        maxWidth: 680,
      }}>

        {/* Logo — stays fixed */}
        <div ref={logoRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Pare" style={{ width: 90, height: "auto" }} />
        </div>

        {/* Text slides — stacked, crossfade */}
        <div style={{ position: "relative", marginTop: "16vh", height: 400 }}>
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              style={{
                position: "absolute", top: 0, left: 0, width: "100%",
                opacity: current === i ? 1 : 0,
                transition: "opacity 0.7s ease-in-out",
                pointerEvents: current === i ? "auto" : "none",
              }}
            >
              {/* key change remounts this div → CSS animations restart */}
              <div key={slideKeys[i]} className="slide-text">
                <p className="slide-label" style={{
                  fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#197f78", marginBottom: 22,
                }}>{slide.label}</p>

                <h1 style={{
                  fontFamily: "var(--font-lora-var)", fontWeight: 700,
                  fontSize: "clamp(38px, 4.5vw, 76px)", lineHeight: 1.06,
                  letterSpacing: "-0.03em", color: "#203552", margin: "0 0 36px",
                }}>
                  <span className="slide-line-1" style={{ display: "block" }}>{slide.lines[0]}</span>
                  <span className="slide-line-2" style={{ display: "block" }}>{slide.lines[1]}</span>
                  <span className="slide-line-3" style={{ display: "block" }}>{slide.lines[2]}</span>
                </h1>

                <p className="slide-body" style={{
                  fontFamily: "var(--font-inter-var)",
                  fontSize: "clamp(15px, 1.25vw, 20px)", lineHeight: 1.65,
                  color: "#53657a", maxWidth: 460,
                }}>{slide.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — stays fixed */}
        <div ref={ctaRef} style={{ marginTop: 48 }}>
          <button
            className="btn-swipe"
            onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}
            style={{ fontFamily: "var(--font-inter-var)" }}
          >
            <span>Explore more</span>
          </button>
        </div>

      </div>

      {/* ── Progress indicators ── */}
      <div style={{
        position: "absolute", bottom: 32, left: 72,
        display: "flex", gap: 8, zIndex: 3,
      }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: 48, height: 2, padding: 0,
              background: "rgba(32,53,82,0.18)",
              border: "none", cursor: "pointer",
              position: "relative", overflow: "hidden",
            }}
          >
            {current === i && (
              <div className="progress-fill" />
            )}
          </button>
        ))}
      </div>

    </header>
  );
}
