import SectionReveal from "@/components/ui/SectionReveal";

/* ── Shared style atoms ── */
const L = (color = "var(--color-muted)") => ({
  fontFamily: "var(--font-inter-var)" as const,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color,
});

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-inter-var)",
  fontSize: 16,
  lineHeight: 1.78,
  color: "var(--color-subtle)",
};

const MODEL = [
  { n: "01", title: "Curated multi-brand retailer", body: "Pare selects and sells products from aligned brands. Revenue comes from retail margin — not ads, not data. The curation is the product." },
  { n: "02", title: "A considered edit, not a catalogue", body: "Fewer, better options organised by how people actually shop. No duplicates, no quantity-over-quality. Decision fatigue is the enemy." },
  { n: "03", title: "Recurring purchase at the core", body: "Pare Repeat turns restocking into a frictionless habit for qualifying products. It increases lifetime value without locking every product into a subscription." },
];

export default function Overview() {
  return (
    <section id="overview" style={{ background: "var(--color-canvas)" }}>

      {/* ── Chapter header ── */}
      <div style={{ borderTop: "1px solid var(--color-border)", padding: "48px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 20, paddingBottom: 48, borderBottom: "1px solid var(--color-border)" }}>
            <span style={L("var(--color-teal)")}>01</span>
            <div style={{ flex: 1, height: 1, background: "var(--color-border)" }}/>
            <span style={L()}>Overview</span>
          </div>
        </SectionReveal>
      </div>

      {/* ── Display headline ── */}
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
            What Pare is —<br/>and why it exists.
          </h2>
        </SectionReveal>

        {/* ── Opening pull quote ── */}
        <SectionReveal delay={80}>
          <p style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(22px, 2.8vw, 40px)",
            lineHeight: 1.38,
            letterSpacing: "-0.02em",
            color: "var(--color-navy)",
            fontStyle: "italic",
            maxWidth: 820,
            margin: "64px 0 0",
            opacity: 0.72,
          }}>
            &ldquo;Pare&rdquo; means to reduce something to its essential form. The name is the product strategy applied to the company name — help people pare their habits down to what actually matters.
          </p>
        </SectionReveal>
      </div>

      {/* ── Stat bar ── */}
      <SectionReveal style={{ margin: "96px 0 0" }}>
        <div style={{
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}>
          {[
            { n: "3",  label: "Product categories" },
            { n: "7",  label: "App screens in core flow" },
            { n: "1",  label: "Checkout path" },
          ].map(({ n, label }, i) => (
            <div key={label} style={{
              padding: "64px 80px",
              textAlign: "center",
              borderRight: i < 2 ? "1px solid var(--color-border)" : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-lora-var)",
                fontWeight: 600,
                fontSize: "clamp(72px, 9vw, 128px)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                color: "var(--color-navy)",
              }}>{n}</p>
              <p style={{ ...L(), marginTop: 16 }}>{label}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* ── Positioning ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", borderBottom: "1px solid var(--color-border)", paddingBottom: 80 }}>
            <div>
              <p style={L()}>Positioning</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 48px" }}>
              {[
                ["What",    "Curated lower-waste essentials retailer"],
                ["Mission", "Make sustainable choices the easy default"],
                ["Model",   "Multi-brand retail + optional repeat purchase"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p style={{ ...L(), marginBottom: 12 }}>{k}</p>
                  <p style={{ ...BODY, fontSize: 14 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── Business model ── */}
        <SectionReveal style={{ marginTop: 80 }}>
          <p style={{ ...L(), marginBottom: 48 }}>Business model</p>
        </SectionReveal>
        {MODEL.map((item, i) => (
          <SectionReveal key={item.n} delay={i * 70} from="bottom">
            <div style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 2fr",
              gap: "0 48px",
              padding: "36px 0",
              borderTop: "1px solid var(--color-border)",
              alignItems: "start",
            }}>
              <span style={{ ...L("var(--color-teal)"), paddingTop: 2 }}>{item.n}</span>
              <p style={{
                fontFamily: "var(--font-inter-var)",
                fontWeight: 600,
                fontSize: 16,
                lineHeight: 1.4,
                color: "var(--color-navy)",
              }}>{item.title}</p>
              <p style={BODY}>{item.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* ── Target user — full-bleed dark panel ── */}
      <SectionReveal style={{ marginTop: 96 }} from="bottom" scale>
        <div style={{
          background: "var(--color-navy)",
          padding: "80px 80px",
        }}>
          <p style={{ ...L("rgba(255,255,255,0.3)"), marginBottom: 36 }}>Target user</p>
          <p style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1.25,
            letterSpacing: "-0.025em",
            color: "white",
            maxWidth: 640,
            marginBottom: 56,
          }}>
            Environmentally conscious adults, 25–45, who want to act on their values without extra effort.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0 }}>
            {[
              ["Pain",      "Overwhelmed by choice, sceptical of greenwashing"],
              ["Goal",      "Shop in line with values without extra effort"],
              ["Behaviour", "Researches before buying, prefers subscriptions for basics"],
              ["Context",   "Urban, mobile-first, time-poor"],
            ].map(([k, v], i) => (
              <div key={k} style={{
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                paddingLeft: i > 0 ? 36 : 0,
                paddingRight: 36,
              }}>
                <p style={{ ...L("var(--color-teal)"), marginBottom: 12 }}>{k}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── Hypothesis ── */}
      <div style={{ padding: "96px 80px 140px" }}>
        <SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px" }}>
            <p style={{ ...L(), paddingTop: 3 }}>Product hypothesis</p>
            <div>
              <p style={{
                fontFamily: "var(--font-lora-var)",
                fontSize: "clamp(20px, 2.2vw, 32px)",
                lineHeight: 1.5,
                letterSpacing: "-0.015em",
                color: "var(--color-navy)",
                marginBottom: 24,
              }}>
                If we remove the research burden and reduce the friction of re-purchasing, people who already want to shop sustainably will shop that way more consistently.
              </p>
              <p style={{ ...BODY, fontSize: 14, borderTop: "1px solid var(--color-border)", paddingTop: 20 }}>
                Validated heuristically via competitor analysis and journey mapping. Formal usability testing is the planned next step.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>

    </section>
  );
}
