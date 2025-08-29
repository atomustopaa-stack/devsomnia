import HeroCustom from "@/components/hero/HeroCustom";
import PricingCustom from "@/components/sections/PricingCustom";
import WhyUsALL from "@/components/sections/WhyUsALL";
import HowToOrder from "@/components/sections/HowToOrder";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Custom() {
  return (
    <>
      <title>Jasa Website Custom – Devsomnia</title>
      <meta
        name="description"
        content="Pembuatan website/aplikasi custom: multi-role, integrasi API, arsitektur modular, keamanan & audit. UI-first dan scalable."
      />

      {/* Hero */}
      <HeroCustom />

      {/* Why Us */}
      <div id="fitur" />
      <WhyUsALL />

      {/* Pricing */}
      <PricingCustom id="pricing" />

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
