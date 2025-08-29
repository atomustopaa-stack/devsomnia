// src/pages/services/website/LandingPage.jsx
import HeroLandingPage from "@/components/hero/HeroLandingPage";
import WhyUsALL from "@/components/sections/WhyUsALL";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PricingLandingPage from "@/components/sections/PricingLandingPage";
import HowToOrder from "@/components/sections/HowToOrder";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function LandingPage() {
  return (
    <>
      <title>Jasa Landing Page – Devsomnia</title>
      <meta
        name="description"
        content="Landing page fokus konversi: copy kuat, struktur rapi, load cepat, siap SEO dasar."
      />

      {/* Hero */}
      <HeroLandingPage />

      {/* Why Us */}
      <div id="fitur" />
      <WhyUsALL />

      {/* Pricing */}
      <PricingLandingPage
        title="Paket Harga Landing Page"
        subtitle="Mulai dari kecil, bisa ditingkatkan kapan saja."
        whatsapp="6285722511172"
        id="pricing"
      />

      {/* How To Order */}
      <HowToOrder />

      {/* Portfolio */}
      <div id="demo" />
      <PortfolioSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Bisa ditutup dengan FAQ + CTA akhir */}
    </>
  );
}
