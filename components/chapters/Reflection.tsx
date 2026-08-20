import SectionReveal from "@/components/ui/SectionReveal";

const L = (color = "rgba(255,255,255,0.3)") => ({
  fontFamily: "var(--font-inter-var)" as const,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color,
});

const DECISIONS = [
  { n: "01", title: "Scoping Repeat, not forcing it",              body: "The temptation was to make recurring purchase the default for all products. Scoping it to products where restocking is a real behaviour reduces scope and increases clarity.", changed: "Repeat messaging originally appeared on every product. Removed from one-time items when the recurring frame clearly added confusion, not value." },
  { n: "02", title: "Search inside Products, not global",           body: "A persistent search icon in the navigation felt conventional but wrong. Search is a browsing act, not a navigation act. Placing it inside Products aligns the tool with the intent.", changed: "Early explorations had search in the app bar. User journey mapping revealed it created a disjointed flow." },
  { n: "03", title: "Cart as a rest stop",                          body: "Most e-commerce carts remove 'continue shopping' in favour of aggressive checkout prompting. Pare's audience is deliberate — giving them a clear off-ramp aligns with brand tone.", changed: "The first cart iteration had only a checkout button. Testing against competitor flows showed it felt transactional in a way that contradicted the brand." },
  { n: "04", title: "Campaign without app-store buttons",           body: "The trade-show totem has a QR code, not an App Store button. Physical assets reach people who haven't decided anything yet — a lower-commitment entry point.", changed: "Early totem designs had both QR and app-store badges. Removing them simplified the asset and avoided a high-commitment ask too early." },
];

const CHALLENGED = [
  { q: "Is curation enough of a moat?",      a: "Probably not on its own. The Repeat infrastructure and brand relationships are harder to replicate than the product selection itself." },
  { q: "Does the target user want a separate app?", a: "Not validated. The hypothesis is that a focused experience outperforms general retail on satisfaction — but this needs research." },
  { q: "Is the savings language honest?",    a: "The 10% Repeat saving is representative, not confirmed commercially. Final pricing needs modelling after supplier negotiations." },
];

const NEXT = [
  "Moderated usability sessions on the purchase-mode screen — Repeat vs. one-time toggle is the highest-risk interaction.",
  "Supplier negotiation to set real Repeat margins, then update all pricing copy.",
  "Accessibility audit: colour contrast on proof labels and muted text against cream and mint surfaces.",
  "Quantitative test: does showing annual saving (£10.80) convert better than monthly (£0.90/mo)?",
  "Engineering handoff: finalise spacing tokens and confirm inter-tab navigation behaviour.",
];

export default function Reflection() {
  return (
    <section id="reflection" style={{ background: "var(--color-navy)" }}>

      {/* ── Chapter header ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "48px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 20, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span style={L("var(--color-teal)")}>06</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}/>
            <span style={L()}>Reflection</span>
          </div>
        </SectionReveal>
      </div>

      {/* ── Headline ── */}
      <div style={{ padding: "72px 80px 0" }}>
        <SectionReveal>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(52px, 7vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "white", maxWidth: "80%" }}>
            What changed, what was challenged, what comes next.
          </h2>
        </SectionReveal>

        <SectionReveal delay={80}>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
            <p style={L()}>Validation note</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 540 }}>
              All design decisions were validated heuristically — competitor analysis, journey mapping, and design critique — not through formal usability studies. The next phase is to test the assumptions that carry the most risk.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* ── Decisions ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 48 }}>Key decisions + what changed</p>
        </SectionReveal>
        {DECISIONS.map((d, i) => (
          <SectionReveal key={d.n} delay={i * 70} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 2fr", gap: "0 48px", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
              <span style={{ ...L("var(--color-teal)"), paddingTop: 2 }}>{d.n}</span>
              <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 16, color: "white", lineHeight: 1.4 }}>{d.title}</p>
              <div>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>{d.body}</p>
                <div style={{ padding: "16px 20px", background: "rgba(42,157,143,0.1)", borderLeft: "2px solid #2A9D8F" }}>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>
                    <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>What changed: </span>{d.changed}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* ── Challenged ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 48 }}>What was challenged</p>
        </SectionReveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {CHALLENGED.map((c, i) => (
            <SectionReveal key={c.q} delay={i * 70} from="bottom">
              <div style={{ padding: "36px 40px 36px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingRight: i < 2 ? 40 : 0, paddingLeft: i > 0 ? 40 : 0 }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 15, color: "white", marginBottom: 16, lineHeight: 1.4 }}>{c.q}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>{c.a}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* ── Next steps ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 48 }}>What would be validated next</p>
        </SectionReveal>
        {NEXT.map((step, i) => (
          <SectionReveal key={i} delay={i * 55} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "0 48px", padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
              <span style={{ ...L("rgba(255,255,255,0.2)"), paddingTop: 2 }}>0{i + 1}</span>
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>{step}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* ── Closing quote — centered editorial moment ── */}
      <SectionReveal delay={60} style={{ margin: "120px 0 0" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "100px 80px 140px", textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(28px, 4vw, 56px)",
            lineHeight: 1.3,
            letterSpacing: "-0.025em",
            color: "rgba(255,255,255,0.7)",
            fontStyle: "italic",
            maxWidth: 800,
            margin: "0 auto",
          }}>
            &ldquo;Good design isn&apos;t finished when there&apos;s nothing left to add — it&apos;s finished when there&apos;s nothing left to take away.&rdquo;
          </p>
          <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 32 }}>
            That&apos;s what Pare is. That&apos;s what this project tried to be.
          </p>
          <div style={{ marginTop: 80, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Pare" style={{ width: 64, height: "auto", opacity: 0.18, filter: "brightness(0) invert(1)" }}/>
            <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>CASE STUDY · 2026</span>
          </div>
        </div>
      </SectionReveal>

    </section>
  );
}
