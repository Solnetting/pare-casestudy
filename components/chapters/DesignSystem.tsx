import SectionReveal from "@/components/ui/SectionReveal";

const L = (color = "var(--color-muted)") => ({
  fontFamily: "var(--font-inter-var)" as const,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color,
});

const COLOURS = [
  { name: "Canvas",  hex: "#FAF8F5", role: "Page ground",      dark: false, border: true },
  { name: "Navy",    hex: "#1B2B4B", role: "Text + authority", dark: true },
  { name: "Teal",    hex: "#2A9D8F", role: "Action",           dark: true },
  { name: "Cream",   hex: "#F4EBD6", role: "Warm surface",     dark: false },
  { name: "Mint",    hex: "#E2F0EE", role: "Cool surface",     dark: false },
  { name: "Apricot", hex: "#FAE5D3", role: "Campaign surface", dark: false },
  { name: "Border",  hex: "#E4DDD4", role: "Dividers",         dark: false },
  { name: "Muted",   hex: "#8C9BAD", role: "Secondary text",   dark: false },
];

const TYPE_SCALE = [
  { px: 64, w: "600", family: "Lora",  usage: "Hero / Display",  sample: "Make the better choice." },
  { px: 48, w: "600", family: "Lora",  usage: "Chapter H2",      sample: "The Home Reset." },
  { px: 32, w: "600", family: "Lora",  usage: "Section H3",      sample: "Curated to matter." },
  { px: 24, w: "600", family: "Lora",  usage: "Pull quote",      sample: "Pare down to what matters." },
  { px: 18, w: "400", family: "Inter", usage: "Body / lead",     sample: "Everyday essentials, considered." },
  { px: 15, w: "400", family: "Inter", usage: "Body / default",  sample: "500ml · Concentrated formula" },
  { px: 13, w: "500", family: "Inter", usage: "UI / action",     sample: "Add to repeat order" },
  { px: 11, w: "500", family: "Inter", usage: "UI / label",      sample: "KITCHEN · CLEANING" },
];

const SPACING = [4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128];

function PrimaryBtn()   { return <button style={{ background: "#2A9D8F", color: "white", border: "none", borderRadius: 6, padding: "12px 24px", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 600, cursor: "default" }}>Add to bag</button>; }
function SecondaryBtn() { return <button style={{ background: "transparent", color: "#1B2B4B", border: "1.5px solid #1B2B4B", borderRadius: 6, padding: "11px 24px", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 500, cursor: "default" }}>Continue shopping</button>; }
function TertiaryBtn()  { return <button style={{ background: "transparent", color: "#2A9D8F", border: "none", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, cursor: "default" }}>See all <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg></button>; }

function RepeatCue() {
  return (
    <div style={{ border: "1px solid #C8E4E0", borderRadius: 8, padding: "16px 20px", background: "#E2F0EE", maxWidth: 280 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "#2A9D8F" }}>Pare Repeat</span>
        <span style={{ background: "#2A9D8F", color: "white", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4 }}>Save 10%</span>
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

function ProductCard() {
  return (
    <div style={{ width: 180, border: "1px solid #E4DDD4", borderRadius: 8, overflow: "hidden", background: "white" }}>
      <div style={{ height: 100, background: "#F4EBD6", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 44, height: 44, borderRadius: 5, background: "white" }}/>
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 13, color: "#1B2B4B", marginBottom: 2 }}>Refillable Dish Soap</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "#8C9BAD", marginBottom: 10 }}>500ml · Concentrated</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 700, fontSize: 15, color: "#2A9D8F" }}>£8.09</p>
          <span style={{ fontSize: 11, color: "#2A9D8F", fontWeight: 600, background: "#E2F0EE", padding: "2px 8px", borderRadius: 4 }}>Repeat</span>
        </div>
      </div>
    </div>
  );
}

const COMPONENTS = [
  { title: "Buttons",         note: "Three levels. 6px radius — not pills.",            demo: <div style={{ display: "flex", alignItems: "center", gap: 16 }}><PrimaryBtn/><SecondaryBtn/><TertiaryBtn/></div> },
  { title: "Product card",    note: "Name, price, Repeat badge — in that order.",       demo: <ProductCard/> },
  { title: "Pare Repeat cue", note: "Mint surface. Price, cadence, annual saving.",     demo: <RepeatCue/> },
  { title: "Proof labels",    note: "Mint background, teal text. Informative, not deco.",demo: <ProofLabels/> },
];

export default function DesignSystem() {
  return (
    <section id="design-system" style={{ background: "var(--color-mint)" }}>

      {/* ── Chapter header ── */}
      <div style={{ borderTop: "1px solid rgba(27,43,75,0.12)", padding: "48px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 20, paddingBottom: 48, borderBottom: "1px solid rgba(27,43,75,0.12)" }}>
            <span style={L("var(--color-teal)")}>03</span>
            <div style={{ flex: 1, height: 1, background: "rgba(27,43,75,0.12)" }}/>
            <span style={L()}>Design System</span>
          </div>
        </SectionReveal>
      </div>

      {/* ── Headline ── */}
      <div style={{ padding: "72px 80px 0" }}>
        <SectionReveal>
          <h2 style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(52px, 7vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--color-navy)",
            maxWidth: "80%",
          }}>
            Trust, without<br/>overwhelming the shop.
          </h2>
        </SectionReveal>
      </div>

      {/* ── Colour strip — full bleed ── */}
      <SectionReveal style={{ marginTop: 80 }}>
        <div style={{ display: "flex", height: 80 }}>
          {COLOURS.map(c => (
            <div key={c.name} style={{ flex: 1, background: c.hex, borderRight: c.border ? "1px solid rgba(27,43,75,0.08)" : "none" }}/>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", borderBottom: "1px solid rgba(27,43,75,0.12)" }}>
          {COLOURS.map((c, i) => (
            <div key={c.name} style={{ padding: "20px 20px", borderRight: i < 7 ? "1px solid rgba(27,43,75,0.1)" : "none" }}>
              <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 12, color: "var(--color-navy)", marginBottom: 2 }}>{c.name}</p>
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-muted)", marginBottom: 2 }}>{c.hex}</p>
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-subtle)", lineHeight: 1.5 }}>{c.role}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* ── Type specimen ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 48 }}>Typography system — Lora + Inter</p>
        </SectionReveal>
        <SectionReveal>
          <div style={{ borderTop: "1px solid rgba(27,43,75,0.12)", background: "rgba(255,255,255,0.5)" }}>
            {TYPE_SCALE.map((t, i) => (
              <div key={t.px} style={{ display: "grid", gridTemplateColumns: "160px 1fr", padding: "20px 0 20px 24px", borderBottom: i < TYPE_SCALE.length - 1 ? "1px solid rgba(27,43,75,0.08)" : "none", alignItems: "center" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-muted)", marginBottom: 2 }}>{t.px}px / {t.family}</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-muted)" }}>{t.usage}</p>
                </div>
                <p style={{ fontSize: Math.min(t.px, 48), fontWeight: t.w, fontFamily: t.family === "Lora" ? "var(--font-lora-var), serif" : "var(--font-inter-var), sans-serif", color: "var(--color-navy)", lineHeight: 1.1, letterSpacing: t.px >= 24 ? "-0.025em" : "normal", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: t.px > 18 ? "nowrap" : "normal" }}>
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* ── Spacing ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 40 }}>8px spacing rhythm</p>
          <div style={{ borderTop: "1px solid rgba(27,43,75,0.12)", paddingTop: 48, display: "flex", alignItems: "flex-end", gap: 24 }}>
            {SPACING.map((s, i) => (
              <SectionReveal key={s} delay={i * 35} from="bottom">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <div style={{ width: Math.max(s * 0.5, 6), height: Math.max(s * 0.5, 6), background: "#2A9D8F", opacity: 0.6 + (i * 0.04) }}/>
                  <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 10, color: "var(--color-muted)" }}>{s}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* ── Components ── */}
      <div style={{ padding: "96px 80px 140px" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 48 }}>Component library</p>
        </SectionReveal>
        {COMPONENTS.map((c, i) => (
          <SectionReveal key={c.title} delay={i * 60} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "0 64px", padding: "40px 0", borderTop: "1px solid rgba(27,43,75,0.12)", alignItems: "center" }}>
              <div>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 16, color: "var(--color-navy)", marginBottom: 8 }}>{c.title}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>{c.note}</p>
              </div>
              <div style={{ padding: "32px", background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center" }}>
                {c.demo}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

    </section>
  );
}
