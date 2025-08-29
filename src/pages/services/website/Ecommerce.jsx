import HeroEcommerce from "@/components/hero/HeroEcommerce";
import PricingEcommerce from "@/components/sections/PricingEcommerce";
import WhyUsALL from "@/components/sections/WhyUsALL";
import HowToOrder from "@/components/sections/HowToOrder";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Ecommerce() {
  return (
    <>
      <title>Jasa Website Ecommerce – Devsomnia</title>
      <meta
        name="description"
        content="Website ecommerce cepat & siap konversi: katalog, checkout, gateway pembayaran, ongkir otomatis, dan analitik."
      />

      {/* Hero */}
      <HeroEcommerce />

      {/* Why Us */}
      <div id="fitur" />
      <WhyUsALL />

      {/* Pricing */}
      <PricingEcommerce id="pricing" />

      {/* How to Order */}
      <HowToOrder />

      {/* Portfolio */}
      <div id="demo" />
      <PortfolioSection />

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
