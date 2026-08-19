import SectionReveal from "@/components/ui/SectionReveal";

const MODEL = [
  {
    title: "Curated multi-brand retailer",
    body: "Pare doesn't manufacture anything. It selects and sells products from aligned brands, applying a consistent quality bar across categories. Revenue comes from retail margin — not ads, not data.",
  },
  {
    title: "A considered edit, not a catalogue",
    body: "Every product in the range was chosen to reduce decision fatigue. No duplicates, no quantity-over-quality. Fewer, better options organised by how people actually shop.",
  },
  {
    title: "Recurring purchase at the core",
    body: "Pare Repeat turns restocking into a frictionless habit for qualifying products. It increases lifetime value without locking every product into a subscription model.",
  },
];

const WHY = [
  {
    q: "Why not a general marketplace?",
    a: "General marketplaces optimise for breadth and price. Pare optimises for trust and reduced effort. The curation is the product.",
  },
  {
    q: "Why mobile-first?",
    a: "The target audience browses and buys on mobile. The app removes the friction of comparison-shopping across five tabs by doing the comparison work upfront.",
  },
  {
    q: "Why a recurring purchase mode?",
    a: "Everyday essentials run out on predictable cycles. Automating restocking reduces the tax on attention without requiring a full subscription lock-in.",
  },
];

const S = {
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-muted)" },
  h2:    { fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--color-navy)" },
  h3:    { fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 16, color: "var(--color-navy)" },
  body:  { fontFamily: "var(--font-inter-var)", fontSize: 16, lineHeight: 1.7, color: "var(--color-subtle)" },
  small: { fontFamily: "var(--font-inter-var)", fontSize: 13, lineHeight: 1.6, color: "var(--color-subtle)" },
};

export default function Overview() {
  return (
    <section id="overview" style={{ background: "var(--color-canvas)", padding: "120px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px" }}>

        {/* Chapter marker */}
        <SectionReveal>
          <div className="chapter-rule">
            <span style={S.label}>01</span>
            <span style={S.label}>Overview</span>
          </div>
          <h2 style={S.h2}>What Pare is — and why it exists.</h2>
        </SectionReveal>

        {/* Opening statement */}
        <SectionReveal delay={80}>
          <div style={{ marginTop: 64, maxWidth: 640 }}>
            <p
              style={{
                fontFamily: "var(--font-lora-var)",
                fontWeight: 600,
                fontSize: "clamp(22px, 2.5vw, 28px)",
                lineHeight: 1.45,
                color: "var(--color-navy)",
                letterSpacing: "-0.01em",
              }}
            >
              &ldquo;Pare&rdquo; means to reduce something to its essential form.
              It is the product strategy applied to the company name: help people
              pare their habits down to what actually matters.
            </p>
          </div>
        </SectionReveal>

        {/* Positioning row */}
        <SectionReveal delay={60}>
          <div
            style={{
              marginTop: 72,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {[
              ["Positioning", "Curated lower-waste essentials retailer"],
              ["Mission",     "Make sustainable choices the easy default"],
              ["Model",       "Multi-brand retail + optional repeat purchase"],
            ].map(([k, v], i) => (
              <div
                key={k}
                style={{
                  padding: "28px 32px 28px 0",
                  borderRight: i < 2 ? "1px solid var(--color-border)" : "none",
                  paddingLeft: i > 0 ? 32 : 0,
                }}
              >
                <p style={S.label}>{k}</p>
                <p style={{ ...S.body, marginTop: 8, fontSize: 15 }}>{v}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Business model */}
        <SectionReveal delay={80}>
          <div style={{ marginTop: 96 }}>
            <p style={{ ...S.label, marginBottom: 40 }}>Business model</p>
            {MODEL.map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "24px 64px",
                  padding: "32px 0",
                  borderTop: "1px solid var(--color-border)",
                  alignItems: "start",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-inter-var)",
                      fontSize: 11,
                      color: "var(--color-muted)",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <p style={S.h3}>{item.title}</p>
                </div>
                <p style={S.body}>{item.body}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Target user */}
        <SectionReveal delay={60}>
          <div
            style={{
              marginTop: 96,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
              padding: "64px",
              background: "var(--color-cream)",
              borderRadius: 8,
            }}
          >
            <div>
              <p style={{ ...S.label, marginBottom: 24 }}>Target user</p>
              <p
                style={{
                  fontFamily: "var(--font-lora-var)",
                  fontWeight: 600,
                  fontSize: 28,
                  lineHeight: 1.3,
                  color: "var(--color-navy)",
                  letterSpacing: "-0.01em",
                }}
              >
                Environmentally conscious adults, 25–45.
              </p>
              <p style={{ ...S.body, marginTop: 20 }}>
                They already care about sustainability but find it genuinely hard to act on — products are scattered across too many stores, certifications are confusing, and greenwashing erodes trust. They want someone to have done the research for them.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                ["Pain",      "Overwhelmed by choice, sceptical of claims"],
                ["Goal",      "Shop in line with values without extra effort"],
                ["Behaviour", "Researches before buying, prefers subscriptions for basics"],
                ["Context",   "Urban, mobile-first, time-poor"],
              ].map(([k, v]) => (
                <div key={k} style={{ borderTop: "1px solid rgba(27,43,75,0.08)", paddingTop: 16 }}>
                  <p style={{ ...S.label, color: "var(--color-teal)", marginBottom: 6 }}>{k}</p>
                  <p style={S.small}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Hypothesis + Why */}
        <SectionReveal delay={80}>
          <div style={{ marginTop: 96, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ ...S.label, marginBottom: 24 }}>Product hypothesis</p>
              <p
                style={{
                  fontFamily: "var(--font-lora-var)",
                  fontSize: 20,
                  lineHeight: 1.55,
                  color: "var(--color-navy)",
                }}
              >
                If we remove the research burden and reduce the friction of re-purchasing, people who already want to shop sustainably will shop that way more consistently — and feel better doing it.
              </p>
              <p style={{ ...S.small, marginTop: 20, borderTop: "1px solid var(--color-border)", paddingTop: 20 }}>
                Validated heuristically against competitor journeys. Formal usability testing is the planned next step.
              </p>
            </div>
            <div>
              <p style={{ ...S.label, marginBottom: 24 }}>Why not just another marketplace?</p>
              {WHY.map((item) => (
                <div
                  key={item.q}
                  style={{ borderTop: "1px solid var(--color-border)", padding: "20px 0" }}
                >
                  <p style={{ ...S.h3, marginBottom: 8, fontSize: 14 }}>{item.q}</p>
                  <p style={S.small}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
