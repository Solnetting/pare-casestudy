"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    label: "The Curated Selection",
    lines: ["Less searching.", "Better choosing.", null],
    body: "One considered selection, with clearer proof behind every choice.",
    cta: "Explore more",
    img: "/hero-slide-1.png",
    imgPos: "60% center",
  },
  {
    label: "Products With Proof",
    lines: ["Know what", "makes it", "better."],
    body: "Materials, origins, and claims made clear before you choose.",
    cta: "See the proof",
    img: "/hero-slide-2.png",
    imgPos: "55% center",
  },
  {
    label: "The Repeat Edit",
    lines: ["The essentials", "you come back", "to."],
    body: "Refillable formats and flexible repeat delivery, when you need it.",
    cta: "Build your repeat",
    img: "/hero-slide-3.png",
    imgPos: "60% center",
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
            src={slide.img}
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
        <div style={{ position: "relative", marginTop: "16vh", height: 460 }}>
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
                  fontFamily: "var(--font-inter-var)", fontSize: 19, fontWeight: 700,
                  letterSpacing: "0.11em", textTransform: "uppercase", color: "#197f78", marginBottom: 20,
                }}>{slide.label}</p>

                <h1 className="slide-headline" style={{
                  fontFamily: "var(--font-lora-var)", fontWeight: 700,
                  fontSize: "clamp(36px, 4.17vw, 64px)", lineHeight: 1.14,
                  letterSpacing: "-0.02em", color: "#203552", margin: "0 0 38px",
                }}>
                  {slide.lines[0]}<br/>
                  {slide.lines[1]}{slide.lines[2] && <><br/>{slide.lines[2]}</>}
                </h1>

                <p className="slide-body" style={{
                  fontFamily: "var(--font-inter-var)",
                  fontSize: "clamp(16px, 1.56vw, 24px)", lineHeight: 1.55,
                  color: "#53657a", maxWidth: 500,
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
            <span>Explore Pare</span>
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
