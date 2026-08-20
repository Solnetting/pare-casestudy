import SectionReveal from "@/components/ui/SectionReveal";

const L = (color = "var(--color-muted)") => ({
  fontFamily: "var(--font-inter-var)" as const,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color,
});

function QR({ size = 96 }: { size?: number }) {
  const c = size / 21;
  const p = [
    [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],[1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1],[1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0],[0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1],
    [1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0],[0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1],
    [1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1],[1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0],
    [1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1],[1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1],[1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1],
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect width={size} height={size} fill="white"/>
      {p.map((row, y) => row.map((b, x) => b ? <rect key={`${y}-${x}`} x={x*c} y={y*c} width={c} height={c} fill="#1B2B4B"/> : null))}
    </svg>
  );
}

function CampaignHero() {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: 520, background: "#F4EBD6", overflow: "hidden", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", right: -100, top: -100, width: 640, height: 640, borderRadius: "50%", background: "#FAE5D3", opacity: 0.8 }}/>
      <div style={{ position: "absolute", left: 0, bottom: 100, width: 300, height: 6, background: "#E2F0EE" }}/>
      <div style={{ position: "relative", zIndex: 1, padding: "80px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2A9D8F" }}/>
          <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "#8C9BAD", textTransform: "uppercase" }}>Spring 2026</span>
        </div>
        <h3 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(56px, 7.5vw, 100px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: "#1B2B4B", maxWidth: 560 }}>
          The<br/>Home<br/>Reset.
        </h3>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 17, lineHeight: 1.65, color: "#6B7A8A", maxWidth: 380, marginTop: 32 }}>
          Every spring, people clear out what doesn&apos;t belong. Pare helps them replace what stays with better versions of itself.
        </p>
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 32 }}>
          <button style={{ background: "#2A9D8F", color: "white", border: "none", borderRadius: 5, padding: "14px 28px", fontFamily: "var(--font-inter-var)", fontSize: 13, fontWeight: 600, cursor: "default" }}>Shop the edit</button>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Save 10% with Repeat", "Free delivery on £40+"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D8F" }}/>
                <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "#6B7A8A" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product cluster */}
      <div style={{ position: "absolute", right: 80, top: "50%", transform: "translateY(-50%)", opacity: 0.9 }}>
        <svg width="300" height="340" viewBox="0 0 300 340" fill="none">
          <rect x="20" y="20" width="120" height="160" rx="8" fill="white" opacity="0.95"/>
          <rect x="38" y="38" width="84" height="84" rx="6" fill="#F4EBD6"/>
          <rect x="46" y="134" width="64" height="5" rx="2" fill="#E2F0EE"/>
          <rect x="46" y="146" width="44" height="5" rx="2" fill="#FAE5D3"/>
          <rect x="158" y="40" width="114" height="120" rx="8" fill="white" opacity="0.95"/>
          <rect x="176" y="58" width="78" height="78" rx="6" fill="#E2F0EE"/>
          <rect x="176" y="148" width="52" height="5" rx="2" fill="#F4EBD6"/>
          <rect x="60" y="208" width="180" height="100" rx="8" fill="white" opacity="0.95"/>
          <rect x="78" y="226" width="68" height="64" rx="6" fill="#FAE5D3"/>
          <rect x="162" y="230" width="48" height="5" rx="2" fill="#E2F0EE"/>
          <rect x="162" y="244" width="34" height="5" rx="2" fill="#F4EBD6"/>
        </svg>
      </div>
    </div>
  );
}

function Totem() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ width: 160, height: 440, background: "#1B2B4B", borderRadius: 6, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 8px 40px rgba(27,43,75,0.22)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 16px 12px" }}>
          <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 18, color: "white", letterSpacing: "-0.03em" }}>Pare</span>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D8F" }}/>
        </div>
        <div style={{ flex: 1, margin: "0 8px", borderRadius: 5, background: "#F4EBD6", padding: "14px" }}>
          <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 22, lineHeight: 1.15, color: "#1B2B4B", letterSpacing: "-0.02em" }}>The<br/>Home<br/>Reset.</p>
          <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 9.5, lineHeight: 1.5, color: "#6B7A8A", marginTop: 10 }}>Lower-waste everyday essentials. Curated, considered, restocked on your terms.</p>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
            {["#F4EBD6", "#E2F0EE", "#FAE5D3"].map((bg, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, background: "white", borderRadius: 4, padding: "4px 7px" }}>
                <div style={{ width: 22, height: 22, borderRadius: 3, background: bg, flexShrink: 0 }}/>
                <div>
                  <div style={{ height: 4, width: 38, background: "#E4DDD4", borderRadius: 2, marginBottom: 2 }}/>
                  <div style={{ height: 4, width: 26, background: "#E2F0EE", borderRadius: 2 }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px" }}>
          <div style={{ background: "white", borderRadius: 4, padding: 4 }}><QR size={44}/></div>
          <div>
            <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 9.5, color: "white" }}>Scan to shop</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 8.5, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>pare.com/reset</p>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>Trade-show totem</p>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)" }}>400 × 1800mm</p>
    </div>
  );
}

function MetaStory() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ width: 160, height: 284, background: "#FAE5D3", borderRadius: 12, overflow: "hidden", position: "relative", boxShadow: "0 4px 24px rgba(27,43,75,0.12)" }}>
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
            <div style={{ marginTop: 10 }}>
              <span style={{ background: "#2A9D8F", color: "white", fontSize: 9.5, fontWeight: 600, padding: "5px 10px", borderRadius: 4, fontFamily: "var(--font-inter-var)" }}>Shop the edit</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, background: "rgba(27,43,75,0.06)", borderRadius: 5, padding: "6px 0" }}>
            <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 500, fontSize: 9, color: "#1B2B4B" }}>Swipe up to shop</span>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>Meta Story</p>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)" }}>1080 × 1920px</p>
    </div>
  );
}

function LinkedInAd1x1() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/linkedin-ad-1x1.png"
        alt="LinkedIn 1:1 ad"
        style={{ width: 300, height: 300, objectFit: "cover", borderRadius: 6, display: "block", boxShadow: "0 8px 40px rgba(27,43,75,0.14), 0 2px 8px rgba(27,43,75,0.06)" }}
      />
      <div>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>LinkedIn — 1:1</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>1200 × 1200px</p>
      </div>
    </div>
  );
}

function LinkedInAd9x16() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/linkedin-ad-9x16.png"
        alt="LinkedIn 9:16 ad"
        style={{ width: 169, height: 300, objectFit: "cover", borderRadius: 6, display: "block", boxShadow: "0 8px 40px rgba(27,43,75,0.14), 0 2px 8px rgba(27,43,75,0.06)" }}
      />
      <div>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>LinkedIn — 9:16</p>
        <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>1080 × 1920px</p>
      </div>
    </div>
  );
}

function CatalogueCover() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ width: 160, height: 226, background: "#FAF8F5", borderRadius: 5, overflow: "hidden", position: "relative", boxShadow: "0 4px 20px rgba(27,43,75,0.12)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "18px 16px 14px" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 8, background: "#E2F0EE" }}/>
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 15, color: "#1B2B4B", letterSpacing: "-0.03em" }}>Pare</span>
          <div style={{ marginTop: 4, width: 24, height: 2, background: "#2A9D8F" }}/>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: 18, lineHeight: 1.2, color: "#1B2B4B", letterSpacing: "-0.01em" }}>The Home<br/>Reset</p>
          <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 8.5, lineHeight: 1.55, color: "#6B7A8A", marginTop: 8 }}>A guide to lower-waste everyday essentials.</p>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ height: 1, background: "#E4DDD4", marginBottom: 7 }}/>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 7.5, color: "#8C9BAD" }}>Spring 2026</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 7.5, color: "#8C9BAD" }}>pare.com</p>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>White-paper cover</p>
      <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)" }}>A4 · PDF + print</p>
    </div>
  );
}

const SYSTEM_RULES = [
  { label: "One headline",    text: '"The Home Reset." — identical on every surface.' },
  { label: "Three surfaces",  text: "Cream, apricot, and mint. Never all three at once." },
  { label: "Product on white",text: "Product imagery on white throughout. Editorial photography only for the hero." },
  { label: "Numeric savings", text: '"Save 10%" — always a number, never vague language.' },
  { label: "Proof signals",   text: "Repeat savings, B Corp references, explicit certifications." },
  { label: "Type hierarchy",  text: "Lora for the headline. Inter for everything else." },
];

export default function Campaign() {
  return (
    <section id="campaign" style={{ background: "var(--color-canvas)" }}>

      {/* ── Chapter header ── */}
      <div style={{ borderTop: "1px solid var(--color-border)", padding: "48px 80px 0" }}>
        <SectionReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 20, paddingBottom: 48, borderBottom: "1px solid var(--color-border)" }}>
            <span style={L("var(--color-teal)")}>05</span>
            <div style={{ flex: 1, height: 1, background: "var(--color-border)" }}/>
            <span style={L()}>Campaign</span>
          </div>
        </SectionReveal>
      </div>

      {/* ── Headline + brief ── */}
      <div style={{ padding: "72px 80px 0" }}>
        <SectionReveal>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(52px, 7vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "var(--color-navy)", maxWidth: "85%" }}>
            The Home Reset —<br/>one idea, every surface.
          </h2>
        </SectionReveal>
        <SectionReveal delay={80}>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", borderTop: "1px solid var(--color-border)", paddingTop: 32 }}>
            <p style={L()}>Campaign strategy</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 16, lineHeight: 1.75, color: "var(--color-subtle)", maxWidth: 520 }}>
              People want to reset their homes, not their values. Pare makes it possible to do both at once — one consistent creative idea, deployed across every consumer touchpoint.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* ── Campaign hero — edge to edge ── */}
      <SectionReveal delay={60} style={{ marginTop: 72 }}>
        <CampaignHero />
      </SectionReveal>

      {/* ── Assets ── */}
      <div style={{ padding: "96px 80px 0" }}>
        <SectionReveal>
          <p style={{ ...L(), marginBottom: 64 }}>Campaign assets</p>
        </SectionReveal>
        <div style={{ display: "flex", gap: 64, alignItems: "flex-start", flexWrap: "wrap" }}>
          <SectionReveal from="left"><Totem/></SectionReveal>
          <SectionReveal from="bottom" delay={80}><MetaStory/></SectionReveal>
          <SectionReveal from="right" delay={120}><CatalogueCover/></SectionReveal>
          <SectionReveal from="right" delay={160}><LinkedInAd1x1/></SectionReveal>
          <SectionReveal from="right" delay={200}><LinkedInAd9x16/></SectionReveal>
        </div>
      </div>

      {/* ── Kakemono posters ── */}
      <div style={{ padding: "96px 0 0" }}>
        <SectionReveal>
          <div style={{ padding: "0 80px", marginBottom: 48 }}>
            <p style={{ ...L(), marginBottom: 12 }}>Kakemono posters</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.65, color: "var(--color-subtle)", maxWidth: 480 }}>
              Five colourway variations for in-store and event display. Same message, adapted for each environment.
            </p>
          </div>
        </SectionReveal>
        <div
          className="flow-scroll"
          style={{ display: "flex", gap: 16, paddingLeft: 80, paddingRight: 80, paddingBottom: 8 }}
        >
          {[
            { src: "/kakemono-1.png", label: "Terracotta split" },
            { src: "/kakemono-2.png", label: "Warm oat" },
            { src: "/kakemono-3.png", label: "Warm terracotta" },
            { src: "/kakemono-4.png", label: "Teal-led" },
            { src: "/kakemono-5.png", label: "Navy — arch" },
            { src: "/kakemono-6.png", label: "Navy — full" },
          ].map((p, i) => (
            <div key={i} style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.label}
                style={{
                  height: 580,
                  width: "auto",
                  borderRadius: 6,
                  display: "block",
                  boxShadow: "0 12px 48px rgba(27,43,75,0.16), 0 2px 8px rgba(27,43,75,0.06)",
                }}
              />
              <div>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>{p.label}</p>
                <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>600 × 1800mm</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── In the wild ── */}
      <div style={{ padding: "72px 0 0" }}>
        <SectionReveal>
          <div style={{ padding: "0 80px", marginBottom: 48 }}>
            <p style={{ ...L(), marginBottom: 12 }}>In the wild</p>
            <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.65, color: "var(--color-subtle)", maxWidth: 480 }}>
              Real-world deployment — the same artwork on the street, in context.
            </p>
          </div>
        </SectionReveal>
        <div
          className="flow-scroll"
          style={{ display: "flex", gap: 16, paddingLeft: 80, paddingRight: 80, paddingBottom: 8 }}
        >
          {[
            { src: "/kakemono-irl-1.png", label: "Street — shopping district" },
            { src: "/kakemono-irl-2.png", label: "Interior — hotel lobby" },
            { src: "/kakemono-irl-3.png", label: "Interior — exhibition fair" },
            { src: "/kakemono-irl-4.png", label: "Interior — gallery" },
          ].map((p, i) => (
            <div key={i} style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.label}
                style={{
                  height: 560,
                  width: "auto",
                  borderRadius: 6,
                  display: "block",
                  boxShadow: "0 12px 48px rgba(27,43,75,0.16), 0 2px 8px rgba(27,43,75,0.06)",
                }}
              />
              <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 12, fontWeight: 500, color: "var(--color-navy)" }}>{p.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── QR + System rules ── */}
      <div style={{ padding: "96px 80px 140px" }}>
        <SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", borderTop: "1px solid var(--color-border)", paddingTop: 64 }}>
            <div>
              <p style={{ ...L(), marginBottom: 24 }}>Campaign QR</p>
              <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <div style={{ background: "white", padding: 8, flexShrink: 0, border: "1px solid var(--color-border)" }}><QR size={84}/></div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 14, color: "var(--color-navy)", marginBottom: 8 }}>pare.com/reset</p>
                  <p style={{ fontFamily: "var(--font-inter-var)", fontSize: 14, lineHeight: 1.7, color: "var(--color-subtle)" }}>The QR is the only digital CTA on physical assets. Scan and land — no app-store button, no typed URL.</p>
                </div>
              </div>
            </div>
            <div>
              <p style={{ ...L(), marginBottom: 24 }}>System coherence</p>
              {SYSTEM_RULES.map((r) => (
                <div key={r.label} style={{ display: "flex", gap: 16, padding: "14px 0", borderTop: "1px solid var(--color-border)" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D8F", marginTop: 7, flexShrink: 0 }}/>
                  <div>
                    <span style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)" }}>{r.label} </span>
                    <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 13, color: "var(--color-subtle)", lineHeight: 1.6 }}>{r.text}</span>
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
