"use client";

import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "overview",       label: "Overview" },
  { id: "product",        label: "Product" },
  { id: "design-system",  label: "Design System" },
  { id: "brand",          label: "Brand" },
  { id: "campaign",       label: "Campaign" },
  { id: "reflection",     label: "Reflection" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Chapter navigation"
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ maxWidth: "calc(100vw - 32px)" }}
    >
      <div className="scroll-row flex items-center gap-0.5 rounded-full border border-pare-border bg-white/92 px-2 py-1.5 backdrop-blur-sm"
           style={{ boxShadow: "0 2px 16px rgba(27,43,75,0.10), 0 1px 4px rgba(27,43,75,0.06)" }}>
        {CHAPTERS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 font-inter text-sm font-medium transition-all duration-200 ${
              active === id
                ? "bg-pare-navy text-white"
                : "text-pare-navy/55 hover:bg-pare-navy/6 hover:text-pare-navy"
            }`}
            style={{ fontSize: 13 }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
