"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      if (!visualRef.current) return;
      visualRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pare-canvas px-6"
      style={{ paddingTop: 96, paddingBottom: 80 }}
    >
      {/* Background texture dot */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 30%, #FAE5D3 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-24">
        {/* Left: content */}
        <div className="flex flex-col items-start gap-8 lg:w-1/2">
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <div
              className="wordmark text-pare-navy"
              style={{ fontSize: 28, letterSpacing: "-0.04em" }}
            >
              Pare
            </div>
            <div
              className="rounded-full border border-pare-border px-2.5 py-0.5 font-inter text-pare-subtle"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em" }}
            >
              Case Study
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-lora font-semibold text-pare-navy"
            style={{ fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: 560 }}
          >
            Make the better choice{" "}
            <em className="not-italic text-pare-teal">feel easy.</em>
          </h1>

          {/* Sub */}
          <p
            className="font-inter text-pare-subtle"
            style={{ fontSize: 18, lineHeight: 1.65, maxWidth: 440 }}
          >
            Pare is a curated retailer for thoughtful, lower-waste everyday
            essentials — where sustainable choices are the easy default, not
            the effortful exception.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6">
            {[
              ["Role", "Product Design Lead"],
              ["Scope", "App · Brand · Campaign"],
              ["Year", "2025"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span
                  className="font-inter text-pare-muted"
                  style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {k}
                </span>
                <span
                  className="font-inter text-pare-navy"
                  style={{ fontSize: 14, fontWeight: 500 }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 font-inter text-pare-teal transition-all hover:text-pare-teal-dk"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            Explore the case study
            <svg
              className="transition-transform duration-300 group-hover:translate-y-1"
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right: abstract campaign visual */}
        <div
          ref={visualRef}
          className="pointer-events-none relative lg:w-1/2 will-change-transform"
          style={{ height: 440 }}
          aria-hidden
        >
          <svg
            viewBox="0 0 440 440"
            fill="none"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background apricot ellipse */}
            <ellipse cx="280" cy="200" rx="200" ry="180" fill="#FAE5D3" opacity="0.7"/>

            {/* Mint accent strip */}
            <rect x="40" y="310" width="220" height="6" rx="3" fill="#D4EDE9"/>

            {/* Main cream surface (angled tray) */}
            <rect
              x="90" y="140" width="250" height="170" rx="16"
              fill="#F5EDD8"
              transform="rotate(-4 90 140)"
            />

            {/* Product box 1 – tall */}
            <rect x="118" y="158" width="80" height="110" rx="10" fill="white"/>
            <rect x="130" y="230" width="56" height="3" rx="1.5" fill="#D4EDE9"/>
            <rect x="130" y="238" width="40" height="3" rx="1.5" fill="#FAE5D3"/>

            {/* Product box 2 – wide */}
            <rect x="214" y="172" width="100" height="80" rx="10" fill="white"/>
            <rect x="226" y="230" width="60" height="3" rx="1.5" fill="#D4EDE9"/>

            {/* Product box 3 – small square */}
            <rect x="214" y="264" width="48" height="48" rx="8" fill="white"/>

            {/* Teal accent line */}
            <rect x="118" y="282" width="82" height="2.5" rx="1.25" fill="#2A9D8F"/>

            {/* Small teal circle */}
            <circle cx="68" cy="360" r="10" fill="#2A9D8F" opacity="0.6"/>

            {/* Cream pill tag */}
            <rect x="270" y="340" width="110" height="30" rx="15" fill="#F5EDD8"/>
            <rect x="285" y="352" width="50" height="6" rx="3" fill="#8A9BB5" opacity="0.5"/>

            {/* Mint small badge */}
            <rect x="130" y="340" width="64" height="24" rx="12" fill="#D4EDE9"/>
            <rect x="144" y="350" width="36" height="5" rx="2.5" fill="#2A9D8F" opacity="0.6"/>

            {/* Floating navy dot */}
            <circle cx="380" cy="120" r="6" fill="#1B2B4B" opacity="0.15"/>
            <circle cx="360" cy="380" r="4" fill="#1B2B4B" opacity="0.1"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
