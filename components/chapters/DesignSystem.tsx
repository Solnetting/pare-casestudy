import SectionReveal from "@/components/ui/SectionReveal";

/* ── Color tokens ── */
const PRIMITIVE_COLOURS = [
  { name: "Canvas",  token: "canvas",  hex: "#FAF8F5", bg: "#FAF8F5",  border: true,  label: "white" },
  { name: "Navy",    token: "navy",    hex: "#1B2B4B", bg: "#1B2B4B",  border: false, label: "white" },
  { name: "Teal",    token: "teal",    hex: "#2A9D8F", bg: "#2A9D8F",  border: false, label: "white" },
  { name: "Cream",   token: "cream",   hex: "#F5EDD8", bg: "#F5EDD8",  border: true,  label: "navy" },
  { name: "Mint",    token: "mint",    hex: "#D4EDE9", bg: "#D4EDE9",  border: false, label: "navy" },
  { name: "Apricot", token: "apricot", hex: "#FAE5D3", bg: "#FAE5D3",  border: false, label: "navy" },
  { name: "Border",  token: "border",  hex: "#E8E2D9", bg: "#E8E2D9",  border: false, label: "navy" },
  { name: "Muted",   token: "muted",   hex: "#8A9BB5", bg: "#8A9BB5",  border: false, label: "white" },
];

const SEMANTIC_TOKENS = [
  { token: "Surface / default", resolves: "Canvas #FAF8F5",  usage: "Page background" },
  { token: "Surface / card",    resolves: "White #FFFFFF",   usage: "Card, modal, popover" },
  { token: "Surface / muted",   resolves: "Cream #F5EDD8",   usage: "Quiet section bg" },
  { token: "Text / primary",    resolves: "Navy #1B2B4B",    usage: "Body and headings" },
  { token: "Text / secondary",  resolves: "Muted #8A9BB5",   usage: "Labels, captions" },
  { token: "Action / default",  resolves: "Teal #2A9D8F",    usage: "CTA buttons, links" },
  { token: "Action / hover",    resolves: "Teal dk #238A7C", usage: "Hover state" },
  { token: "Repeat / surface",  resolves: "Teal lt #E8F5F3", usage: "Repeat cue bg" },
];

/* ── Type specimens ── */
const TYPE_SCALE = [
  { size: 64, weight: "600", family: "Lora",  label: "Display / Hero",      sample: "Make the better choice feel easy." },
  { size: 48, weight: "600", family: "Lora",  label: "Chapter heading",     sample: "The Home Reset" },
  { size: 32, weight: "600", family: "Lora",  label: "Section heading",     sample: "Curated to matter" },
  { size: 28, weight: "600", family: "Lora",  label: "Card heading",        sample: "Refillable Dish Soap" },
  { size: 24, weight: "600", family: "Lora",  label: "Pull quote",          sample: "Pare down to what matters." },
  { size: 20, weight: "500", family: "Inter", label: "Body / large",        sample: "Every product chosen for a reason." },
  { size: 18, weight: "400", family: "Inter", label: "Body / default",      sample: "Everyday essentials, considered." },
  { size: 16, weight: "400", family: "Inter", label: "Body / compact",      sample: "500ml · Concentrated formula" },
  { size: 14, weight: "500", family: "Inter", label: "UI label / action",   sample: "Add to repeat order" },
  { size: 12, weight: "600", family: "Inter", label: "Tag / metadata",      sample: "KITCHEN · CLEANING" },
];

/* ── Spacing ── */
const SPACING = [4, 8, 16, 24, 32, 40, 48, 64, 80, 96];

/* ── Components ── */

function PrimaryButton({ children = "Add to bag" }: { children?: string }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full font-inter font-semibold text-white"
      style={{ background: "#2A9D8F", paddingLeft: 24, paddingRight: 24, height: 44, fontSize: 15 }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children = "Continue shopping" }: { children?: string }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full border font-inter font-medium text-pare-navy"
      style={{ borderColor: "#1B2B4B", paddingLeft: 24, paddingRight: 24, height: 44, fontSize: 15 }}
    >
      {children}
    </button>
  );
}

function TertiaryButton({ children = "See all products" }: { children?: string }) {
  return (
    <button
      className="inline-flex items-center gap-1.5 font-inter font-medium"
      style={{ color: "#2A9D8F", fontSize: 15 }}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7h8M7 4l4 3-4 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function ProductCard() {
  return (
    <div className="rounded-2xl border border-pare-border bg-white p-4" style={{ width: 200 }}>
      <div className="flex h-28 items-center justify-center rounded-xl" style={{ background: "#F5EDD8" }}>
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="white"/>
          <rect x="14" y="14" width="20" height="20" rx="4" fill="#D4EDE9"/>
        </svg>
      </div>
      <div className="mt-3">
        <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 14 }}>Refillable Dish Soap</p>
        <p className="mt-0.5 font-inter text-pare-subtle" style={{ fontSize: 12 }}>500ml · Concentrated</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-inter font-bold" style={{ color: "#2A9D8F", fontSize: 16 }}>£8.09</p>
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5"
            style={{ background: "#E8F5F3", fontSize: 11, fontWeight: 600, color: "#2A9D8F" }}
          >
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M2 7a5 5 0 109.9-1M12 3v3h-3" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Repeat
          </span>
        </div>
      </div>
    </div>
  );
}

function CategoryCard() {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-2xl p-4" style={{ background: "#D4EDE9", width: 140 }}>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        </svg>
      </div>
      <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 14 }}>Kitchen</p>
      <p className="font-inter text-pare-subtle" style={{ fontSize: 12 }}>24 products</p>
    </div>
  );
}

function SearchField() {
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-pare-border bg-white px-4"
      style={{ height: 44, width: 280 }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A9BB5" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <span className="font-inter text-pare-muted" style={{ fontSize: 14 }}>Search products…</span>
    </div>
  );
}

function BottomNav() {
  const items = ["Home", "Products", "Bag", "Profile"];
  return (
    <div
      className="flex items-center justify-around rounded-2xl border border-pare-border bg-white px-2"
      style={{ height: 64, width: 320 }}
    >
      {items.map((item, i) => (
        <div key={item} className="flex flex-col items-center gap-1">
          <div
            className="h-5 w-5 rounded"
            style={{ background: i === 0 ? "#2A9D8F" : "#E8E2D9" }}
          />
          <span
            className="font-inter"
            style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "#2A9D8F" : "#8A9BB5" }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function RepeatCue() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-teal-100 p-5" style={{ background: "#E8F5F3", maxWidth: 320 }}>
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path d="M2 7a5 5 0 109.9-1M12 3v3h-3" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="font-inter font-semibold" style={{ color: "#2A9D8F", fontSize: 14 }}>Pare Repeat</span>
      </div>
      <p className="font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.5 }}>
        Subscribe and save 10% on every delivery. Pause or cancel anytime.
      </p>
      <div className="flex items-center gap-3">
        <span className="font-inter font-bold" style={{ color: "#2A9D8F", fontSize: 18 }}>£8.09</span>
        <span className="font-inter text-pare-subtle" style={{ fontSize: 12 }}>Every 30 days</span>
        <span className="rounded-full px-2 py-0.5" style={{ background: "#2A9D8F", color: "white", fontSize: 11, fontWeight: 600 }}>
          Save 10%
        </span>
      </div>
    </div>
  );
}

function SavingsBadge() {
  return (
    <span
      className="inline-flex items-center rounded-full font-inter font-semibold text-white"
      style={{ background: "#2A9D8F", paddingLeft: 12, paddingRight: 12, height: 28, fontSize: 12 }}
    >
      Save 10%
    </span>
  );
}

function ProofLabels() {
  return (
    <div className="flex flex-wrap gap-2">
      {["Refillable", "Certified B Corp", "Vegan", "Made in UK", "Plastic-free packaging"].map((label) => (
        <span
          key={label}
          className="rounded-full border border-teal-100 font-inter font-medium"
          style={{ color: "#2A9D8F", background: "#E8F5F3", paddingLeft: 12, paddingRight: 12, height: 28, fontSize: 12, display: "inline-flex", alignItems: "center" }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

const COMPONENT_GROUPS = [
  {
    title: "Buttons",
    description: "Three levels of emphasis. Primary drives the primary action. Secondary offers an alternative. Tertiary navigates without weight.",
    content: (
      <div className="flex flex-wrap items-center gap-4">
        <PrimaryButton />
        <SecondaryButton />
        <TertiaryButton />
      </div>
    ),
  },
  {
    title: "Product card",
    description: "Name, price, Repeat cue, then proof. Everything above the fold. Product imagery on white, no shadows.",
    content: <ProductCard />,
  },
  {
    title: "Category card",
    description: "Pastel surface, icon, category label. Tappable without visual competition.",
    content: <CategoryCard />,
  },
  {
    title: "Search field",
    description: "Scoped to the Products tab. Search intent belongs in the browse context, not the global nav.",
    content: <SearchField />,
  },
  {
    title: "Bottom navigation",
    description: "Four tabs. Active state uses teal. No overflow menus — every destination is one tap away.",
    content: <BottomNav />,
  },
  {
    title: "Pare Repeat cue",
    description: "Shown only on qualifying products. Teal surface, clear pricing, explicit frequency and annual saving.",
    content: <RepeatCue />,
  },
  {
    title: "Savings badge + proof labels",
    description: "Savings badge is always teal and numeric. Proof labels are low-key teal rings — informative, not decorative.",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <SavingsBadge />
          <span className="font-inter text-pare-subtle" style={{ fontSize: 13 }}>Always percentage, never vague ("great deal")</span>
        </div>
        <ProofLabels />
      </div>
    ),
  },
];

export default function DesignSystem() {
  return (
    <section id="design-system" className="py-28 px-6" style={{ background: "#EEF6F5" }}>
      <div className="mx-auto max-w-5xl">

        {/* Chapter header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="chapter-label mb-3">03 — Design System</p>
            <h2
              className="font-lora font-semibold text-pare-navy"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 600 }}
            >
              A system that creates trust without overwhelming the shop.
            </h2>
          </div>
        </SectionReveal>

        {/* Colours */}
        <SectionReveal delay={60}>
          <div className="mb-16">
            <p className="chapter-label mb-6">Primitive colour tokens</p>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
              {PRIMITIVE_COLOURS.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div
                    className="h-16 rounded-xl"
                    style={{
                      background: c.bg,
                      border: c.border ? "1px solid #E8E2D9" : "none",
                    }}
                  />
                  <div>
                    <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 11 }}>{c.name}</p>
                    <p className="font-inter text-pare-muted" style={{ fontSize: 10 }}>{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Semantic tokens */}
        <SectionReveal delay={80}>
          <div className="mb-16 rounded-2xl border border-pare-border bg-white overflow-hidden">
            <div className="border-b border-pare-border px-6 py-4">
              <p className="chapter-label">Semantic tokens</p>
            </div>
            <div className="divide-y divide-pare-border">
              {SEMANTIC_TOKENS.map((t) => (
                <div key={t.token} className="grid grid-cols-3 gap-4 px-6 py-3">
                  <p className="font-inter font-medium text-pare-navy" style={{ fontSize: 13 }}>{t.token}</p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 13 }}>{t.resolves}</p>
                  <p className="font-inter text-pare-subtle" style={{ fontSize: 13 }}>{t.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Typography */}
        <SectionReveal delay={60}>
          <div className="mb-16">
            <p className="chapter-label mb-6">Typography system</p>
            <div className="rounded-2xl border border-pare-border bg-white overflow-hidden">
              {TYPE_SCALE.map((t, i) => (
                <div
                  key={t.size}
                  className="border-b border-pare-border px-6 py-4 last:border-0"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-inter text-pare-muted" style={{ fontSize: 11, fontWeight: 600, minWidth: 32 }}>
                      {t.size}
                    </span>
                    <span className="font-inter text-pare-border" style={{ fontSize: 11 }}>/</span>
                    <span className="font-inter text-pare-muted" style={{ fontSize: 11 }}>{t.family} {t.weight}</span>
                    <span className="ml-auto font-inter text-pare-subtle" style={{ fontSize: 11 }}>{t.label}</span>
                  </div>
                  <p
                    style={{
                      fontSize: Math.min(t.size, 40),
                      fontWeight: t.weight,
                      fontFamily: t.family === "Lora" ? "var(--font-lora-var), serif" : "var(--font-inter-var), sans-serif",
                      color: "#1B2B4B",
                      lineHeight: 1.15,
                      letterSpacing: t.size >= 32 ? "-0.02em" : "normal",
                      whiteSpace: t.size > 32 ? "nowrap" : "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {t.sample}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Spacing */}
        <SectionReveal delay={80}>
          <div className="mb-16">
            <p className="chapter-label mb-6">8px spacing rhythm</p>
            <div className="flex items-end gap-3 rounded-2xl border border-pare-border bg-white p-6 overflow-x-auto">
              {SPACING.map((s) => (
                <div key={s} className="flex flex-shrink-0 flex-col items-center gap-2">
                  <div
                    className="rounded"
                    style={{ width: s / 2, height: s / 2, background: "#2A9D8F", minWidth: 4 }}
                  />
                  <span className="font-inter text-pare-muted" style={{ fontSize: 10 }}>{s}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 font-inter text-pare-subtle" style={{ fontSize: 13 }}>
              4px base unit. Primary rhythm at 8px. All spacing, sizes, and radii are multiples of 4.
            </p>
          </div>
        </SectionReveal>

        {/* Components */}
        <div className="flex flex-col gap-6">
          {COMPONENT_GROUPS.map((group, i) => (
            <SectionReveal key={group.title} delay={i * 40}>
              <div className="rounded-2xl border border-pare-border bg-white">
                <div className="border-b border-pare-border px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 16 }}>
                      {group.title}
                    </p>
                    <p className="font-inter text-pare-subtle text-right" style={{ fontSize: 13, lineHeight: 1.5, maxWidth: 320 }}>
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-6">
                  {group.content}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
