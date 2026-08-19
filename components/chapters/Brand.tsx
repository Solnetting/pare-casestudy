import SectionReveal from "@/components/ui/SectionReveal";

const PALETTE = [
  { name: "Canvas",  hex: "#FAF8F5", role: "Ground — every surface starts here",       border: true },
  { name: "Navy",    hex: "#1B2B4B", role: "Voice — authority without coldness",        border: false },
  { name: "Teal",    hex: "#2A9D8F", role: "Action — the one colour that moves things", border: false },
  { name: "Cream",   hex: "#F5EDD8", role: "Warmth — natural, not clinical",            border: false },
  { name: "Mint",    hex: "#D4EDE9", role: "Quiet — breathing room between ideas",      border: false },
  { name: "Apricot", hex: "#FAE5D3", role: "Energy — alive without shouting",           border: false },
];

const TONE_EXAMPLES = [
  {
    context: "Product benefit",
    yes: "Lasts three times as long as most alternatives.",
    no: "This game-changing product is better for the planet!",
  },
  {
    context: "Subscription prompt",
    yes: "Never run out. Pause or cancel whenever.",
    no: "Join the sustainability revolution today!",
  },
  {
    context: "Empty cart",
    yes: "Your bag is empty — not for long.",
    no: "Go green! Start your eco-friendly shopping journey.",
  },
];

const IMAGE_RULES = [
  { rule: "Product on white", detail: "All product imagery is shot on pure white. Shadows are soft and minimal. No lifestyle props." },
  { rule: "Editorial lifestyle", detail: "Campaign surfaces only. Clean domestic settings, natural light, no staged perfection." },
  { rule: "No stock eco", detail: "No leaves, green hands, or earth graphics. No rainbow gradients. No visual clichés." },
  { rule: "Colour from product", detail: "Lifestyle shots draw colour from the products and their context, not added elements." },
];

export default function Brand() {
  return (
    <section id="brand" className="bg-pare-cream py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Chapter header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="chapter-label mb-3">04 — Brand</p>
            <h2
              className="font-lora font-semibold text-pare-navy"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 580 }}
            >
              Pare down to what matters.
            </h2>
          </div>
        </SectionReveal>

        {/* Wordmark */}
        <SectionReveal delay={60}>
          <div className="mb-16 flex flex-col gap-8 rounded-2xl border border-pare-border bg-white p-10 sm:flex-row sm:items-center sm:gap-16">
            {/* Light bg */}
            <div className="flex flex-1 items-center justify-center rounded-xl py-12" style={{ background: "#FAF8F5" }}>
              <span
                className="wordmark text-pare-navy"
                style={{ fontSize: 64, letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                Pare
              </span>
            </div>
            {/* Dark bg */}
            <div className="flex flex-1 items-center justify-center rounded-xl py-12" style={{ background: "#1B2B4B" }}>
              <span
                className="wordmark text-white"
                style={{ fontSize: 64, letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                Pare
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Naming rationale */}
        <SectionReveal delay={80}>
          <div className="mb-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-pare-border bg-white p-8">
              <p className="chapter-label mb-4">Naming rationale</p>
              <p
                className="font-lora font-semibold text-pare-navy"
                style={{ fontSize: 28, lineHeight: 1.3, letterSpacing: "-0.01em", marginBottom: 16 }}
              >
                To pare: reduce something to its essential form.
              </p>
              <p className="font-inter text-pare-subtle" style={{ fontSize: 15, lineHeight: 1.65 }}>
                The name is the product strategy. It signals restraint and intentionality — the opposite of abundance-as-virtue. One syllable. No unnecessary letters. It practises what it preaches.
              </p>
            </div>
            <div className="rounded-2xl border border-pare-border bg-white p-8">
              <p className="chapter-label mb-4">Typography pairing</p>
              <div className="flex flex-col gap-4">
                <div>
                  <p
                    className="font-lora font-semibold text-pare-navy"
                    style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.02em" }}
                  >
                    Lora SemiBold
                  </p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 13, marginTop: 4 }}>
                    Display, headings, pull quotes — the human voice
                  </p>
                </div>
                <div className="h-px bg-pare-border" />
                <div>
                  <p
                    className="font-inter font-medium text-pare-navy"
                    style={{ fontSize: 18 }}
                  >
                    Inter Medium
                  </p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 13, marginTop: 4 }}>
                    UI, metadata, body — the functional voice
                  </p>
                </div>
                <div className="mt-2 rounded-xl p-4" style={{ background: "#FAF8F5" }}>
                  <p className="font-lora font-semibold text-pare-navy" style={{ fontSize: 20, lineHeight: 1.3 }}>
                    Everyday essentials, considered.
                  </p>
                  <p className="font-inter text-pare-subtle mt-2" style={{ fontSize: 14, lineHeight: 1.55 }}>
                    Lora establishes warmth. Inter grounds it in clarity. Together they signal credibility without formality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Palette */}
        <SectionReveal delay={60}>
          <div className="mb-16">
            <p className="chapter-label mb-6">Colour palette</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PALETTE.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-4 rounded-2xl border border-pare-border bg-white p-4"
                >
                  <div
                    className="h-14 w-14 flex-shrink-0 rounded-xl"
                    style={{ background: c.hex, border: c.border ? "1px solid #E8E2D9" : "none" }}
                  />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 15 }}>{c.name}</p>
                      <p className="font-inter text-pare-muted" style={{ fontSize: 12 }}>{c.hex}</p>
                    </div>
                    <p className="font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.45, marginTop: 2 }}>
                      {c.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Tone of voice */}
        <SectionReveal delay={80}>
          <div className="mb-16">
            <p className="chapter-label mb-2">Tone of voice</p>
            <p className="font-inter text-pare-subtle mb-8" style={{ fontSize: 15, lineHeight: 1.55, maxWidth: 520 }}>
              Warm, clear, optimistic, confident — never preachy. Pare trusts the reader to care. It never lectures.
            </p>
            <div className="flex flex-col gap-4">
              {TONE_EXAMPLES.map((ex) => (
                <div
                  key={ex.context}
                  className="grid gap-4 rounded-2xl border border-pare-border bg-white p-6 sm:grid-cols-2"
                >
                  <div>
                    <p
                      className="mb-2 font-inter"
                      style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A9BB5", marginBottom: 8 }}
                    >
                      {ex.context}
                    </p>
                    <div className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0" fill="none">
                        <circle cx="8" cy="8" r="7" fill="#2A9D8F"/>
                        <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
                      </svg>
                      <p className="font-inter text-pare-navy" style={{ fontSize: 14, lineHeight: 1.55 }}>
                        &ldquo;{ex.yes}&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:border-l sm:border-pare-border sm:pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#E8E2D9"/>
                      <path d="M5.5 10.5l5-5M10.5 10.5l-5-5" stroke="#8A9BB5" strokeWidth="1.25" strokeLinecap="round"/>
                    </svg>
                    <p className="font-inter text-pare-muted" style={{ fontSize: 14, lineHeight: 1.55 }}>
                      &ldquo;{ex.no}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Image direction */}
        <SectionReveal delay={60}>
          <div>
            <p className="chapter-label mb-6">Image direction</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {IMAGE_RULES.map((r) => (
                <div
                  key={r.rule}
                  className="rounded-2xl border border-pare-border bg-white p-6"
                >
                  <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 14, marginBottom: 8 }}>
                    {r.rule}
                  </p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.6 }}>
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
