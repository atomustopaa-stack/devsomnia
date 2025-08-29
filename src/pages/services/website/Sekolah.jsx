// ================================
// File: src/pages/services/website/Sekolah.jsx
// ================================
import HeroSekolah from "@/components/hero/HeroSekolah";
import PricingSekolah from "@/components/sections/PricingSekolah";
import WhyUsALL from "@/components/sections/WhyUsALL";
import HowToOrder from "@/components/sections/HowToOrder";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Sekolah() {
  return (
    <>
      <title>Jasa Website Sekolah – Devsomnia</title>
      <meta
        name="description"
        content="Pembuatan website sekolah modern: PPDB online, berita, agenda, galeri, dan profil sekolah. Cepat & mobile-friendly."
      />

      {/* Hero */}
      <HeroSekolah />

      {/* Why Us */}
      <div id="fitur" />
      <WhyUsALL />

      {/* Pricing */}
      <PricingSekolah id="pricing" />

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
