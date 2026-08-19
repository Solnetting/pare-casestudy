import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/chapters/Overview";
import Product from "@/components/chapters/Product";
import DesignSystem from "@/components/chapters/DesignSystem";
import Brand from "@/components/chapters/Brand";
import Campaign from "@/components/chapters/Campaign";
import Reflection from "@/components/chapters/Reflection";

/* Each chapter slides up over the previous one — creates depth as you scroll */
const STACK = [
  { Component: Overview,    zIndex: 2 },
  { Component: Product,     zIndex: 3 },
  { Component: DesignSystem,zIndex: 4 },
  { Component: Brand,       zIndex: 5 },
  { Component: Campaign,    zIndex: 6 },
  { Component: Reflection,  zIndex: 7 },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero at base layer */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Hero />
        </div>

        {/* Sections stack on top of each other */}
        {STACK.map(({ Component, zIndex }) => (
          <div
            key={zIndex}
            style={{
              position: "relative",
              zIndex,
              marginTop: -32,
            }}
          >
            <Component />
          </div>
        ))}
      </main>
    </>
  );
}
