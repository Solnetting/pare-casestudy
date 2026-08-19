import SectionReveal from "@/components/ui/SectionReveal";

const T = {
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-muted)" },
  body:  { fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.7, color: "var(--color-subtle)" },
};

const COLOURS = [
  { name: "Canvas",   hex: "#FAF8F5", role: "Page ground",          border: true },
  { name: "Navy",     hex: "#1B2B4B", role: "Text + authority",     border: false },
  { name: "Teal",     hex: "#2A9D8F", role: "Action",               border: false },
  { name: "Cream",    hex: "#F4EBD6", role: "Warm surface",         border: false },
  { name: "Mint",     hex: "#E2F0EE", role: "Cool surface",         border: false },
  { name: "Apricot",  hex: "#FAE5D3", role: "Campaign surface",     border: false },
  { name: "Border",   hex: "#E4DDD4", role: "Dividers",             border: false },
  { name: "Muted",    hex: "#8C9BAD", role: "Secondary text",       border: false },
];

const SEMANTIC = [
  { token: "Surface / page",    resolves: "Canvas",  usage: "All page backgrounds" },
  { token: "Surface / card",    resolves: "White",   usage: "Elevated content" },
  { token: "Surface / warm",    resolves: "Cream",   usage: "Editorial sections" },
  { token: "Text / primary",    resolves: "Navy",    usage: "All body and heading copy" },
  { token: "Text / secondary",  resolves: "Muted",   usage: "Labels, metadata, captions" },
  { token: "Action / default",  resolves: "Teal",    usage: "CTAs, links, Repeat cue" },
  { token: "Action / hover",    resolves: "#1E7A6E", usage: "Hover / pressed state" },
  { token: "Repeat / surface",  resolves: "Mint",    usage: "Repeat mode, Repeat badges" },
];

const TYPE_SCALE = [
  { px: 64, w: "600", family: "Lora",  usage: "Hero / Display", sample: "Make the better choice." },
  { px: 48, w: "600", family: "Lora",  usage: "Chapter H2",     sample: "The Home Reset." },
  { px: 32, w: "600", family: "Lora",  usage: "Section H3",     sample: "Curated to matter." },
  { px: 28, w: "600", family: "Lora",  usage: "Card heading",   sample: "Refillable Dish Soap" },
  { px: 24, w: "600", family: "Lora",  usage: "Pull quote",     sample: "Pare down to what matters." },
  { px: 18, w: "400", family: "Inter", usage: "Body / lead",    sample: "Everyday essentials, considered." },
  { px: 16, w: "400", family: "Inter", usage: "Body / default", sample: "500ml · Concentrated formula" },
  { px: 14, w: "500", family: "Inter", usage: "UI / action",    sample: "Add to repeat order" },
  { px: 12, w: "500", family: "Inter", usage: "UI / label",     sample: "KITCHEN · CLEANING" },
];

const SPACING = [4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128];

/* ── Component demos ── */
function PrimaryBtn() {
  return (
    <button style={{ background: "#2A9D8F", color: "white", border: "none", borderRadius: 6, padding: "12px 24px", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 600, cursor: "default" }}>
      Add to bag
    </button>
  );
}
function SecondaryBtn() {
  return (
    <button style={{ background: "transparent", color: "#1B2B4B", border: "1.5px solid #1B2B4B", borderRadius: 6, padding: "11px 24px", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 500, cursor: "default" }}>
      Continue shopping
    </button>
  );
}
function TertiaryBtn() {
  return (
    <button style={{ background: "transparent", color: "#2A9D8F", border: "none", padding: "0", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, cursor: "default" }}>
      See all products <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
    </button>
  );
}
function ProductCard() {
  return (
    <div style={{ width: 188, border: "1px solid #E4DDD4", borderRadius: 10, overflow: "hidden", background: "white" }}>
      <div style={{ height: 110, background: "#F4EBD6", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: 6, background: "white" }}/>
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "#1B2B4B", marginBottom: 2 }}>Refillable Dish Soap</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, color: "#8C9BAD" }}>500ml · Concentrated</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
          <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 700, fontSize: 16, color: "#2A9D8F" }}>£8.09</p>
          <span style={{ fontSize: 11, color: "#2A9D8F", fontWeight: 600, background: "#E2F0EE", padding: "2px 8px", borderRadius: 4, fontFamily: "var(--font-inter-var)" }}>Repeat</span>
        </div>
      </div>
    </div>
  );
}
function SearchField() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #E4DDD4", borderRadius: 8, padding: "10px 14px", width: 260, background: "white" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C9BAD" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, color: "#8C9BAD" }}>Search products…</span>
    </div>
  );
}
function BottomNavComp() {
  return (
    <div style={{ display: "flex", border: "1.5px solid #E4DDD4", borderRadius: 8, overflow: "hidden", width: 300, background: "white" }}>
      {["Home", "Products", "Bag", "Profile"].map((item, i) => (
        <div key={item} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0", borderLeft: i > 0 ? "1px solid #F0EDE8" : "none" }}>
          <div style={{ width: 16, height: 16, borderRadius: 3, background: i === 0 ? "#2A9D8F" : "#E4DDD4", marginBottom: 4 }}/>
          <span style={{ fontSize: 10, fontFamily: "var(--font-inter-var)", color: i === 0 ? "#2A9D8F" : "#8C9BAD", fontWeight: i === 0 ? 500 : 400 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}
function RepeatCue() {
  return (
    <div style={{ border: "1px solid #C8E4E0", borderRadius: 8, padding: "16px 20px", background: "#E2F0EE", maxWidth: 300 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "#2A9D8F" }}>Pare Repeat</span>
        <span style={{ background: "#2A9D8F", color: "white", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4, fontFamily: "var(--font-inter-var)" }}>Save 10%</span>
      </div>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "#6B7A8A", lineHeight: 1.5 }}>Subscribe and save on every delivery. Pause or cancel anytime.</p>
      <div style={{ marginTop: 10, display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 700, fontSize: 18, color: "#2A9D8F" }}>£8.09</span>
        <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, color: "#8C9BAD" }}>every 30 days</span>
      </div>
    </div>
  );
}
function ProofLabels() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {["Refillable", "Certified B Corp", "Vegan", "Made in UK", "Plastic-free packaging"].map(l => (
        <span key={l} style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "#2A9D8F", background: "#E2F0EE", padding: "5px 12px", borderRadius: 5 }}>{l}</span>
      ))}
    </div>
  );
}

const COMPONENTS = [
  { title: "Buttons",        note: "Three levels of emphasis. Rounded at 6px — not pills.", demo: <div style={{ display: "flex", alignItems: "center", gap: 16 }}><PrimaryBtn/><SecondaryBtn/><TertiaryBtn/></div> },
  { title: "Product card",   note: "Name, price, Repeat cue — in that order. Imagery on white only.", demo: <ProductCard/> },
  { title: "Search field",   note: "Inside Products tab. Search is browsing, not navigation.", demo: <SearchField/> },
  { title: "Bottom nav",     note: "Four permanent tabs. Active state in teal.", demo: <BottomNavComp/> },
  { title: "Pare Repeat cue",note: "Mint surface. Clear recurring price, cadence, and annual saving.", demo: <RepeatCue/> },
  { title: "Proof labels",   note: "Mint background, teal text. Informative, not decorative.", demo: <ProofLabels/> },
];

export default function DesignSystem() {
  return (
    <section id="design-system" style={{ background: "var(--color-mint)", padding: "120px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px" }}>

        <SectionReveal>
          <div className="chapter-rule">
            <span style={T.label}>03</span>
            <span style={T.label}>Design System</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(40px,5vw,56px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--color-navy)", maxWidth: 540 }}>
            Trust, without overwhelming the shop.
          </h2>
        </SectionReveal>

        {/* Colour strip */}
        <SectionReveal delay={60}>
          <div style={{ marginTop: 80 }}>
            <p style={{ ...T.label, marginBottom: 24 }}>Colour tokens</p>
            {/* Visual strip */}
            <div style={{ display: "flex", height: 64, borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
              {COLOURS.map(c => (
                <div key={c.name} style={{ flex: 1, background: c.hex, border: c.border ? "1px solid #E4DDD4" : "none" }}/>
              ))}
            </div>
            {/* Swatch labels */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 0 }}>
              {COLOURS.map((c, i) => (
                <div key={c.name} style={{ borderRight: i < 7 ? "1px solid var(--color-border)" : "none", paddingRight: 12, paddingLeft: i > 0 ? 12 : 0 }}>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 600, color: "var(--color-navy)", marginBottom: 2 }}>{c.name}</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)" }}>{c.hex}</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-subtle)", marginTop: 2 }}>{c.role}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Semantic tokens */}
        <SectionReveal delay={60}>
          <div style={{ marginTop: 64, background: "white", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
              <p style={T.label}>Semantic tokens</p>
            </div>
            {SEMANTIC.map((t, i) => (
              <div key={t.token} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, padding: "14px 24px", borderBottom: i < SEMANTIC.length - 1 ? "1px solid var(--color-border)" : "none", alignItems: "center" }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-navy)" }}>{t.token}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-subtle)" }}>{t.resolves}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-subtle)" }}>{t.usage}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Type ramp */}
        <SectionReveal delay={80}>
          <div style={{ marginTop: 80 }}>
            <p style={{ ...T.label, marginBottom: 32 }}>Typography system — Lora + Inter</p>
            <div style={{ background: "white", borderRadius: 8, overflow: "hidden" }}>
              {TYPE_SCALE.map((t, i) => (
                <div
                  key={t.px}
                  style={{
                    padding: "20px 24px",
                    borderBottom: i < TYPE_SCALE.length - 1 ? "1px solid var(--color-border)" : "none",
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 24,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginBottom: 2 }}>{t.px}px / {t.family}</p>
                    <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-muted)" }}>{t.usage}</p>
                  </div>
                  <p
                    style={{
                      fontSize: Math.min(t.px, 44),
                      fontWeight: t.w,
                      fontFamily: t.family === "Lora" ? "var(--font-lora-var), serif" : "var(--font-inter-var), sans-serif",
                      color: "var(--color-navy)",
                      lineHeight: 1.15,
                      letterSpacing: t.px >= 28 ? "-0.02em" : "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: t.px > 28 ? "nowrap" : "normal",
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
        <SectionReveal delay={60}>
          <div style={{ marginTop: 80 }}>
            <p style={{ ...T.label, marginBottom: 24 }}>8px spacing rhythm</p>
            <div style={{ background: "white", borderRadius: 8, padding: "24px", display: "flex", alignItems: "flex-end", gap: 16, overflowX: "auto" }}>
              {SPACING.map(s => (
                <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <div style={{ width: Math.max(s * 0.4, 4), height: s * 0.4, background: "#2A9D8F", borderRadius: 2 }}/>
                  <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-muted)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Components */}
        <SectionReveal delay={60}>
          <div style={{ marginTop: 80 }}>
            <p style={{ ...T.label, marginBottom: 32 }}>Component library</p>
            {COMPONENTS.map((c, i) => (
              <div
                key={c.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "24px 64px",
                  padding: "32px 0",
                  borderTop: "1px solid var(--color-border)",
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 15, color: "var(--color-navy)", marginBottom: 8 }}>{c.title}</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.55 }}>{c.note}</p>
                </div>
                <div style={{ padding: "24px", background: "white", borderRadius: 8, display: "flex", alignItems: "center" }}>
                  {c.demo}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
