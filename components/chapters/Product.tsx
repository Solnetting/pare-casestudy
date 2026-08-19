import PhoneFrame from "@/components/ui/PhoneFrame";
import SectionReveal from "@/components/ui/SectionReveal";

/* ── Shared micro-components for screen content ── */

function BottomNav({ active = "home" }: { active?: "home" | "products" | "bag" | "profile" }) {
  const items = [
    { id: "home", label: "Home", icon: "M3 10.5L12 3l9 7.5V21H15v-6H9v6H3V10.5z" },
    { id: "products", label: "Products", icon: "M4 6h16M4 12h16M4 18h16" },
    { id: "bag", label: "Bag", icon: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" },
    { id: "profile", label: "Profile", icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" },
  ];
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex border-t border-gray-100 bg-white"
      style={{ height: 52 }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-1 flex-col items-center justify-center gap-0.5"
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke={active === item.id ? "#2A9D8F" : "#8A9BB5"}
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d={item.icon}/>
          </svg>
          <span
            style={{
              fontSize: 7,
              fontFamily: "var(--font-inter-var), sans-serif",
              fontWeight: active === item.id ? 600 : 400,
              color: active === item.id ? "#2A9D8F" : "#8A9BB5",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function RepeatBadge() {
  return (
    <span
      className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5"
      style={{ background: "#E8F5F3", fontSize: 7, fontWeight: 600, color: "#2A9D8F", fontFamily: "var(--font-inter-var), sans-serif" }}
    >
      <svg width="7" height="7" viewBox="0 0 14 14" fill="none">
        <path d="M2 7a5 5 0 109.9-1M12 3v3h-3" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      Repeat
    </span>
  );
}

/* ── Screen 1: Home ── */
function HomeScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 52 }}>
      {/* App bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <span style={{ fontSize: 14, fontWeight: 700, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif" }}>
          Pare
        </span>
        <div className="relative">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"/>
          </svg>
          <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-pare-teal" style={{ fontSize: 6, color: "white" }}>2</span>
        </div>
      </div>
      {/* Campaign banner */}
      <div className="mx-3 rounded-xl p-3" style={{ background: "#F5EDD8" }}>
        <p style={{ fontSize: 7, fontWeight: 600, color: "#8A9BB5", textTransform: "uppercase", letterSpacing: "0.08em" }}>Campaign</p>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif", lineHeight: 1.3 }}>
          The Home Reset
        </p>
        <p style={{ fontSize: 8, color: "#6B7B8D", marginTop: 2 }}>Shop the seasonal edit</p>
        <div className="mt-2 inline-block rounded-full px-2.5 py-1" style={{ background: "#2A9D8F" }}>
          <span style={{ fontSize: 8, color: "white", fontWeight: 600 }}>Explore</span>
        </div>
      </div>
      {/* Categories */}
      <div className="mt-2 flex gap-1.5 overflow-x-auto px-3 pb-1 scrollbar-none">
        {["Kitchen", "Bathroom", "Living", "Care"].map((c, i) => (
          <span
            key={c}
            className="flex-shrink-0 rounded-full px-2.5 py-1"
            style={{
              background: i === 0 ? "#1B2B4B" : "#F5EDD8",
              color: i === 0 ? "white" : "#1B2B4B",
              fontSize: 8,
              fontWeight: 500,
            }}
          >
            {c}
          </span>
        ))}
      </div>
      {/* Products strip */}
      <div className="mt-2 px-3">
        <p style={{ fontSize: 8, fontWeight: 600, color: "#8A9BB5", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
          Essentials, restocked
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { name: "Dish Soap", price: "£8.99", repeat: true },
            { name: "Hand Towels", price: "£14.99", repeat: false },
            { name: "Laundry Sheets", price: "£11.99", repeat: true },
          ].map((p) => (
            <div key={p.name} className="flex-shrink-0 rounded-xl border border-gray-100 bg-gray-50 p-1.5" style={{ width: 74 }}>
              <div className="flex h-12 items-center justify-center rounded-lg bg-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4EDE9" strokeWidth="1">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                </svg>
              </div>
              <p style={{ fontSize: 8, fontWeight: 600, color: "#1B2B4B", marginTop: 4, lineHeight: 1.2 }}>{p.name}</p>
              <p style={{ fontSize: 9, color: "#2A9D8F", fontWeight: 700 }}>{p.price}</p>
              {p.repeat && <RepeatBadge />}
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

/* ── Screen 2: Category / Campaign browse ── */
function CategoryScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 52 }}>
      <div className="flex items-center gap-2 px-4 py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif" }}>Kitchen</span>
      </div>
      <div className="flex gap-1.5 px-4 pb-2">
        {["All", "Cleaning", "Storage", "Cooking"].map((c, i) => (
          <span
            key={c}
            className="flex-shrink-0 rounded-full px-2 py-0.5"
            style={{ background: i === 0 ? "#2A9D8F" : "#F5EDD8", color: i === 0 ? "white" : "#1B2B4B", fontSize: 7.5, fontWeight: 500 }}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 px-3">
        {[
          { name: "Dish Soap Refillable", price: "£8.99", repeat: true, surface: "#F5EDD8" },
          { name: "Glass Spray Bottle", price: "£12.99", repeat: false, surface: "#D4EDE9" },
          { name: "Laundry Sheets", price: "£11.99", repeat: true, surface: "#FAE5D3" },
          { name: "Beeswax Wrap Set", price: "£9.99", repeat: false, surface: "#F5EDD8" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-gray-100 bg-white p-2">
            <div className="flex h-16 items-center justify-center rounded-lg" style={{ background: p.surface }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                <rect x="4" y="4" width="16" height="16" rx="3"/>
              </svg>
            </div>
            <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B", marginTop: 4, lineHeight: 1.25 }}>{p.name}</p>
            <div className="flex items-center justify-between mt-0.5">
              <p style={{ fontSize: 10, color: "#2A9D8F", fontWeight: 700 }}>{p.price}</p>
              {p.repeat && <RepeatBadge />}
            </div>
          </div>
        ))}
      </div>
      <BottomNav active="products" />
    </div>
  );
}

/* ── Screen 3: Products / Search ── */
function ProductsScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 52 }}>
      <div className="px-3 pt-2 pb-1.5">
        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A9BB5" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span style={{ fontSize: 10, color: "#8A9BB5" }}>Search products…</span>
        </div>
      </div>
      <div className="flex gap-1.5 px-3 pb-2 overflow-x-auto scrollbar-none">
        {["All", "Kitchen", "Bathroom", "Living", "Care"].map((c, i) => (
          <span key={c} className="flex-shrink-0 rounded-full px-2.5 py-1"
            style={{ background: i === 0 ? "#1B2B4B" : "#FAF8F5", color: i === 0 ? "white" : "#1B2B4B", fontSize: 7.5, fontWeight: 500, border: i !== 0 ? "1px solid #E8E2D9" : "none" }}>
            {c}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 px-3 pb-2">
        {[
          { name: "Dish Soap", price: "£8.99", repeat: true, bg: "#F5EDD8" },
          { name: "Laundry Sheets", price: "£11.99", repeat: true, bg: "#D4EDE9" },
          { name: "Glass Bottle", price: "£12.99", repeat: false, bg: "#FAE5D3" },
          { name: "Bamboo Towels", price: "£14.99", repeat: false, bg: "#F5EDD8" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-gray-100 p-2">
            <div className="flex h-16 items-center justify-center rounded-lg" style={{ background: p.bg }} />
            <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B", marginTop: 4, lineHeight: 1.25 }}>{p.name}</p>
            <div className="flex items-center justify-between mt-0.5">
              <span style={{ fontSize: 10, color: "#2A9D8F", fontWeight: 700 }}>{p.price}</span>
              {p.repeat && <RepeatBadge />}
            </div>
          </div>
        ))}
      </div>
      <BottomNav active="products" />
    </div>
  );
}

/* ── Screen 4: Product Detail ── */
function ProductDetailScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 52 }}>
      <div className="flex items-center gap-2 px-4 py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        <span style={{ fontSize: 11, color: "#8A9BB5" }}>Kitchen</span>
      </div>
      {/* Product image */}
      <div className="mx-3 flex h-28 items-center justify-center rounded-xl" style={{ background: "#F5EDD8" }}>
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="white"/>
          <rect x="14" y="14" width="20" height="20" rx="4" fill="#D4EDE9"/>
        </svg>
      </div>
      {/* Product info */}
      <div className="mt-3 px-4">
        <p style={{ fontSize: 13, fontWeight: 700, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif" }}>
          Refillable Dish Soap
        </p>
        <p style={{ fontSize: 9, color: "#8A9BB5", marginTop: 2 }}>500ml · Concentrated formula</p>
        {/* Proof labels */}
        <div className="mt-2 flex gap-1.5 flex-wrap">
          {["Refillable", "B Corp", "Vegan"].map((l) => (
            <span key={l} className="rounded-full px-2 py-0.5"
              style={{ background: "#E8F5F3", color: "#2A9D8F", fontSize: 7.5, fontWeight: 600 }}>
              {l}
            </span>
          ))}
        </div>
        <div className="mt-3 h-px bg-gray-100" />
        {/* Pricing */}
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#1B2B4B" }}>£8.99</p>
            <p style={{ fontSize: 9, color: "#8A9BB5" }}>One-time</p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: 14, fontWeight: 700, color: "#2A9D8F" }}>£8.09</p>
            <p style={{ fontSize: 9, color: "#8A9BB5" }}>Every 30 days · save 10%</p>
          </div>
        </div>
      </div>
      <BottomNav active="products" />
    </div>
  );
}

/* ── Screen 5: Purchase Mode ── */
function PurchaseModeScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 52 }}>
      <div className="px-4 pt-2">
        <p style={{ fontSize: 11, fontWeight: 700, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif" }}>
          Refillable Dish Soap
        </p>
        <p style={{ fontSize: 9, color: "#8A9BB5" }}>Choose how you buy</p>
      </div>
      {/* Mode toggle */}
      <div className="mx-3 mt-3 flex rounded-xl border border-gray-100 bg-gray-50 p-0.5">
        <button className="flex-1 rounded-lg py-1.5 text-center" style={{ fontSize: 9, fontWeight: 600, color: "#8A9BB5" }}>
          One-time
        </button>
        <button className="flex-1 rounded-lg py-1.5 text-center" style={{ background: "#1B2B4B", fontSize: 9, fontWeight: 600, color: "white" }}>
          Repeat
        </button>
      </div>
      {/* Repeat card */}
      <div className="mx-3 mt-3 rounded-xl border border-teal-100 p-3" style={{ background: "#E8F5F3" }}>
        <div className="flex items-start justify-between">
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#2A9D8F" }}>£8.09</p>
            <p style={{ fontSize: 8, color: "#6B7B8D" }}>per delivery</p>
          </div>
          <span className="rounded-full px-2 py-0.5"
            style={{ background: "#2A9D8F", color: "white", fontSize: 8, fontWeight: 600 }}>
            Save 10%
          </span>
        </div>
        <div className="mt-2 h-px" style={{ background: "#C8E8E4" }} />
        <div className="mt-2 flex justify-between">
          <p style={{ fontSize: 9, color: "#6B7B8D" }}>Frequency</p>
          <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>Every 30 days ↓</p>
        </div>
        <div className="mt-1 flex justify-between">
          <p style={{ fontSize: 9, color: "#6B7B8D" }}>Annual saving</p>
          <p style={{ fontSize: 9, fontWeight: 600, color: "#2A9D8F" }}>~£10.80</p>
        </div>
      </div>
      {/* Add button */}
      <div className="mx-3 mt-4">
        <button className="w-full rounded-full py-2" style={{ background: "#2A9D8F" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>Add to repeat order</span>
        </button>
      </div>
      <BottomNav active="products" />
    </div>
  );
}

/* ── Screen 6: Cart ── */
function CartScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 52 }}>
      <div className="px-4 pt-2 pb-2 flex items-center justify-between">
        <p style={{ fontSize: 14, fontWeight: 700, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif" }}>
          Your Bag
        </p>
        <span style={{ fontSize: 10, color: "#8A9BB5" }}>3 items</span>
      </div>
      <div className="flex flex-col gap-2 px-3">
        {[
          { name: "Dish Soap Refillable", price: "£8.09", repeat: true },
          { name: "Bamboo Hand Towels", price: "£14.99", repeat: false },
          { name: "Laundry Sheets ×2", price: "£23.98", repeat: true },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2 rounded-xl border border-gray-100 p-2">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: "#FAF8F5" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4EDE9" strokeWidth="1.5">
                <rect x="4" y="4" width="16" height="16" rx="3"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B", lineHeight: 1.2 }}>{item.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <p style={{ fontSize: 10, fontWeight: 700, color: "#2A9D8F" }}>{item.price}</p>
                {item.repeat && <RepeatBadge />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-3 mt-3 flex justify-between items-center">
        <p style={{ fontSize: 10, color: "#6B7B8D" }}>
          <span style={{ textDecoration: "underline", textDecorationColor: "#2A9D8F" }}>Continue shopping</span>
        </p>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#1B2B4B" }}>£47.06</p>
      </div>
      <div className="mx-3 mt-2">
        <button className="w-full rounded-full py-2" style={{ background: "#2A9D8F" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>Checkout</span>
        </button>
      </div>
      <BottomNav active="bag" />
    </div>
  );
}

/* ── Screen 7: Checkout ── */
function CheckoutScreen() {
  return (
    <div className="absolute inset-0 bg-white" style={{ top: 30, bottom: 12 }}>
      <div className="px-4 pt-2 pb-3 border-b border-gray-100">
        <p style={{ fontSize: 14, fontWeight: 700, color: "#1B2B4B", fontFamily: "var(--font-lora-var), serif" }}>
          Checkout
        </p>
      </div>
      <div className="px-4 pt-3 flex flex-col gap-3">
        {/* Order summary */}
        <div className="rounded-xl bg-gray-50 p-2.5">
          <p style={{ fontSize: 8, fontWeight: 600, color: "#8A9BB5", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
            Order summary
          </p>
          <div className="flex justify-between">
            <p style={{ fontSize: 9, color: "#6B7B8D" }}>3 items</p>
            <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>£47.06</p>
          </div>
          <div className="flex justify-between mt-1">
            <p style={{ fontSize: 9, color: "#2A9D8F" }}>Repeat savings</p>
            <p style={{ fontSize: 9, fontWeight: 600, color: "#2A9D8F" }}>−£2.12</p>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between">
            <p style={{ fontSize: 10, fontWeight: 700, color: "#1B2B4B" }}>Total</p>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#1B2B4B" }}>£44.94</p>
          </div>
        </div>
        {/* Delivery */}
        <div>
          <p style={{ fontSize: 8, fontWeight: 600, color: "#8A9BB5", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
            Delivery
          </p>
          <div className="rounded-xl border border-gray-100 p-2.5">
            <p style={{ fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>Alex Turner</p>
            <p style={{ fontSize: 9, color: "#8A9BB5" }}>12 Grove Street, London</p>
          </div>
        </div>
        {/* Payment */}
        <div>
          <p style={{ fontSize: 8, fontWeight: 600, color: "#8A9BB5", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
            Payment
          </p>
          <div className="flex items-center gap-2 rounded-xl border border-gray-100 p-2.5">
            <div className="h-5 w-8 rounded bg-gray-200 flex items-center justify-center">
              <span style={{ fontSize: 6, fontWeight: 700, color: "#6B7B8D" }}>VISA</span>
            </div>
            <p style={{ fontSize: 9, color: "#1B2B4B" }}>•••• 4242</p>
          </div>
        </div>
      </div>
      <div className="mx-3 mt-3">
        <button className="w-full rounded-full py-2" style={{ background: "#2A9D8F" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>Place order · £44.94</span>
        </button>
      </div>
    </div>
  );
}

/* ── Decisions ── */
const DECISIONS = [
  {
    label: "Search lives in Products",
    body: "Rather than a global search icon in the main nav, search is scoped within the Products tab. This aligns the entry point with the intent — people searching want to browse, not navigate.",
  },
  {
    label: "Repeat only where relevant",
    body: "One-time products never show Repeat messaging. Adding the mental model only when it applies reduces noise and avoids false expectations.",
  },
  {
    label: "Cart as a rest stop, not a dead end",
    body: "The cart keeps 'Continue shopping' visible without burying the checkout CTA. Stopping a purchase should feel easy so users don't feel pressure that erodes trust.",
  },
  {
    label: "Bottom nav: four tabs, nothing hidden",
    body: "Home, Products, Bag, Profile. Every primary journey can be reached in one tap. Profile replaces a 'More' overflow, keeping navigation predictable.",
  },
];

/* ── Main component ── */
export default function Product() {
  const SCREENS = [
    { label: "Home", screen: <HomeScreen /> },
    { label: "Category", screen: <CategoryScreen /> },
    { label: "Products", screen: <ProductsScreen /> },
    { label: "Product detail", screen: <ProductDetailScreen /> },
    { label: "Purchase mode", screen: <PurchaseModeScreen /> },
    { label: "Cart", screen: <CartScreen /> },
    { label: "Checkout", screen: <CheckoutScreen /> },
  ];

  return (
    <section id="product" className="bg-white py-28 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Chapter header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="chapter-label mb-3">02 — Product</p>
            <h2
              className="font-lora font-semibold text-pare-navy"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 560 }}
            >
              The mobile app, as one connected flow.
            </h2>
            <p className="mt-4 font-inter text-pare-subtle" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
              Every screen in the purchase journey, from the editorial home feed
              through to the order placed. No dead ends, no orphaned states.
            </p>
          </div>
        </SectionReveal>

        {/* Phone flow — horizontal scroll */}
        <SectionReveal delay={80}>
          <div className="scroll-row pb-8">
            <div className="flex items-start gap-3 pb-4" style={{ minWidth: "max-content" }}>
              {SCREENS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  <PhoneFrame label={s.label} className="flex-shrink-0">
                    <div className="relative w-full h-full">
                      {s.screen}
                    </div>
                  </PhoneFrame>
                  {i < SCREENS.length - 1 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-44">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#D4EDE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Key decisions */}
        <SectionReveal delay={100}>
          <div className="mt-12">
            <p className="chapter-label mb-8">Key product decisions</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {DECISIONS.map((d, i) => (
                <div
                  key={d.label}
                  className="flex gap-4 rounded-2xl border border-pare-border bg-pare-canvas p-6"
                >
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-inter font-semibold text-white"
                    style={{ background: "#2A9D8F", fontSize: 12 }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-inter font-semibold text-pare-navy" style={{ fontSize: 14, marginBottom: 6 }}>
                      {d.label}
                    </p>
                    <p className="font-inter text-pare-subtle" style={{ fontSize: 13, lineHeight: 1.6 }}>
                      {d.body}
                    </p>
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
