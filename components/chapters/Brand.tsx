import SectionReveal from "@/components/ui/SectionReveal";

const L = (color = "var(--color-muted)") => ({
  fontFamily: "var(--font-inter-var)" as const,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color,
});

const PALETTE = [
  { name: "Canvas",  hex: "#FAF8F5", role: "Ground",   w: 2, border: true },
  { name: "Navy",    hex: "#1B2B4B", role: "Voice",    w: 2 },
  { name: "Teal",    hex: "#2A9D8F", role: "Action",   w: 2 },
  { name: "Cream",   hex: "#F4EBD6", role: "Warmth",   w: 1 },
  { name: "Mint",    hex: "#E2F0EE", role: "Breathing",w: 1 },
  { name: "Apricot", hex: "#FAE5D3", role: "Energy",   w: 1 },
];

const TONE = [
  { context: "Product benefit", yes: "Lasts three times as long as most alternatives.", no: "This game-changing product is better for the planet!" },
  { context: "Subscription",   yes: "Never run out. Pause or cancel whenever.",          no: "Join the sustainability revolution today!" },
  { context: "Empty cart",     yes: "Your bag is empty — not for long.",                 no: "Go green! Start your eco-friendly journey." },
];

export default function Brand() {
  return (
    <section id="brand" style={{ background: "var(--color-cream)" }}>

      {/* ── Chapter header ── */}
      <div style={{ borderTop: "1px solid rgba(27,43,75,0.12)", padding: "48px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 20, paddingBottom: 48, borderBottom: "1px solid rgba(27,43,75,0.12)" }}>
            <span style={L("var(--color-teal)")}>04</span>
            <div style={{ flex: 1, height: 1, background: "rgba(27,43,75,0.12)" }}/>
            <span style={L()}>Brand</span>
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
            maxWidth: "75%",
          }}>
            Pare down<br/>to what matters.
          </h2>
        </SectionReveal>
      </div>

      {/* ── THE WORDMARK MOMENT ── */}
      <SectionReveal delay={60} scale style={{ margin: "80px 0 0" }}>
        <div style={{
          borderTop: "1px solid rgba(27,43,75,0.12)",
          borderBottom: "1px solid rgba(27,43,75,0.12)",
          padding: "80px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}>
          {/* Light on cream */}
          <p style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(80px, 16vw, 240px)",
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
            color: "var(--color-navy)",
            userSelect: "none",
          }}>
            Pare
          </p>
          {/* Inverted — white on navy strip */}
          <div style={{
            width: "100%",
            background: "var(--color-navy)",
            display: "flex",
            justifyContent: "center",
            padding: "48px 0",
          }}>
            <p style={{
              fontFamily: "var(--font-lora-var)",
              fontWeight: 600,
              fontSize: "clamp(80px, 16vw, 240px)",
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
              color: "white",
              userSelect: "none",
            }}>
              Pare
            </p>
          </div>
          <p style={{ ...L(), paddingTop: 8 }}>Lora SemiBold 600 — on cream · on navy</p>
        </div>
      </SectionReveal>

      {/* ── Naming + type pairing ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
          <SectionReveal from="left">
            <p style={{ ...L(), marginBottom: 28 }}>Naming rationale</p>
            <p style={{
              fontFamily: "var(--font-lora-var)",
              fontWeight: 600,
              fontSize: "clamp(22px, 2.5vw, 36px)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "var(--color-navy)",
              marginBottom: 24,
            }}>
              To pare: reduce something to its essential form.
            </p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.75, color: "var(--color-subtle)" }}>
              The name is the product strategy. One syllable, no unnecessary letters. It signals restraint — the opposite of abundance-as-virtue. It practises what it preaches.
            </p>
          </SectionReveal>
          <SectionReveal from="right">
            <p style={{ ...L(), marginBottom: 28 }}>Typography</p>
            <div style={{ borderTop: "1px solid rgba(27,43,75,0.12)" }}>
              <div style={{ padding: "28px 0", borderBottom: "1px solid rgba(27,43,75,0.08)" }}>
                <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 42, letterSpacing: "-0.025em", color: "var(--color-navy)", lineHeight: 1.1, marginBottom: 8 }}>Lora SemiBold</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>Display, headings, pull quotes — the human voice</p>
              </div>
              <div style={{ padding: "28px 0" }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 30, color: "var(--color-navy)", lineHeight: 1.1, marginBottom: 8 }}>Inter Medium</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>UI, metadata, body copy — the functional voice</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Colour palette — full bleed strip ── */}
      <SectionReveal style={{ marginTop: 96 }} from="bottom">
        <div style={{ display: "flex", height: 80 }}>
          {PALETTE.map(c => (
            <div key={c.name} style={{ flex: c.w, background: c.hex, borderRight: c.border ? "1px solid rgba(27,43,75,0.1)" : "none" }}/>
          ))}
        </div>
        <div style={{ padding: "28px 80px", borderBottom: "1px solid rgba(27,43,75,0.12)", display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}>
          {PALETTE.map((c, i) => (
            <div key={c.name} style={{ borderRight: i < 5 ? "1px solid rgba(27,43,75,0.1)" : "none", paddingRight: 20, paddingLeft: i > 0 ? 20 : 0 }}>
              <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 2 }}>{c.name}</p>
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginBottom: 3 }}>{c.hex}</p>
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-subtle)", lineHeight: 1.5 }}>{c.role}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* ── Tone of voice ── */}
      <div style={{ padding: "80px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "0 80px", marginBottom: 48 }}>
            <p style={L()}>Tone of voice</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 16, lineHeight: 1.7, color: "var(--color-subtle)", maxWidth: 480 }}>
              Warm, clear, optimistic, confident — never preachy. Pare trusts the reader to care. It never lectures.
            </p>
          </div>
        </SectionReveal>
        {TONE.map((ex, i) => (
          <SectionReveal key={ex.context} delay={i * 60} from="bottom">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid rgba(27,43,75,0.1)",
              padding: "36px 0",
            }}>
              <div style={{ paddingRight: 60 }}>
                <p style={{ ...L("var(--color-subtle)"), marginBottom: 20 }}>{ex.context}</p>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <circle cx="7.5" cy="7.5" r="7" fill="#2A9D8F"/>
                    <path d="M4.5 7.5l2 2 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, color: "var(--color-navy)", lineHeight: 1.6 }}>
                    &ldquo;{ex.yes}&rdquo;
                  </p>
                </div>
              </div>
              <div style={{ paddingLeft: 60, borderLeft: "1px solid rgba(27,43,75,0.1)", display: "flex", gap: 14, alignItems: "flex-start", paddingTop: 40 }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                  <circle cx="7.5" cy="7.5" r="7" fill="rgba(27,43,75,0.08)"/>
                  <path d="M5 10l5-5M10 10L5 5" stroke="rgba(27,43,75,0.35)" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  &ldquo;{ex.no}&rdquo;
                </p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* ── Image direction ── */}
      <div style={{ padding: "80px 80px 140px" }}>
        <SectionReveal>
          <div style={{ borderTop: "1px solid rgba(27,43,75,0.1)", paddingTop: 48, display: "grid", gridTemplateColumns: "1fr 3fr", gap: "0 80px" }}>
            <p style={L()}>Image direction</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0 40px" }}>
              {[
                ["Product on white",    "All product imagery on pure white. Minimal shadows. No lifestyle props."],
                ["Editorial only",      "Campaign surfaces only. Clean domestic settings, natural light."],
                ["No stock eco",        "No leaves, green hands, or earth graphics. No gradients."],
                ["Colour from product", "Lifestyle shots draw colour from products, not added elements."],
              ].map(([r, d], i) => (
                <div key={r} style={{ borderLeft: i > 0 ? "1px solid rgba(27,43,75,0.1)" : "none", paddingLeft: i > 0 ? 24 : 0, paddingRight: 24 }}>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 8, lineHeight: 1.4 }}>{r}</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-subtle)", lineHeight: 1.65 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

    </section>
  );
}
