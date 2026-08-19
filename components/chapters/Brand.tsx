import SectionReveal from "@/components/ui/SectionReveal";

const T = {
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-muted)" },
  body:  { fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.7, color: "var(--color-subtle)" } as React.CSSProperties,
};

const PALETTE = [
  { name: "Canvas",  hex: "#FAF8F5", role: "Ground — every surface starts here",        w: 2 },
  { name: "Navy",    hex: "#1B2B4B", role: "Voice — authority without coldness",         w: 2 },
  { name: "Teal",    hex: "#2A9D8F", role: "Action — the one colour that moves things", w: 2 },
  { name: "Cream",   hex: "#F4EBD6", role: "Warmth — natural, never clinical",          w: 1 },
  { name: "Mint",    hex: "#E2F0EE", role: "Quiet — breathing room",                    w: 1 },
  { name: "Apricot", hex: "#FAE5D3", role: "Energy — alive without shouting",           w: 1 },
];

const TONE = [
  { context: "Product benefit", yes: "Lasts three times as long as most alternatives.", no: "This game-changing product is better for the planet!" },
  { context: "Subscription",   yes: "Never run out. Pause or cancel whenever.",          no: "Join the sustainability revolution today!" },
  { context: "Empty cart",     yes: "Your bag is empty — not for long.",                 no: "Go green! Start your eco-friendly journey." },
];

export default function Brand() {
  return (
    <section id="brand" className="section-card" style={{ background: "var(--color-cream)", padding: "128px 0 140px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px", position: "relative" }}>

        {/* Decorative number */}
        <div aria-hidden style={{ position: "absolute", left: -40, top: -80, fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "28vw", lineHeight: 1, color: "var(--color-navy)", opacity: 0.04, pointerEvents: "none", userSelect: "none" }}>04</div>

        <SectionReveal from="left">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <span style={T.label}>04</span>
            <div style={{ flex: 1, height: 1, background: "rgba(27,43,75,0.1)" }}/>
            <span style={T.label}>Brand</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "var(--color-navy)", maxWidth: 640, marginBottom: 0 }}>
            Pare down to<br />what matters.
          </h2>
        </SectionReveal>

        {/* Wordmark — dramatic split reveal */}
        <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          <SectionReveal from="left" scale>
            <div style={{ background: "white", borderRadius: "12px 0 0 12px", height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(64px,8vw,96px)", letterSpacing: "-0.04em", color: "#1B2B4B", lineHeight: 1 }}>Pare</span>
            </div>
          </SectionReveal>
          <SectionReveal from="right" scale>
            <div style={{ background: "#1B2B4B", borderRadius: "0 12px 12px 0", height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(64px,8vw,96px)", letterSpacing: "-0.04em", color: "white", lineHeight: 1 }}>Pare</span>
            </div>
          </SectionReveal>
        </div>

        {/* Naming + type pairing */}
        <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <SectionReveal from="left">
            <p style={{ ...T.label, marginBottom: 20 }}>Naming rationale</p>
            <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(22px,2.5vw,30px)", lineHeight: 1.3, color: "var(--color-navy)", letterSpacing: "-0.01em", marginBottom: 16 }}>
              To pare: reduce something to its essential form.
            </p>
            <p style={T.body}>
              The name is the product strategy. One syllable, no unnecessary letters. It signals restraint and intentionality — the opposite of abundance-as-virtue. It practises what it preaches.
            </p>
          </SectionReveal>
          <SectionReveal from="right">
            <p style={{ ...T.label, marginBottom: 20 }}>Typography pairing</p>
            <div style={{ borderTop: "1px solid rgba(27,43,75,0.1)" }}>
              <div style={{ padding: "20px 0", borderBottom: "1px solid rgba(27,43,75,0.08)" }}>
                <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 36, color: "var(--color-navy)", letterSpacing: "-0.02em", marginBottom: 6 }}>Lora SemiBold</p>
                <p style={{ ...T.body, fontSize: 13 }}>Display, headings, pull quotes — the human voice</p>
              </div>
              <div style={{ padding: "20px 0" }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 24, color: "var(--color-navy)", marginBottom: 6 }}>Inter Medium</p>
                <p style={{ ...T.body, fontSize: 13 }}>UI, metadata, body copy — the functional voice</p>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Palette */}
        <SectionReveal delay={40} style={{ marginTop: 96 }}>
          <p style={{ ...T.label, marginBottom: 24 }}>Colour palette</p>
          <div style={{ display: "flex", height: 88, borderRadius: 8, overflow: "hidden", marginBottom: 28 }}>
            {PALETTE.map(c => (
              <div key={c.name} style={{ flex: c.w, background: c.hex, borderRight: c.hex === "#FAF8F5" ? "1px solid #E4DDD4" : "none" }}/>
            ))}
          </div>
        </SectionReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 0, marginBottom: 96 }}>
          {PALETTE.map((c, i) => (
            <SectionReveal key={c.name} delay={i * 60} from="bottom">
              <div style={{ borderRight: i < 5 ? "1px solid rgba(27,43,75,0.08)" : "none", paddingRight: 16, paddingLeft: i > 0 ? 16 : 0 }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 600, color: "var(--color-navy)", marginBottom: 3 }}>{c.name}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginBottom: 4 }}>{c.hex}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, color: "var(--color-subtle)", lineHeight: 1.4 }}>{c.role}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Tone of voice */}
        <SectionReveal from="left">
          <p style={{ ...T.label, marginBottom: 8 }}>Tone of voice</p>
          <p style={{ ...T.body, maxWidth: 480, marginBottom: 40 }}>
            Warm, clear, optimistic, confident — never preachy. Pare trusts the reader to care. It never lectures.
          </p>
        </SectionReveal>
        {TONE.map((ex, i) => (
          <SectionReveal key={ex.context} delay={i * 80} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, padding: "28px 0", borderTop: "1px solid rgba(27,43,75,0.08)" }}>
              <div>
                <p style={{ ...T.label, marginBottom: 12, color: "var(--color-subtle)" }}>{ex.context}</p>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="8" cy="8" r="7.5" fill="#2A9D8F"/>
                    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, color: "var(--color-navy)", lineHeight: 1.55 }}>&ldquo;{ex.yes}&rdquo;</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", paddingTop: 34 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="8" cy="8" r="7.5" fill="#E4DDD4"/>
                  <path d="M5.5 10.5l5-5M10.5 10.5l-5-5" stroke="#8C9BAD" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.55 }}>&ldquo;{ex.no}&rdquo;</p>
              </div>
            </div>
          </SectionReveal>
        ))}

        {/* Image direction */}
        <SectionReveal delay={40} style={{ marginTop: 80 }}>
          <p style={{ ...T.label, marginBottom: 32 }}>Image direction</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
            {[
              { rule: "Product on white",   detail: "All product imagery on pure white. Shadows are minimal. No lifestyle props." },
              { rule: "Editorial only",     detail: "Campaign surfaces only. Clean domestic settings, natural light, no staged perfection." },
              { rule: "No stock eco",       detail: "No leaves, green hands, or earth graphics. No gradients. No visual clichés." },
              { rule: "Colour from product",detail: "Lifestyle shots draw colour from the products themselves, not added elements." },
            ].map((r, i) => (
              <div key={r.rule} style={{ borderLeft: i > 0 ? "1px solid rgba(27,43,75,0.08)" : "none", paddingLeft: i > 0 ? 28 : 0, paddingRight: 28 }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "var(--color-navy)", marginBottom: 8 }}>{r.rule}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-subtle)", lineHeight: 1.6 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
