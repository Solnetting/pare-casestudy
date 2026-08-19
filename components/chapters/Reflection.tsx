import SectionReveal from "@/components/ui/SectionReveal";

const KEY_DECISIONS = [
  {
    n: "01",
    title: "Scoping Repeat, not forcing it",
    body: "The temptation was to make recurring purchase the default for all products. We scoped it to products where restocking is a real behaviour — everyday consumables — and kept one-time purchase clean and uncomplicating. This reduced scope and increased clarity.",
    changed: "Initially, Repeat messaging appeared on every product. It was removed from one-time items when it became clear the recurring frame added confusion, not value.",
  },
  {
    n: "02",
    title: "Search inside Products, not global",
    body: "A persistent search icon in the navigation bar felt conventional but wrong. Search is a browsing act, not a navigation act. Placing it inside the Products tab aligns the tool with the intent.",
    changed: "Early explorations had search in the app bar. User journey mapping revealed it created a disjointed flow — users searched, then found themselves without context.",
  },
  {
    n: "03",
    title: "Cart as a rest stop",
    body: "Most e-commerce carts remove 'continue shopping' in favour of aggressive checkout prompting. Pare's audience is deliberate. Giving them a clear off-ramp reduced the feeling of pressure and aligned with brand tone.",
    changed: "The first cart iteration had only a checkout button. Testing against competitor flows showed it felt transactional in a way that contradicted the brand.",
  },
  {
    n: "04",
    title: "Campaign without app-store buttons on physical assets",
    body: "The trade-show totem has a QR code, not an 'App Store' button. Physical assets at trade shows reach people who haven't decided anything yet. A QR to the web campaign is a lower-commitment entry point and doesn't presuppose device platform.",
    changed: "Early totem designs had both QR and app-store badges. Removing the badges simplified the asset and avoided prematurely asking for a high-commitment action.",
  },
];

const WHAT_WAS_CHALLENGED = [
  {
    challenge: "Is curation enough of a moat?",
    honest: "Probably not on its own. Curation is table-stakes if competitors copy it. The Repeat infrastructure and the curated brand relationships are harder to replicate than the product selection itself.",
  },
  {
    challenge: "Does the target user actually want a separate app?",
    honest: "Not validated. The hypothesis is that a focused experience outperforms general retail on satisfaction — but it may not outperform on discovery. This is the gap that needs research.",
  },
  {
    challenge: "Is the savings language honest?",
    honest: "The 10% Repeat saving was chosen as representative, not as a confirmed commercial figure. Final pricing would be set after supplier negotiations. The copy is directionally honest but needs financial modelling.",
  },
];

const NEXT_STEPS = [
  "Moderated usability sessions on the purchase-mode screen — the Repeat vs. one-time toggle is the highest-risk interaction.",
  "Supplier negotiation to set real Repeat margins, then update all pricing copy.",
  "Accessibility audit: colour contrast ratios for proof labels and muted text against cream and mint surfaces.",
  "Quantitative test: does showing annual saving (£10.80) convert better than monthly saving (£0.90/month) in the Repeat cue?",
  "Engineering handoff: finalise spacing tokens and confirm inter-app navigation behaviour with the dev team.",
];

export default function Reflection() {
  return (
    <section id="reflection" className="bg-pare-navy py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Chapter header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="chapter-label mb-3" style={{ color: "#4A6480" }}>06 — Reflection</p>
            <h2
              className="font-lora font-semibold text-white"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 580 }}
            >
              What changed, what was challenged, what comes next.
            </h2>
            <div className="mt-6 rounded-2xl border p-5" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
              <p className="font-inter text-white/70" style={{ fontSize: 14, lineHeight: 1.65 }}>
                <strong className="font-semibold text-white">Honest note on validation:</strong> All design decisions in this project were validated heuristically — competitor analysis, journey mapping, and design critique — rather than through formal usability studies or quantitative testing. The next phase of work is to test the assumptions that carry the most risk.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Key decisions */}
        <SectionReveal delay={60}>
          <div className="mb-16">
            <p className="font-inter font-semibold text-white/50 mb-8" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Key decisions + what changed
            </p>
            <div className="flex flex-col gap-5">
              {KEY_DECISIONS.map((d) => (
                <div
                  key={d.n}
                  className="rounded-2xl p-6 sm:p-8"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="flex-shrink-0 font-inter font-semibold"
                      style={{ fontSize: 12, color: "#2A9D8F", letterSpacing: "0.06em", marginTop: 3 }}
                    >
                      {d.n}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="font-inter font-semibold text-white"
                        style={{ fontSize: 16, marginBottom: 10 }}
                      >
                        {d.title}
                      </h3>
                      <p className="font-inter text-white/65" style={{ fontSize: 14, lineHeight: 1.65 }}>
                        {d.body}
                      </p>
                      <div
                        className="mt-5 flex items-start gap-3 rounded-xl p-4"
                        style={{ background: "rgba(42,157,143,0.12)", border: "1px solid rgba(42,157,143,0.2)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                          <path d="M2 7a5 5 0 009.9-1M12 3v3h-3" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <p className="font-inter text-white/60" style={{ fontSize: 13, lineHeight: 1.55 }}>
                          <span className="font-semibold text-white/80">What changed: </span>
                          {d.changed}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* What was challenged */}
        <SectionReveal delay={60}>
          <div className="mb-16">
            <p className="font-inter font-semibold text-white/50 mb-8" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              What was challenged
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {WHAT_WAS_CHALLENGED.map((c) => (
                <div
                  key={c.challenge}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-inter font-semibold text-white" style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 10 }}>
                    {c.challenge}
                  </p>
                  <p className="font-inter text-white/60" style={{ fontSize: 13, lineHeight: 1.65 }}>
                    {c.honest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* What's next */}
        <SectionReveal delay={80}>
          <div>
            <p className="font-inter font-semibold text-white/50 mb-8" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              What would be validated next
            </p>
            <div className="flex flex-col gap-3">
              {NEXT_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl px-6 py-4"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-inter font-semibold text-white"
                    style={{ background: "rgba(42,157,143,0.3)", fontSize: 11 }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-inter text-white/70" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 1 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing thought */}
            <div
              className="mt-12 rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="font-lora font-semibold italic text-white/80"
                style={{ fontSize: 24, lineHeight: 1.45, letterSpacing: "-0.01em" }}
              >
                &ldquo;Good design isn&apos;t finished when there&apos;s nothing left to add — it&apos;s finished when there&apos;s nothing left to take away.&rdquo;
              </p>
              <p className="mt-4 font-inter text-white/40" style={{ fontSize: 13 }}>
                That&apos;s what Pare is. That&apos;s what this project tried to be.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Footer */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="wordmark text-white/30" style={{ fontSize: 20, letterSpacing: "-0.04em" }}>Pare</span>
          <span className="font-inter text-white/30" style={{ fontSize: 12 }}>Case Study · 2025</span>
        </div>

      </div>
    </section>
  );
}
