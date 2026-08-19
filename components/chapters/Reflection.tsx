import SectionReveal from "@/components/ui/SectionReveal";

const T = {
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const },
};

const DECISIONS = [
  { n: "01", title: "Scoping Repeat, not forcing it",              body: "The temptation was to make recurring purchase the default for all products. Scoping it to products where restocking is a real behaviour — everyday consumables — and keeping one-time purchase clean reduced scope and increased clarity.", changed: "Initially, Repeat messaging appeared on every product. It was removed from one-time items when it became clear the recurring frame added confusion, not value." },
  { n: "02", title: "Search inside Products, not global",           body: "A persistent search icon in the navigation bar felt conventional but wrong. Search is a browsing act, not a navigation act. Placing it inside the Products tab aligns the tool with the intent.", changed: "Early explorations had search in the app bar. User journey mapping revealed it created a disjointed flow — users searched, then found themselves without context." },
  { n: "03", title: "Cart as a rest stop",                          body: "Most e-commerce carts remove 'continue shopping' in favour of aggressive checkout prompting. Pare's audience is deliberate. Giving them a clear off-ramp aligned with brand tone.", changed: "The first cart iteration had only a checkout button. Testing against competitor flows showed it felt transactional in a way that contradicted the brand." },
  { n: "04", title: "Campaign without app-store buttons on physical",body: "The trade-show totem has a QR code, not an App Store button. Physical assets at trade shows reach people who haven't decided anything yet — a lower-commitment entry point.", changed: "Early totem designs had both QR and app-store badges. Removing them simplified the asset and avoided asking for a high-commitment action too early." },
];

const CHALLENGED = [
  { q: "Is curation enough of a moat?",       a: "Probably not on its own. Curation is table-stakes if competitors copy it. The Repeat infrastructure and curated brand relationships are harder to replicate than the product selection itself." },
  { q: "Does the target user want a separate app?", a: "Not validated. The hypothesis is that a focused experience outperforms general retail on satisfaction — but it may not outperform on discovery. This is the gap that needs research." },
  { q: "Is the savings language honest?",      a: "The 10% Repeat saving is representative, not confirmed commercially. Final pricing needs financial modelling after supplier negotiations." },
];

const NEXT = [
  "Moderated usability sessions on the purchase-mode screen — Repeat vs. one-time toggle is the highest-risk interaction.",
  "Supplier negotiation to set real Repeat margins, then update all pricing copy.",
  "Accessibility audit: colour contrast on proof labels and muted text against cream and mint surfaces.",
  "Quantitative test: does showing annual saving (£10.80) convert better than monthly (£0.90/mo) in the Repeat cue?",
  "Engineering handoff: finalise spacing tokens and confirm inter-tab navigation behaviour.",
];

export default function Reflection() {
  return (
    <section id="reflection" className="section-card" style={{ background: "var(--color-navy)", padding: "128px 0 140px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px", position: "relative" }}>

        {/* Decorative number */}
        <div aria-hidden style={{ position: "absolute", left: -40, top: -80, fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "28vw", lineHeight: 1, color: "white", opacity: 0.03, pointerEvents: "none", userSelect: "none" }}>06</div>

        <SectionReveal from="left">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <span style={{ ...T.label, color: "rgba(255,255,255,0.3)" }}>06</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}/>
            <span style={{ ...T.label, color: "rgba(255,255,255,0.3)" }}>Reflection</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "white", maxWidth: 680, marginBottom: 40 }}>
            What changed, what was challenged, what comes next.
          </h2>
        </SectionReveal>

        <SectionReveal delay={140} scale>
          <div style={{ padding: "24px 28px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, maxWidth: 640 }}>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>
              <strong style={{ fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>Honest note on validation:</strong> All design decisions were validated heuristically — competitor analysis, journey mapping, and design critique — not through formal usability studies. The next phase is to test the assumptions that carry the most risk.
            </p>
          </div>
        </SectionReveal>

        {/* Decisions */}
        <SectionReveal from="left" style={{ marginTop: 96 }}>
          <p style={{ ...T.label, color: "rgba(255,255,255,0.3)", marginBottom: 40 }}>Key decisions + what changed</p>
        </SectionReveal>
        {DECISIONS.map((d, i) => (
          <SectionReveal key={d.n} delay={i * 80} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 32, padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "#2A9D8F", fontWeight: 500, paddingTop: 3 }}>{d.n}</span>
              <div>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 17, color: "white", marginBottom: 12 }}>{d.title}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>{d.body}</p>
                <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(42,157,143,0.1)", border: "1px solid rgba(42,157,143,0.18)", borderRadius: 6 }}>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.55)" }}>
                    <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>What changed: </span>{d.changed}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}

        {/* Challenged */}
        <SectionReveal from="left" style={{ marginTop: 96 }}>
          <p style={{ ...T.label, color: "rgba(255,255,255,0.3)", marginBottom: 40 }}>What was challenged</p>
        </SectionReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 96 }}>
          {CHALLENGED.map((c, i) => (
            <SectionReveal key={c.q} delay={i * 80} from="bottom">
              <div style={{ padding: "28px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, height: "100%" }}>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 15, color: "white", marginBottom: 14, lineHeight: 1.4 }}>{c.q}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}>{c.a}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Next steps */}
        <SectionReveal from="left">
          <p style={{ ...T.label, color: "rgba(255,255,255,0.3)", marginBottom: 40 }}>What would be validated next</p>
        </SectionReveal>
        {NEXT.map((step, i) => (
          <SectionReveal key={i} delay={i * 60} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 24, padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.06)", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "rgba(255,255,255,0.25)", paddingTop: 1 }}>0{i+1}</span>
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>{step}</p>
            </div>
          </SectionReveal>
        ))}

        {/* Closing quote */}
        <SectionReveal delay={60} scale style={{ marginTop: 96 }}>
          <div style={{ padding: "60px 64px", background: "rgba(255,255,255,0.03)", borderRadius: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(22px,2.8vw,32px)", lineHeight: 1.42, color: "rgba(255,255,255,0.75)", fontStyle: "italic", letterSpacing: "-0.01em" }}>
              &ldquo;Good design isn&apos;t finished when there&apos;s nothing left to add — it&apos;s finished when there&apos;s nothing left to take away.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 24 }}>That&apos;s what Pare is. That&apos;s what this project tried to be.</p>
          </div>
        </SectionReveal>

        {/* Footer */}
        <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 20, color: "rgba(255,255,255,0.2)", letterSpacing: "-0.03em" }}>Pare</span>
          <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Case Study · 2025</span>
        </div>

      </div>
    </section>
  );
}
