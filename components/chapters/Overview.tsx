import SectionReveal from "@/components/ui/SectionReveal";

const MODEL_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Curated multi-brand retailer",
    body: "Pare doesn't manufacture anything. It selects and sells products from aligned brands, applying a consistent quality bar across categories. Revenue comes from retail margin, not platform ads.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Considered edit, not a catalogue",
    body: "Every product in the range was chosen to reduce decision fatigue. No duplicates, no quantity-over-quality. Fewer, better options — organised by how people actually shop.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Recurring purchase at the core",
    body: "Pare Repeat turns restocking into a subscription-like behaviour for qualifying products. It reduces friction and increases customer lifetime value without forcing a subscription model on everything.",
  },
];

const WHY_CARDS = [
  {
    q: "Why not a general marketplace?",
    a: "General marketplaces optimise for breadth and price. Pare optimises for trust and lower effort. The curation is the product.",
  },
  {
    q: "Why mobile-first?",
    a: "The target audience browses and buys on mobile. The app removes the friction of comparison-shopping across five tabs by doing the comparison work upfront.",
  },
  {
    q: "Why a recurring purchase mode?",
    a: "Everyday essentials run out on predictable cycles. Automating restocking reduces the tax on people's attention without requiring a full subscription lock-in.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-pare-canvas py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Chapter header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="chapter-label mb-3">01 — Overview</p>
            <h2
              className="font-lora font-semibold text-pare-navy"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 560 }}
            >
              What Pare is — and why it exists.
            </h2>
          </div>
        </SectionReveal>

        {/* Intro */}
        <SectionReveal delay={80}>
          <div
            className="mb-20 rounded-2xl border border-pare-border bg-pare-cream p-10"
          >
            <p
              className="font-lora text-pare-navy"
              style={{ fontSize: 24, lineHeight: 1.55, letterSpacing: "-0.01em", maxWidth: 640 }}
            >
              &ldquo;Pare&rdquo; means to reduce something to its essential form.
              It is the product hypothesis applied to the company name: we help
              people pare their habits down to what actually matters, one
              everyday essential at a time.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Positioning", "Curated lower-waste essentials retailer"],
                ["Mission", "Make sustainable choices the easy default"],
                ["Model", "Multi-brand retail + optional recurring purchase"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <span
                    className="font-inter text-pare-muted"
                    style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {k}
                  </span>
                  <span className="font-inter text-pare-navy" style={{ fontSize: 14, lineHeight: 1.5 }}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Business model cards */}
        <SectionReveal delay={120}>
          <p className="chapter-label mb-6">Business model</p>
          <div className="mb-20 grid gap-4 sm:grid-cols-3">
            {MODEL_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-pare-border bg-white p-6"
              >
                <div className="text-pare-teal">{card.icon}</div>
                <h3
                  className="font-inter font-semibold text-pare-navy"
                  style={{ fontSize: 16 }}
                >
                  {card.title}
                </h3>
                <p className="font-inter text-pare-subtle" style={{ fontSize: 14, lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Target user */}
        <SectionReveal delay={80}>
          <p className="chapter-label mb-6">Target user</p>
          <div className="mb-20 rounded-2xl border border-pare-border bg-pare-mint p-8 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3
                  className="font-lora font-semibold text-pare-navy"
                  style={{ fontSize: 24, letterSpacing: "-0.01em" }}
                >
                  Environmentally conscious adults,&nbsp;25–45
                </h3>
                <p className="mt-4 font-inter text-pare-subtle" style={{ fontSize: 15, lineHeight: 1.65 }}>
                  They already care about sustainability but find it genuinely hard to act on — products are scattered across too many stores, certifications are confusing, and greenwashing erodes trust. They want someone to have done the research for them.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  ["Pain", "Overwhelmed by choice, sceptical of claims"],
                  ["Goal", "Shop in line with values without extra effort"],
                  ["Behaviour", "Researches before buying, prefers subscriptions for basics"],
                  ["Context", "Urban, mobile-first, time-poor"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5">
                    <span
                      className="font-inter text-pare-teal"
                      style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      {k}
                    </span>
                    <span className="font-inter text-pare-navy" style={{ fontSize: 14, lineHeight: 1.5 }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Product hypothesis + Why Pare */}
        <div className="grid gap-6 sm:grid-cols-2 mb-20">
          <SectionReveal className="rounded-2xl border border-pare-border bg-white p-8">
            <p className="chapter-label mb-4">Product hypothesis</p>
            <p className="font-inter text-pare-navy" style={{ fontSize: 16, lineHeight: 1.65 }}>
              If we remove the research burden and reduce the friction of re-purchasing,
              people who already want to shop sustainably will shop that way more
              consistently — and feel better doing it.
            </p>
            <div className="mt-6 h-px bg-pare-border" />
            <p className="mt-6 font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.55 }}>
              Validated heuristically against competitor journeys and user
              interviews. Formal usability testing is the planned next step.
            </p>
          </SectionReveal>

          <div className="flex flex-col gap-4">
            {WHY_CARDS.map((card, i) => (
              <SectionReveal
                key={card.q}
                delay={i * 60}
                className="rounded-2xl border border-pare-border bg-white p-6"
              >
                <p
                  className="font-inter font-semibold text-pare-navy"
                  style={{ fontSize: 14, marginBottom: 8 }}
                >
                  {card.q}
                </p>
                <p className="font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.6 }}>
                  {card.a}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
