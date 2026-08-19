import PhoneFrame from "@/components/ui/PhoneFrame";
import SectionReveal from "@/components/ui/SectionReveal";

const T = {
  body:  { fontFamily: "var(--font-inter-var)", fontSize: 16, lineHeight: 1.7, color: "var(--color-subtle)" } as React.CSSProperties,
  label: { fontFamily: "var(--font-inter-var)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-muted)" },
};

function Nav({ active = "home" }: { active?: "home"|"products"|"bag"|"profile" }) {
  const tabs = [
    { id: "home",     icon: "M3 9l4-4 4 4 4-4v12H7V13H4v5H1V9z",                                                                        label: "Home" },
    { id: "products", icon: "M4 6h10M4 10h10M4 14h6",                                                                                    label: "Products" },
    { id: "bag",      icon: "M6 2 3.5 6v11a1 1 0 001 1h9a1 1 0 001-1V6L12 2zM3.5 6h11M9 11a2 2 0 100-4 2 2 0 000 4z",                  label: "Bag" },
    { id: "profile",  icon: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 19a6 6 0 0112 0",                                                          label: "Profile" },
  ];
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", borderTop: "1px solid #F0EDE8", background: "white", height: 50, paddingBottom: 4 }}>
      {tabs.map(t => (
        <div key={t.id} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={active === t.id ? "#2A9D8F" : "#B8C3D0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <path d={t.icon}/>
          </svg>
          <span style={{ fontSize: 7.5, fontFamily: "var(--font-inter-var)", color: active === t.id ? "#2A9D8F" : "#B8C3D0", fontWeight: active === t.id ? 500 : 400 }}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

function HomeScreen() {
  return (
    <div style={{ height: "100%", background: "white" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 14px 8px" }}>
        <span style={{ fontFamily: "var(--font-lora-var)", fontSize: 15, fontWeight: 600, color: "#1B2B4B", letterSpacing: "-0.02em" }}>Pare</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"/></svg>
      </div>
      <div style={{ margin: "0 10px", borderRadius: 12, background: "#F4EBD6", padding: "14px" }}>
        <p style={{ fontSize: 7, fontFamily: "var(--font-inter-var)", color: "#8C9BAD", textTransform: "uppercase", letterSpacing: "0.08em" }}>Spring campaign</p>
        <p style={{ fontSize: 13, fontFamily: "var(--font-lora-var)", fontWeight: 600, color: "#1B2B4B", lineHeight: 1.2, marginTop: 3 }}>The Home Reset</p>
        <div style={{ marginTop: 8, display: "inline-block", background: "#2A9D8F", borderRadius: 4, padding: "4px 10px" }}>
          <span style={{ fontSize: 8, color: "white", fontWeight: 600, fontFamily: "var(--font-inter-var)" }}>Explore</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, padding: "10px 10px 0", overflowX: "hidden" }}>
        {["Kitchen", "Bathroom", "Living", "Care"].map((c, i) => (
          <span key={c} style={{ flexShrink: 0, background: i === 0 ? "#1B2B4B" : "#F4EBD6", color: i === 0 ? "white" : "#1B2B4B", fontSize: 8, fontWeight: 500, padding: "4px 10px", borderRadius: 4 }}>{c}</span>
        ))}
      </div>
      <p style={{ fontSize: 8, fontWeight: 500, color: "#8C9BAD", textTransform: "uppercase", letterSpacing: "0.08em", padding: "10px 10px 6px" }}>Essentials</p>
      <div style={{ display: "flex", gap: 6, padding: "0 10px", overflowX: "hidden" }}>
        {[{ n: "Dish Soap", p: "£8.99", r: true, bg: "#F4EBD6" }, { n: "Towels", p: "£14.99", r: false, bg: "#E2F0EE" }, { n: "Laundry", p: "£11.99", r: true, bg: "#FAE5D3" }].map(item => (
          <div key={item.n} style={{ flexShrink: 0, width: 68, borderRadius: 8, border: "1px solid #F0EDE8", padding: 6 }}>
            <div style={{ height: 44, borderRadius: 6, background: item.bg, marginBottom: 5 }}/>
            <p style={{ fontSize: 8, fontWeight: 600, color: "#1B2B4B", lineHeight: 1.2 }}>{item.n}</p>
            <p style={{ fontSize: 9, color: "#2A9D8F", fontWeight: 700 }}>{item.p}</p>
            {item.r && <span style={{ fontSize: 7, color: "#2A9D8F", fontWeight: 600, background: "#E2F0EE", padding: "1px 5px", borderRadius: 3 }}>Repeat</span>}
          </div>
        ))}
      </div>
      <Nav active="home"/>
    </div>
  );
}

function CategoryScreen() {
  return (
    <div style={{ height: "100%", background: "white" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 14px 8px" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        <span style={{ fontSize: 13, fontFamily: "var(--font-lora-var)", fontWeight: 600, color: "#1B2B4B" }}>Kitchen</span>
      </div>
      <div style={{ display: "flex", gap: 5, padding: "0 10px 8px" }}>
        {["All", "Cleaning", "Storage"].map((c, i) => (
          <span key={c} style={{ background: i === 0 ? "#2A9D8F" : "#F4EBD6", color: i === 0 ? "white" : "#1B2B4B", fontSize: 7.5, fontWeight: 500, padding: "4px 10px", borderRadius: 4 }}>{c}</span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, padding: "0 10px" }}>
        {[{ n: "Dish Soap Refillable", p: "£8.99", r: true, bg: "#F4EBD6" }, { n: "Glass Spray Bottle", p: "£12.99", r: false, bg: "#E2F0EE" }, { n: "Laundry Sheets", p: "£11.99", r: true, bg: "#FAE5D3" }, { n: "Beeswax Wrap", p: "£9.99", r: false, bg: "#F4EBD6" }].map(item => (
          <div key={item.n} style={{ borderRadius: 8, border: "1px solid #F0EDE8", padding: 8 }}>
            <div style={{ height: 52, borderRadius: 6, background: item.bg, marginBottom: 6 }}/>
            <p style={{ fontSize: 8.5, fontWeight: 600, color: "#1B2B4B", lineHeight: 1.2, marginBottom: 3 }}>{item.n}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: 10, color: "#2A9D8F", fontWeight: 700 }}>{item.p}</p>
              {item.r && <span style={{ fontSize: 7, color: "#2A9D8F", fontWeight: 600, background: "#E2F0EE", padding: "1px 5px", borderRadius: 3 }}>Repeat</span>}
            </div>
          </div>
        ))}
      </div>
      <Nav active="products"/>
    </div>
  );
}

function ProductsScreen() {
  return (
    <div style={{ height: "100%", background: "white" }}>
      <div style={{ padding: "4px 10px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#F8F6F2", borderRadius: 8, padding: "8px 12px" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8C9BAD" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 10, color: "#8C9BAD", fontFamily: "var(--font-inter-var)" }}>Search products…</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 5, padding: "0 10px 8px", overflowX: "hidden" }}>
        {["All", "Kitchen", "Bath", "Living"].map((c, i) => (
          <span key={c} style={{ flexShrink: 0, background: i === 0 ? "#1B2B4B" : "transparent", color: i === 0 ? "white" : "#1B2B4B", fontSize: 7.5, fontWeight: 500, padding: "4px 10px", borderRadius: 4, border: i !== 0 ? "1px solid #E4DDD4" : "none" }}>{c}</span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, padding: "0 10px" }}>
        {[{ n: "Dish Soap", p: "£8.99", r: true, bg: "#F4EBD6" }, { n: "Laundry Sheets", p: "£11.99", r: true, bg: "#E2F0EE" }, { n: "Glass Bottle", p: "£12.99", r: false, bg: "#FAE5D3" }, { n: "Bamboo Towels", p: "£14.99", r: false, bg: "#F4EBD6" }].map(item => (
          <div key={item.n} style={{ borderRadius: 8, border: "1px solid #F0EDE8", padding: 8 }}>
            <div style={{ height: 52, borderRadius: 6, background: item.bg, marginBottom: 6 }}/>
            <p style={{ fontSize: 8.5, fontWeight: 600, color: "#1B2B4B", lineHeight: 1.2, marginBottom: 3 }}>{item.n}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: 10, color: "#2A9D8F", fontWeight: 700 }}>{item.p}</p>
              {item.r && <span style={{ fontSize: 7, color: "#2A9D8F", fontWeight: 600, background: "#E2F0EE", padding: "1px 5px", borderRadius: 3 }}>Repeat</span>}
            </div>
          </div>
        ))}
      </div>
      <Nav active="products"/>
    </div>
  );
}

function DetailScreen() {
  return (
    <div style={{ height: "100%", background: "white" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 14px 8px" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        <span style={{ fontSize: 10, color: "#8C9BAD", fontFamily: "var(--font-inter-var)" }}>Kitchen</span>
      </div>
      <div style={{ margin: "0 10px", height: 100, borderRadius: 8, background: "#F4EBD6", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 40, height: 40, borderRadius: 6, background: "white" }}/>
      </div>
      <div style={{ padding: "12px 14px 0" }}>
        <p style={{ fontSize: 13, fontFamily: "var(--font-lora-var)", fontWeight: 600, color: "#1B2B4B" }}>Refillable Dish Soap</p>
        <p style={{ fontSize: 9, color: "#8C9BAD", marginTop: 2 }}>500ml · Concentrated formula</p>
        <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
          {["Refillable", "B Corp", "Vegan"].map(l => (
            <span key={l} style={{ fontSize: 7.5, color: "#2A9D8F", fontWeight: 500, background: "#E2F0EE", padding: "2px 7px", borderRadius: 3 }}>{l}</span>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #F0EDE8", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#1B2B4B" }}>£8.99</p>
            <p style={{ fontSize: 8, color: "#8C9BAD" }}>One-time</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#2A9D8F" }}>£8.09</p>
            <p style={{ fontSize: 8, color: "#8C9BAD" }}>Every 30 days · save 10%</p>
          </div>
        </div>
      </div>
      <Nav active="products"/>
    </div>
  );
}

function PurchaseScreen() {
  return (
    <div style={{ height: "100%", background: "white" }}>
      <div style={{ padding: "4px 14px 10px" }}>
        <p style={{ fontSize: 12, fontFamily: "var(--font-lora-var)", fontWeight: 600, color: "#1B2B4B" }}>Refillable Dish Soap</p>
        <p style={{ fontSize: 9, color: "#8C9BAD" }}>Choose how you buy</p>
      </div>
      <div style={{ margin: "0 10px", display: "flex", background: "#F8F6F2", borderRadius: 6, padding: 2 }}>
        <button style={{ flex: 1, borderRadius: 4, padding: "6px 0", fontSize: 9, fontWeight: 400, color: "#8C9BAD", background: "transparent", border: "none" }}>One-time</button>
        <button style={{ flex: 1, borderRadius: 4, padding: "6px 0", fontSize: 9, fontWeight: 600, color: "white", background: "#1B2B4B", border: "none" }}>Repeat</button>
      </div>
      <div style={{ margin: "10px 10px 0", borderRadius: 8, background: "#E2F0EE", padding: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#2A9D8F" }}>£8.09</p>
            <p style={{ fontSize: 8, color: "#6B7A8A" }}>per delivery</p>
          </div>
          <span style={{ background: "#2A9D8F", color: "white", fontSize: 8, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>Save 10%</span>
        </div>
        <div style={{ borderTop: "1px solid rgba(42,157,143,0.2)", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: 9, color: "#6B7A8A" }}>Frequency</p>
          <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>Every 30 days</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <p style={{ fontSize: 9, color: "#6B7A8A" }}>Annual saving</p>
          <p style={{ fontSize: 9, fontWeight: 600, color: "#2A9D8F" }}>~£10.80</p>
        </div>
      </div>
      <div style={{ margin: "10px 10px 0" }}>
        <button style={{ width: "100%", borderRadius: 6, padding: "10px 0", background: "#2A9D8F", border: "none", color: "white", fontSize: 11, fontWeight: 600, fontFamily: "var(--font-inter-var)" }}>Add to repeat order</button>
      </div>
      <Nav active="products"/>
    </div>
  );
}

function CartScreen() {
  return (
    <div style={{ height: "100%", background: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 14px 10px" }}>
        <p style={{ fontSize: 13, fontFamily: "var(--font-lora-var)", fontWeight: 600, color: "#1B2B4B" }}>Your Bag</p>
        <span style={{ fontSize: 10, color: "#8C9BAD" }}>3 items</span>
      </div>
      <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        {[{ n: "Dish Soap Refillable", p: "£8.09", r: true }, { n: "Bamboo Hand Towels", p: "£14.99", r: false }, { n: "Laundry Sheets ×2", p: "£23.98", r: true }].map(item => (
          <div key={item.n} style={{ display: "flex", gap: 8, borderRadius: 8, border: "1px solid #F0EDE8", padding: 8, alignItems: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: 6, background: "#F8F6F2", flexShrink: 0 }}/>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B", lineHeight: 1.2 }}>{item.n}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: "#2A9D8F" }}>{item.p}</p>
                {item.r && <span style={{ fontSize: 7, color: "#2A9D8F", fontWeight: 600, background: "#E2F0EE", padding: "1px 5px", borderRadius: 3 }}>Repeat</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 14px 0", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, color: "#2A9D8F", fontWeight: 500, textDecoration: "underline" }}>Continue shopping</span>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#1B2B4B" }}>£47.06</span>
      </div>
      <div style={{ margin: "8px 10px 0" }}>
        <button style={{ width: "100%", borderRadius: 6, padding: "10px 0", background: "#2A9D8F", border: "none", color: "white", fontSize: 11, fontWeight: 600, fontFamily: "var(--font-inter-var)" }}>Checkout</button>
      </div>
      <Nav active="bag"/>
    </div>
  );
}

function CheckoutScreen() {
  return (
    <div style={{ height: "100%", background: "white", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "4px 14px 10px", borderBottom: "1px solid #F0EDE8" }}>
        <p style={{ fontSize: 13, fontFamily: "var(--font-lora-var)", fontWeight: 600, color: "#1B2B4B" }}>Checkout</p>
      </div>
      <div style={{ flex: 1, padding: "10px 10px 0", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ background: "#F8F6F2", borderRadius: 8, padding: 10 }}>
          <p style={{ fontSize: 8, fontWeight: 500, color: "#8C9BAD", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Order</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ fontSize: 9, color: "#6B7A8A" }}>3 items</p><p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>£47.06</p></div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}><p style={{ fontSize: 9, color: "#2A9D8F" }}>Repeat saving</p><p style={{ fontSize: 9, fontWeight: 600, color: "#2A9D8F" }}>−£2.12</p></div>
          <div style={{ borderTop: "1px solid #E4DDD4", marginTop: 6, paddingTop: 6, display: "flex", justifyContent: "space-between" }}><p style={{ fontSize: 10, fontWeight: 700, color: "#1B2B4B" }}>Total</p><p style={{ fontSize: 10, fontWeight: 700, color: "#1B2B4B" }}>£44.94</p></div>
        </div>
        <div style={{ borderRadius: 8, border: "1px solid #F0EDE8", padding: 10 }}>
          <p style={{ fontSize: 8, fontWeight: 500, color: "#8C9BAD", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Delivery</p>
          <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>Alex Turner</p>
          <p style={{ fontSize: 9, color: "#8C9BAD" }}>12 Grove Street, London</p>
        </div>
        <div style={{ borderRadius: 8, border: "1px solid #F0EDE8", padding: 10, display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ height: 20, width: 32, borderRadius: 3, background: "#E4DDD4", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 7, fontWeight: 700, color: "#6B7A8A" }}>VISA</span>
          </div>
          <p style={{ fontSize: 9, color: "#1B2B4B" }}>•••• 4242</p>
        </div>
      </div>
      <div style={{ padding: "8px 10px 10px" }}>
        <button style={{ width: "100%", borderRadius: 6, padding: "10px 0", background: "#2A9D8F", border: "none", color: "white", fontSize: 11, fontWeight: 600, fontFamily: "var(--font-inter-var)" }}>Place order · £44.94</button>
      </div>
    </div>
  );
}

const DECISIONS = [
  { label: "Search lives in Products, not the global bar", body: "Search is a browsing act, not a navigation act. Scoping it to Products aligns the entry point with the intent and removes a redundant persistent element from the nav." },
  { label: "Repeat only where it makes sense",            body: "One-time products never show Repeat messaging. Adding the mental model only when it applies reduces noise and prevents false expectations." },
  { label: "Cart keeps 'Continue shopping' visible",      body: "Removing the exit from a cart puts pressure on users. Pare's audience is deliberate — giving them an easy off-ramp respects their pace and reinforces brand tone." },
  { label: "Four tabs, nothing hidden",                   body: "Home, Products, Bag, Profile. Every primary journey in one tap. Replacing 'More' with Profile keeps navigation explicit and predictable." },
];

export default function Product() {
  const SCREENS: { label: string; screen: React.ReactNode }[] = [
    { label: "Home",           screen: <HomeScreen /> },
    { label: "Category",       screen: <CategoryScreen /> },
    { label: "Products",       screen: <ProductsScreen /> },
    { label: "Product detail", screen: <DetailScreen /> },
    { label: "Purchase mode",  screen: <PurchaseScreen /> },
    { label: "Cart",           screen: <CartScreen /> },
    { label: "Checkout",       screen: <CheckoutScreen /> },
  ];

  return (
    <section id="product" className="section-card" style={{ background: "white", padding: "128px 0 140px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 56px", position: "relative" }}>

        {/* Decorative number */}
        <div aria-hidden style={{ position: "absolute", left: -40, top: -80, fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "28vw", lineHeight: 1, color: "var(--color-navy)", opacity: 0.025, pointerEvents: "none", userSelect: "none" }}>02</div>

        <SectionReveal from="left">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <span style={T.label}>02</span>
            <div style={{ flex: 1, height: 1, background: "var(--color-border)" }}/>
            <span style={T.label}>Product</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-lora-var)", fontWeight: 600, fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "var(--color-navy)", maxWidth: 640, marginBottom: 24 }}>
            The app, as one connected flow.
          </h2>
        </SectionReveal>

        <SectionReveal delay={140}>
          <p style={{ ...T.body, maxWidth: 480, marginBottom: 0 }}>
            Every screen from the editorial home feed through to the order placed. No dead ends, no orphaned states.
          </p>
        </SectionReveal>
      </div>

      {/* Full-width phone flow */}
      <SectionReveal delay={60} style={{ marginTop: 80 }}>
        <div className="flow-scroll" style={{ paddingLeft: 56, paddingRight: 56 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", minWidth: "max-content", paddingBottom: 8 }}>
            {SCREENS.map((s, i) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <PhoneFrame label={s.label}>{s.screen}</PhoneFrame>
                {i < SCREENS.length - 1 && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: -80, flexShrink: 0 }}>
                    <path d="M4 10h12M10 5l7 5-7 5" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Key decisions */}
      <div style={{ maxWidth: 960, margin: "100px auto 0", padding: "0 56px" }}>
        <SectionReveal from="left">
          <p style={{ ...T.label, marginBottom: 40 }}>Key decisions</p>
        </SectionReveal>
        {DECISIONS.map((d, i) => (
          <SectionReveal key={d.label} delay={i * 80} from="bottom">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px 64px", padding: "32px 0", borderTop: "1px solid var(--color-border)", alignItems: "start" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 11, color: "var(--color-teal)", paddingTop: 2 }}>0{i + 1}</span>
                <p style={{ fontFamily: "var(--font-inter-var)", fontWeight: 600, fontSize: 16, color: "var(--color-navy)", lineHeight: 1.4 }}>{d.label}</p>
              </div>
              <p style={T.body}>{d.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
