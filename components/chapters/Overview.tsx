import SectionReveal from "@/components/ui/SectionReveal";

const F = {
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-muted)" } as React.CSSProperties,
  h2:    { fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "var(--color-navy)" } as React.CSSProperties,
  body:  { fontFamily: "var(--font-inter-var)", fontSize: 16, lineHeight: 1.72, color: "var(--color-subtle)" } as React.CSSProperties,
  sm:    { fontFamily: "var(--font-inter-var)", fontSize: 13, lineHeight: 1.65, color: "var(--color-subtle)" } as React.CSSProperties,
};

const MODEL = [
  { n: "01", title: "Curated multi-brand retailer", body: "Pare doesn't manufacture anything. It selects and sells products from aligned brands, applying a consistent quality bar across categories. Revenue comes from retail margin — not ads, not data." },
  { n: "02", title: "A considered edit, not a catalogue", body: "Every product in the range was chosen to reduce decision fatigue. No duplicates, no quantity-over-quality. Fewer, better options organised by how people actually shop." },
  { n: "03", title: "Recurring purchase at the core", body: "Pare Repeat turns restocking into a frictionless habit for qualifying products. It increases lifetime value without locking every product into a subscription model." },
];

const WHY = [
  { q: "Why not a general marketplace?", a: "General marketplaces optimise for breadth and price. Pare optimises for trust and reduced effort. The curation is the product." },
  { q: "Why mobile-first?",              a: "The target audience browses and buys on mobile. The app removes the friction of comparison-shopping across five tabs by doing the research upfront." },
  { q: "Why a recurring purchase mode?", a: "Everyday essentials run out on predictable cycles. Automating restocking reduces the tax on attention without requiring a full subscription lock-in." },
];

export default function Overview() {
  return (
    <section id="overview" className="section-card" style={{ background: "var(--color-canvas)", padding: "128px 0 140px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px", position: "relative" }}>

        {/* Decorative number */}
        <div aria-hidden style={{ position: "absolute", right: -20, top: -60, fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "28vw", lineHeight: 1, color: "var(--color-navy)", opacity: 0.025, pointerEvents: "none", userSelect: "none" }}>01</div>

        {/* Chapter label */}
        <SectionReveal from="left">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <span style={F.label}>01</span>
            <div style={{ flex: 1, height: 1, background: "var(--color-border)" }}/>
            <span style={F.label}>Overview</span>
          </div>
        </SectionReveal>

        {/* Headline */}
        <SectionReveal delay={80}>
          <h2 style={{ ...F.h2, maxWidth: 640, marginBottom: 64 }}>
            What Pare is — and why it exists.
          </h2>
        </SectionReveal>

        {/* Opening statement */}
        <SectionReveal delay={120} scale>
          <div style={{ maxWidth: 660, marginBottom: 96 }}>
            <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(20px,2.5vw,28px)", lineHeight: 1.48, color: "var(--color-navy)", letterSpacing: "-0.01em" }}>
              &ldquo;Pare&rdquo; means to reduce something to its essential form. It is the product strategy applied to the company name: help people pare their habits down to what actually matters.
            </p>
          </div>
        </SectionReveal>

        {/* Positioning row */}
        <SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--color-border)", marginBottom: 96 }}>
            {[["Positioning","Curated lower-waste essentials retailer"],["Mission","Make sustainable choices the easy default"],["Model","Multi-brand retail + optional repeat purchase"]].map(([k,v],i) => (
              <div key={k} style={{ padding: "28px 28px 28px 0", borderRight: i<2 ? "1px solid var(--color-border)" : "none", paddingLeft: i>0 ? 28 : 0 }}>
                <p style={F.label}>{k}</p>
                <p style={{ ...F.body, marginTop: 8, fontSize: 15 }}>{v}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Business model */}
        <SectionReveal from="left">
          <p style={{ ...F.label, marginBottom: 40 }}>Business model</p>
        </SectionReveal>
        {MODEL.map((item, i) => (
          <SectionReveal key={item.n} delay={i * 80} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px 64px", padding: "32px 0", borderTop: "1px solid var(--color-border)", alignItems: "start" }}>
              <div>
                <span style={{ ...F.label, color: "var(--color-teal)", display: "block", marginBottom: 8 }}>{item.n}</span>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 16, color: "var(--color-navy)", lineHeight: 1.4 }}>{item.title}</p>
              </div>
              <p style={F.body}>{item.body}</p>
            </div>
          </SectionReveal>
        ))}

        {/* Target user */}
        <SectionReveal delay={60} scale style={{ marginTop: 96 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, background: "var(--color-cream)", borderRadius: 12, padding: "64px" }}>
            <div>
              <p style={{ ...F.label, marginBottom: 24 }}>Target user</p>
              <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "var(--color-navy)", letterSpacing: "-0.02em" }}>
                Environmentally conscious adults, 25–45.
              </p>
              <p style={{ ...F.body, marginTop: 20 }}>
                They already care about sustainability but find it genuinely hard to act on. Products are scattered, certifications are confusing, greenwashing erodes trust. They want someone to have done the research for them.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[["Pain","Overwhelmed by choice, sceptical of claims"],["Goal","Shop in line with values without extra effort"],["Behaviour","Researches before buying, prefers subscriptions for basics"],["Context","Urban, mobile-first, time-poor"]].map(([k,v]) => (
                <div key={k} style={{ borderTop: "1px solid rgba(27,43,75,0.08)", padding: "16px 0" }}>
                  <p style={{ ...F.label, color: "var(--color-teal)", marginBottom: 6 }}>{k}</p>
                  <p style={F.sm}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Hypothesis + Why */}
        <div style={{ marginTop: 96, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <SectionReveal from="left">
            <p style={{ ...F.label, marginBottom: 24 }}>Product hypothesis</p>
            <p style={{ fontFamily: "var(--font-lora-var)", fontSize: "clamp(18px,2vw,22px)", lineHeight: 1.55, color: "var(--color-navy)" }}>
              If we remove the research burden and reduce the friction of re-purchasing, people who already want to shop sustainably will shop that way more consistently — and feel better doing it.
            </p>
            <p style={{ ...F.sm, marginTop: 20, borderTop: "1px solid var(--color-border)", paddingTop: 20 }}>Validated heuristically. Formal usability testing is the planned next step.</p>
          </SectionReveal>
          <SectionReveal from="right">
            <p style={{ ...F.label, marginBottom: 24 }}>Why not just another marketplace?</p>
            {WHY.map(item => (
              <div key={item.q} style={{ borderTop: "1px solid var(--color-border)", padding: "18px 0" }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "var(--color-navy)", marginBottom: 8 }}>{item.q}</p>
                <p style={F.sm}>{item.a}</p>
              </div>
            ))}
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
