import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/chapters/Overview";
import Product from "@/components/chapters/Product";
import DesignSystem from "@/components/chapters/DesignSystem";
import Brand from "@/components/chapters/Brand";
import Campaign from "@/components/chapters/Campaign";
import Reflection from "@/components/chapters/Reflection";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Overview />
      <Product />
      <DesignSystem />
      <Brand />
      <Campaign />
      <Reflection />
    </>
  );
}
