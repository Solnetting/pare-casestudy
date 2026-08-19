import SectionReveal from "@/components/ui/SectionReveal";

/* ── QR Code SVG (decorative, non-functional) ── */
function QrCode({ size = 120 }: { size?: number }) {
  const cell = size / 21;
  const pattern = [
    [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0],
    [0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1],
    [1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0],
    [0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1],
    [1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0],
    [1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1],
  ];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <rect width={size} height={size} fill="white"/>
      {pattern.map((row, y) =>
        row.map((bit, x) =>
          bit ? (
            <rect
              key={`${y}-${x}`}
              x={x * cell}
              y={y * cell}
              width={cell}
              height={cell}
              fill="#1B2B4B"
            />
          ) : null
        )
      )}
    </svg>
  );
}

/* ── Campaign Hero Visual ── */
function CampaignHero() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl"
      style={{ background: "#F5EDD8", minHeight: 400 }}
    >
      {/* Background shape */}
      <div
        className="absolute"
        style={{ right: -40, top: -40, width: 480, height: 480, borderRadius: "50%", background: "#FAE5D3", opacity: 0.7 }}
      />
      {/* Mint bar */}
      <div
        className="absolute"
        style={{ left: 0, bottom: 60, width: 260, height: 8, borderRadius: 4, background: "#D4EDE9" }}
      />

      <div className="relative z-10 flex flex-col items-start justify-center px-10 py-16 sm:px-16 sm:py-20" style={{ minHeight: 400 }}>
        {/* Label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pare-border bg-white px-4 py-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="4" fill="#2A9D8F"/>
          </svg>
          <span className="font-inter font-semibold text-pare-navy" style={{ fontSize: 11, letterSpacing: "0.08em" }}>
            CAMPAIGN · SPRING 2025
          </span>
        </div>

        <h2
          className="font-lora font-semibold text-pare-navy"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em", maxWidth: 520 }}
        >
          The<br/>Home Reset.
        </h2>

        <p className="mt-6 font-inter text-pare-subtle" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 400 }}>
          Every spring, people clear out what doesn&apos;t belong. Pare helps them replace what stays with better versions of itself.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <div className="rounded-full px-5 py-2.5 font-inter font-semibold text-white" style={{ background: "#2A9D8F", fontSize: 14 }}>
            Shop the edit
          </div>
          <div className="flex items-center gap-2">
            <QrCode size={48} />
            <span className="font-inter text-pare-subtle" style={{ fontSize: 12 }}>Scan to explore</span>
          </div>
        </div>

        {/* Savings language */}
        <div className="mt-8 flex gap-4 flex-wrap">
          {["Save 10% with Repeat", "Free delivery over £40", "B Corp certified brands"].map((s) => (
            <div key={s} className="flex items-center gap-1.5 font-inter text-pare-subtle" style={{ fontSize: 13 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5.5" stroke="#2A9D8F"/>
                <path d="M4 6l1.5 1.5L8.5 4" stroke="#2A9D8F" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Abstract product cluster (right side on large screens) */}
      <div className="absolute right-0 top-0 bottom-0 hidden sm:flex items-center pr-12">
        <svg width="280" height="320" viewBox="0 0 280 320" fill="none">
          <rect x="40" y="40" width="100" height="140" rx="16" fill="white"/>
          <rect x="56" y="56" width="68" height="68" rx="10" fill="#F5EDD8"/>
          <rect x="64" y="136" width="52" height="6" rx="3" fill="#D4EDE9"/>
          <rect x="64" y="148" width="36" height="6" rx="3" fill="#FAE5D3"/>
          <rect x="155" y="60" width="90" height="110" rx="16" fill="white"/>
          <rect x="169" y="74" width="62" height="62" rx="10" fill="#D4EDE9"/>
          <rect x="169" y="148" width="46" height="6" rx="3" fill="#F5EDD8"/>
          <rect x="80" y="196" width="130" height="80" rx="16" fill="white"/>
          <rect x="96" y="210" width="50" height="50" rx="10" fill="#FAE5D3"/>
          <rect x="158" y="214" width="36" height="6" rx="3" fill="#D4EDE9"/>
          <rect x="158" y="226" width="26" height="6" rx="3" fill="#F5EDD8"/>
          <rect x="158" y="238" width="40" height="20" rx="10" fill="#2A9D8F" opacity="0.15"/>
          <rect x="40" y="188" width="28" height="28" rx="8" fill="#E8F5F3" opacity="0.8"/>
          <rect x="255" y="40" width="16" height="16" rx="8" fill="#FAE5D3"/>
          <rect x="40" y="290" width="160" height="4" rx="2" fill="#D4EDE9"/>
        </svg>
      </div>
    </div>
  );
}

/* ── Trade-show Totem ── */
function Totem() {
  return (
    <div
      className="asset-shadow relative mx-auto flex flex-col overflow-hidden rounded-2xl"
      style={{ width: 180, height: 480, background: "#1B2B4B" }}
    >
      {/* Top brand bar */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <span className="wordmark text-white" style={{ fontSize: 22, letterSpacing: "-0.04em" }}>Pare</span>
        <div className="h-1.5 w-1.5 rounded-full bg-pare-teal" />
      </div>

      {/* Cream section with headline */}
      <div className="mx-3 rounded-xl px-4 py-6 flex-1" style={{ background: "#F5EDD8" }}>
        <p
          className="font-lora font-semibold text-pare-navy"
          style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          The<br/>Home<br/>Reset.
        </p>
        <p className="mt-3 font-inter text-pare-subtle" style={{ fontSize: 10, lineHeight: 1.55 }}>
          Lower-waste everyday essentials. Curated, considered, restocked on your terms.
        </p>

        {/* Product illustration */}
        <div className="mt-4 flex flex-col gap-1.5">
          {["#FAE5D3", "#D4EDE9", "#F5EDD8"].map((bg, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg p-2"
              style={{ background: "white" }}
            >
              <div className="h-8 w-8 rounded-md flex-shrink-0" style={{ background: bg }} />
              <div className="flex flex-col gap-0.5">
                <div className="h-1.5 w-16 rounded" style={{ background: "#E8E2D9" }} />
                <div className="h-1.5 w-10 rounded" style={{ background: "#E8F5F3" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Savings language */}
        <div className="mt-4 flex flex-col gap-1">
          {["Save 10% with Repeat", "Free delivery on £40+"].map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "#2A9D8F" }} />
              <span className="font-inter text-pare-subtle" style={{ fontSize: 9 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QR section */}
      <div className="mx-3 mb-4 mt-3 flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="rounded-lg overflow-hidden flex-shrink-0" style={{ background: "white", padding: 4 }}>
          <QrCode size={56} />
        </div>
        <div>
          <p className="font-inter font-semibold text-white" style={{ fontSize: 10 }}>Scan to shop</p>
          <p className="font-inter text-white opacity-50" style={{ fontSize: 9 }}>pare.com/reset</p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="pb-4 flex items-center justify-center gap-1">
        <div className="h-0.5 w-8 rounded" style={{ background: "#2A9D8F" }} />
        <span className="font-inter text-white opacity-40" style={{ fontSize: 8 }}>pare.com</span>
        <div className="h-0.5 w-8 rounded" style={{ background: "#2A9D8F" }} />
      </div>
    </div>
  );
}

/* ── Meta Story (9:16) ── */
function MetaStory() {
  return (
    <div
      className="asset-shadow relative overflow-hidden rounded-2xl"
      style={{ width: 160, height: 285, background: "#FAE5D3" }}
    >
      {/* Story nav dots */}
      <div className="absolute top-2 left-2 right-2 flex gap-0.5">
        {[1, 0.4, 0.2].map((o, i) => (
          <div key={i} className="h-0.5 flex-1 rounded-full" style={{ background: `rgba(27,43,75,${o})` }} />
        ))}
      </div>

      {/* Mint blob */}
      <div
        className="absolute"
        style={{ right: -30, bottom: 80, width: 120, height: 120, borderRadius: "50%", background: "#D4EDE9", opacity: 0.8 }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-4 pt-6">
        {/* Brand */}
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-full" style={{ background: "#1B2B4B" }}>
            <span className="flex h-full items-center justify-center font-lora text-white" style={{ fontSize: 9, fontWeight: 700 }}>P</span>
          </div>
          <span className="font-inter font-semibold text-pare-navy" style={{ fontSize: 10 }}>pare</span>
        </div>

        {/* Content */}
        <div>
          <p className="font-lora font-semibold text-pare-navy" style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            The Home<br/>Reset.
          </p>
          <p className="mt-2 font-inter text-pare-subtle" style={{ fontSize: 10, lineHeight: 1.5 }}>
            Swap to lower-waste essentials this spring. Curated, considered, and delivered on repeat.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full px-3 py-1 font-inter font-semibold text-white" style={{ background: "#2A9D8F", fontSize: 10 }}>
              Shop the edit
            </span>
            <span className="font-inter text-pare-subtle" style={{ fontSize: 10 }}>Save 10%</span>
          </div>
        </div>

        {/* CTA strip */}
        <div className="flex items-center justify-center gap-1 rounded-xl py-2" style={{ background: "rgba(27,43,75,0.06)" }}>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M7 2l5 5-5 5M2 7h10" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-inter font-semibold text-pare-navy" style={{ fontSize: 10 }}>Swipe up to shop</span>
        </div>
      </div>
    </div>
  );
}

/* ── LinkedIn Ad ── */
function LinkedInAd() {
  return (
    <div
      className="asset-shadow overflow-hidden rounded-2xl bg-white"
      style={{ width: "100%", maxWidth: 420 }}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{ height: 200, background: "#F5EDD8" }}
      >
        <div
          className="absolute"
          style={{ right: -20, top: -20, width: 200, height: 200, borderRadius: "50%", background: "#FAE5D3", opacity: 0.8 }}
        />
        <div
          className="absolute"
          style={{ left: 20, bottom: 20, width: 100, height: 4, borderRadius: 2, background: "#D4EDE9" }}
        />
        <div className="relative z-10 flex h-full items-center px-8">
          <div>
            <p className="font-lora font-semibold text-pare-navy" style={{ fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              The Home Reset.
            </p>
            <p className="mt-2 font-inter text-pare-subtle" style={{ fontSize: 13 }}>Shop the spring edit at Pare</p>
          </div>
        </div>
        <div className="absolute right-6 top-6">
          <span className="wordmark text-pare-navy opacity-30" style={{ fontSize: 28, letterSpacing: "-0.04em" }}>Pare</span>
        </div>
      </div>
      {/* Copy area */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-pare-border">
        <div>
          <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 13 }}>pare.com/reset</p>
          <p className="font-inter text-pare-subtle" style={{ fontSize: 11 }}>Lower-waste essentials, considered</p>
        </div>
        <div className="rounded-full border border-pare-border px-3 py-1.5 font-inter font-medium text-pare-navy" style={{ fontSize: 12 }}>
          Shop now
        </div>
      </div>
    </div>
  );
}

/* ── White-paper Cover ── */
function CatalogueCover() {
  return (
    <div
      className="asset-shadow relative overflow-hidden rounded-2xl"
      style={{ width: 200, height: 280, background: "#FAF8F5" }}
    >
      {/* Side mint strip */}
      <div className="absolute left-0 top-0 bottom-0 w-3" style={{ background: "#D4EDE9" }} />

      <div className="flex h-full flex-col justify-between pl-7 pr-5 py-6">
        <div>
          <span className="wordmark text-pare-navy" style={{ fontSize: 18, letterSpacing: "-0.04em" }}>Pare</span>
          <div className="mt-1 h-px w-8" style={{ background: "#2A9D8F" }} />
        </div>

        <div>
          <p
            className="font-lora font-semibold text-pare-navy"
            style={{ fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.01em" }}
          >
            The Home<br/>Reset
          </p>
          <p className="mt-2 font-inter text-pare-subtle" style={{ fontSize: 10, lineHeight: 1.5 }}>
            A guide to lower-waste everyday essentials — and why better choices shouldn&apos;t be hard.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-px w-full" style={{ background: "#E8E2D9" }} />
          <div className="flex items-center justify-between">
            <p className="font-inter text-pare-muted" style={{ fontSize: 9 }}>Spring 2025</p>
            <p className="font-inter text-pare-muted" style={{ fontSize: 9 }}>pare.com</p>
          </div>
        </div>
      </div>

      {/* Decorative apricot element */}
      <div
        className="absolute"
        style={{ right: -16, top: 60, width: 80, height: 80, borderRadius: "50%", background: "#FAE5D3", opacity: 0.6 }}
      />
    </div>
  );
}

/* ── System notes ── */
const SYSTEM_NOTES = [
  { label: "One headline",     body: "\"The Home Reset.\" appears on every asset, unchanged." },
  { label: "Three surfaces",   body: "Cream, apricot, and mint. Never all three at once." },
  { label: "Same imagery rule", body: "Product on white. Editorial photography for hero only." },
  { label: "Savings language", body: "Always numeric. \"Save 10%\" — never \"great value\"." },
  { label: "Proof signals",    body: "Repeat savings, B Corp references, explicit certification." },
  { label: "Type hierarchy",   body: "Lora for the headline. Inter for everything else." },
];

export default function Campaign() {
  return (
    <section id="campaign" className="bg-pare-canvas py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Chapter header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="chapter-label mb-3">05 — Campaign</p>
            <h2
              className="font-lora font-semibold text-pare-navy"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 600 }}
            >
              The Home Reset — one campaign, every surface.
            </h2>
            <p className="mt-4 font-inter text-pare-subtle" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 540 }}>
              A spring campaign built around a single idea: people want to reset their homes, not their values. Pare makes it possible to do both at once.
            </p>
          </div>
        </SectionReveal>

        {/* Hero visual */}
        <SectionReveal delay={60}>
          <div className="mb-16">
            <CampaignHero />
          </div>
        </SectionReveal>

        {/* Assets grid */}
        <SectionReveal delay={80}>
          <p className="chapter-label mb-8">Campaign assets</p>
          <div className="mb-16 flex flex-wrap gap-10 items-start">
            {/* Totem */}
            <div className="flex flex-col items-center gap-3">
              <Totem />
              <div className="text-center">
                <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 13 }}>Trade-show totem</p>
                <p className="font-inter text-pare-subtle" style={{ fontSize: 11, marginTop: 2 }}>Physical display · 400 × 1800mm</p>
                <p className="font-inter text-pare-subtle" style={{ fontSize: 11 }}>QR is the only digital entry point</p>
              </div>
            </div>

            {/* Meta Story */}
            <div className="flex flex-col items-center gap-3">
              <MetaStory />
              <div className="text-center">
                <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 13 }}>Meta Story</p>
                <p className="font-inter text-pare-subtle" style={{ fontSize: 11, marginTop: 2 }}>1080 × 1920px · 5s auto-advance</p>
              </div>
            </div>

            {/* Catalogue + LinkedIn stacked */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-3">
                <CatalogueCover />
                <div className="text-center">
                  <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 13 }}>White-paper cover</p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 11, marginTop: 2 }}>A4 · PDF + print</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <LinkedInAd />
                <div className="text-center">
                  <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 13 }}>LinkedIn ad</p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 11, marginTop: 2 }}>1200 × 627px · Single image</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* QR standalone + system notes */}
        <SectionReveal delay={60}>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* QR feature */}
            <div className="rounded-2xl border border-pare-border bg-white p-8">
              <p className="chapter-label mb-4">Campaign QR code</p>
              <div className="flex items-start gap-6">
                <div className="rounded-2xl overflow-hidden p-3 flex-shrink-0" style={{ background: "#FAF8F5" }}>
                  <QrCode size={96} />
                </div>
                <div>
                  <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 14 }}>pare.com/reset</p>
                  <p className="mt-2 font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.6 }}>
                    The QR is the only digital CTA on physical assets. No app-store button, no URL typed in. Scan and land on the campaign page.
                  </p>
                </div>
              </div>
            </div>

            {/* System notes */}
            <div className="rounded-2xl border border-pare-border bg-white p-8">
              <p className="chapter-label mb-4">System coherence</p>
              <div className="flex flex-col gap-3">
                {SYSTEM_NOTES.map((n) => (
                  <div key={n.label} className="flex gap-3">
                    <div
                      className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: "#2A9D8F" }}
                    />
                    <div>
                      <span className="font-inter font-semibold text-pare-navy" style={{ fontSize: 13 }}>
                        {n.label}
                        {" "}
                      </span>
                      <span className="font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.5 }}>
                        {n.body}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
