import SectionReveal from "@/components/ui/SectionReveal";

const T = {
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-muted)" },
  body:  { fontFamily: "var(--font-inter-var)", fontSize: 15, lineHeight: 1.7, color: "var(--color-subtle)" },
};

function QR({ size = 96 }: { size?: number }) {
  const c = size / 21;
  const p = [
    [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0],
    [0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1],
    [1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0],
    [0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1],
    [1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0],
    [1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1],
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect width={size} height={size} fill="white"/>
      {p.map((row, y) => row.map((b, x) => b ? <rect key={`${y}-${x}`} x={x*c} y={y*c} width={c} height={c} fill="#1B2B4B"/> : null))}
    </svg>
  );
}

/* ── Campaign hero ── */
function CampaignVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 440,
        background: "#F4EBD6",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Apricot blob */}
      <div style={{ position: "absolute", right: -60, top: -60, width: 500, height: 500, borderRadius: "50%", background: "#FAE5D3", opacity: 0.7 }}/>
      {/* Mint strip */}
      <div style={{ position: "absolute", left: 0, bottom: 80, width: 240, height: 6, background: "#E2F0EE" }}/>

      <div style={{ position: "relative", zIndex: 1, padding: "64px 72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2A9D8F" }}/>
          <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#8C9BAD", textTransform: "uppercase" }}>Spring 2025 · Campaign</span>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-lora-var)",
            fontWeight: 600,
            fontSize: "clamp(48px, 6vw, 80px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "#1B2B4B",
            maxWidth: 540,
          }}
        >
          The Home<br/>Reset.
        </h3>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 18, lineHeight: 1.6, color: "#6B7A8A", maxWidth: 400, marginTop: 24 }}>
          Every spring, people clear out what doesn&apos;t belong. Pare helps them replace what stays with better versions of itself.
        </p>
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 24 }}>
          <button style={{ background: "#2A9D8F", color: "white", border: "none", borderRadius: 6, padding: "12px 24px", fontFamily: "var(--font-inter-var)", fontSize: 14, fontWeight: 600, cursor: "default" }}>
            Shop the edit
          </button>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {["Save 10% with Repeat", "Free delivery on £40+", "B Corp brands"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2A9D8F", flexShrink: 0 }}/>
                <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "#6B7A8A" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Abstract product cluster */}
      <div style={{ position: "absolute", right: 80, top: "50%", transform: "translateY(-50%)" }}>
        <svg width="260" height="300" viewBox="0 0 260 300" fill="none">
          <rect x="20" y="20" width="100" height="140" rx="10" fill="white"/>
          <rect x="36" y="36" width="68" height="68" rx="7" fill="#F4EBD6"/>
          <rect x="44" y="116" width="52" height="5" rx="2.5" fill="#E2F0EE"/>
          <rect x="44" y="126" width="36" height="5" rx="2.5" fill="#FAE5D3"/>
          <rect x="138" y="40" width="96" height="104" rx="10" fill="white"/>
          <rect x="154" y="56" width="64" height="64" rx="7" fill="#E2F0EE"/>
          <rect x="154" y="130" width="44" height="5" rx="2.5" fill="#F4EBD6"/>
          <rect x="60" y="180" width="140" height="80" rx="10" fill="white"/>
          <rect x="76" y="196" width="52" height="48" rx="7" fill="#FAE5D3"/>
          <rect x="144" y="200" width="36" height="5" rx="2.5" fill="#E2F0EE"/>
          <rect x="144" y="212" width="26" height="5" rx="2.5" fill="#F4EBD6"/>
          <rect x="20" y="178" width="26" height="26" rx="6" fill="#E2F0EE" opacity="0.8"/>
        </svg>
      </div>
    </div>
  );
}

/* ── Totem ── */
function Totem() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div
        style={{
          width: 160,
          height: 440,
          background: "#1B2B4B",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(27,43,75,0.2), 0 2px 8px rgba(27,43,75,0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 16px 12px" }}>
          <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 18, color: "white", letterSpacing: "-0.03em" }}>Pare</span>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D8F" }}/>
        </div>
        <div style={{ flex: 1, margin: "0 8px", borderRadius: 6, background: "#F4EBD6", padding: "16px 14px" }}>
          <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 22, lineHeight: 1.15, color: "#1B2B4B", letterSpacing: "-0.02em" }}>The<br/>Home<br/>Reset.</p>
          <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 9.5, lineHeight: 1.5, color: "#6B7A8A", marginTop: 10 }}>Lower-waste everyday essentials. Curated, considered, restocked on your terms.</p>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 5 }}>
            {["#F4EBD6", "#E2F0EE", "#FAE5D3"].map((bg, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, background: "white", borderRadius: 5, padding: "5px 8px" }}>
                <div style={{ width: 24, height: 24, borderRadius: 4, background: bg, flexShrink: 0 }}/>
                <div>
                  <div style={{ height: 4, width: 40, background: "#E4DDD4", borderRadius: 2, marginBottom: 3 }}/>
                  <div style={{ height: 4, width: 28, background: "#E2F0EE", borderRadius: 2 }}/>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12 }}>
            {["Save 10% with Repeat", "Free delivery on £40+"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D8F", flexShrink: 0 }}/>
                <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 8.5, color: "#6B7A8A" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px" }}>
          <div style={{ background: "white", borderRadius: 5, padding: 4, flexShrink: 0 }}>
            <QR size={48}/>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 9.5, color: "white" }}>Scan to shop</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 8.5, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>pare.com/reset</p>
          </div>
        </div>
        <div style={{ padding: "0 12px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <div style={{ flex: 1, height: 1, background: "#2A9D8F", opacity: 0.4 }}/>
          <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 8, color: "rgba(255,255,255,0.3)" }}>pare.com</span>
          <div style={{ flex: 1, height: 1, background: "#2A9D8F", opacity: 0.4 }}/>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-navy)" }}>Trade-show totem</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>400 × 1800mm · QR is the only digital CTA</p>
      </div>
    </div>
  );
}

/* ── Meta Story ── */
function MetaStory() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div
        style={{
          width: 150,
          height: 266,
          background: "#FAE5D3",
          borderRadius: 14,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 20px rgba(27,43,75,0.12)",
        }}
      >
        <div style={{ position: "absolute", top: 8, left: 8, right: 8, display: "flex", gap: 3 }}>
          {[1, 0.35, 0.15].map((o, i) => <div key={i} style={{ flex: 1, height: 2, borderRadius: 1, background: `rgba(27,43,75,${o})` }}/>)}
        </div>
        <div style={{ position: "absolute", right: -30, bottom: 60, width: 110, height: 110, borderRadius: "50%", background: "#E2F0EE", opacity: 0.7 }}/>
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "20px 14px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#1B2B4B", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-lora-var)", fontSize: 8, fontWeight: 700, color: "white" }}>P</span>
            </div>
            <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 10, color: "#1B2B4B" }}>pare</span>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 22, lineHeight: 1.15, color: "#1B2B4B", letterSpacing: "-0.02em" }}>The Home<br/>Reset.</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 9.5, lineHeight: 1.5, color: "#6B7A8A", marginTop: 8 }}>Swap to lower-waste essentials this spring.</p>
            <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ background: "#2A9D8F", color: "white", fontSize: 9.5, fontWeight: 600, padding: "5px 10px", borderRadius: 5, fontFamily: "var(--font-inter-var)" }}>Shop the edit</span>
              <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 9.5, color: "#6B7A8A" }}>Save 10%</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, background: "rgba(27,43,75,0.06)", borderRadius: 6, padding: "6px 0" }}>
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M7 2l5 5-5 5M2 7h10" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 9, color: "#1B2B4B" }}>Swipe up to shop</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-navy)" }}>Meta Story</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>1080 × 1920px</p>
      </div>
    </div>
  );
}

/* ── LinkedIn Ad ── */
function LinkedInAd() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: "white",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(27,43,75,0.08)",
        }}
      >
        <div style={{ height: 180, background: "#F4EBD6", position: "relative", display: "flex", alignItems: "center", padding: "0 28px" }}>
          <div style={{ position: "absolute", right: -20, top: -20, width: 180, height: 180, borderRadius: "50%", background: "#FAE5D3", opacity: 0.7 }}/>
          <div style={{ position: "absolute", left: 20, bottom: 20, width: 80, height: 3, background: "#E2F0EE", borderRadius: 2 }}/>
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 28, lineHeight: 1.15, color: "#1B2B4B", letterSpacing: "-0.02em" }}>The Home Reset.</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, color: "#6B7A8A", marginTop: 6 }}>Shop the spring edit at Pare</p>
          </div>
          <span style={{ position: "absolute", right: 20, top: 16, fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 26, color: "#1B2B4B", opacity: 0.2, letterSpacing: "-0.04em" }}>Pare</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: "1px solid #F0EDE8" }}>
          <div>
            <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 13, color: "#1B2B4B" }}>pare.com/reset</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "#8C9BAD" }}>Lower-waste essentials, considered</p>
          </div>
          <button style={{ border: "1.5px solid #E4DDD4", borderRadius: 5, padding: "6px 14px", fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 12, color: "#1B2B4B", background: "transparent", cursor: "default" }}>
            Shop now
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-navy)" }}>LinkedIn ad</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>1200 × 627px · Single image</p>
      </div>
    </div>
  );
}

/* ── Catalogue cover ── */
function CatalogueCover() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div
        style={{
          width: 168,
          height: 237,
          background: "#FAF8F5",
          borderRadius: 6,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 20px rgba(27,43,75,0.12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 18px 16px",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 10, background: "#E2F0EE" }}/>
        <div style={{ position: "absolute", right: -24, top: 40, width: 80, height: 80, borderRadius: "50%", background: "#FAE5D3", opacity: 0.5 }}/>
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 16, color: "#1B2B4B", letterSpacing: "-0.03em" }}>Pare</span>
          <div style={{ marginTop: 4, width: 28, height: 2, background: "#2A9D8F", borderRadius: 1 }}/>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 20, lineHeight: 1.2, color: "#1B2B4B", letterSpacing: "-0.01em" }}>The Home<br/>Reset</p>
          <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 9, lineHeight: 1.55, color: "#6B7A8A", marginTop: 8 }}>A guide to lower-waste everyday essentials — and why better choices shouldn&apos;t be hard.</p>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ height: 1, background: "#E4DDD4", marginBottom: 8 }}/>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 8, color: "#8C9BAD" }}>Spring 2025</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 8, color: "#8C9BAD" }}>pare.com</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 500, color: "var(--color-navy)" }}>White-paper cover</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>A4 · PDF + print</p>
      </div>
    </div>
  );
}

const SYSTEM_RULES = [
  { label: "One headline", text: '"The Home Reset." — identical on every surface.' },
  { label: "Three surfaces", text: "Cream, apricot, and mint. Never all three at once." },
  { label: "Product on white", text: "Product imagery on white throughout. Editorial photography only for the hero." },
  { label: "Numeric savings", text: '"Save 10%" — always a number, never vague language.' },
  { label: "Proof signals", text: "Repeat savings, B Corp references, explicit certifications." },
  { label: "Type hierarchy", text: "Lora for the headline. Inter for everything else." },
];

export default function Campaign() {
  return (
    <section id="campaign" style={{ background: "var(--color-canvas)", padding: "120px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px" }}>

        <SectionReveal>
          <div className="chapter-rule">
            <span style={T.label}>05</span>
            <span style={T.label}>Campaign</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(40px,5vw,56px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--color-navy)", maxWidth: 580 }}>
            The Home Reset — one campaign, every surface.
          </h2>
          <p style={{ ...T.body, maxWidth: 480, marginTop: 20 }}>
            A spring campaign built around a single idea: people want to reset their homes, not their values. Pare makes it possible to do both at once.
          </p>
        </SectionReveal>

        {/* Hero visual */}
        <SectionReveal delay={60}>
          <div style={{ marginTop: 72 }}>
            <CampaignVisual />
          </div>
        </SectionReveal>

        {/* Campaign assets */}
        <SectionReveal delay={80}>
          <div style={{ marginTop: 80 }}>
            <p style={{ ...T.label, marginBottom: 48 }}>Campaign assets</p>
            <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
              <Totem />
              <MetaStory />
              <div style={{ display: "flex", flexDirection: "column", gap: 32, flex: 1, minWidth: 200 }}>
                <CatalogueCover />
                <LinkedInAd />
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* QR + System rules */}
        <SectionReveal delay={60}>
          <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ ...T.label, marginBottom: 24 }}>Campaign QR code</p>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <div style={{ background: "white", borderRadius: 8, padding: 8, flexShrink: 0 }}>
                  <QR size={88} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 14, color: "var(--color-navy)", marginBottom: 8 }}>pare.com/reset</p>
                  <p style={T.body}>The QR is the only digital CTA on physical assets. Scan and land on the campaign page — no app-store button, no typed URL.</p>
                </div>
              </div>
            </div>

            <div>
              <p style={{ ...T.label, marginBottom: 24 }}>System coherence</p>
              {SYSTEM_RULES.map((r, i) => (
                <div key={r.label} style={{ display: "flex", gap: 14, padding: "14px 0", borderTop: "1px solid var(--color-border)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2A9D8F", marginTop: 6, flexShrink: 0 }}/>
                  <div>
                    <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "var(--color-navy)" }}>{r.label} </span>
                    <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, color: "var(--color-subtle)", lineHeight: 1.55 }}>{r.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
