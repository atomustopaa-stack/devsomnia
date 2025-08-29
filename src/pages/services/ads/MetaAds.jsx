import HeroMetaAds from "@/components/hero/HeroMetaAds";
import WhyUsALL from "@/components/sections/WhyUsALL"; // pakai umum; nanti bisa ganti versi khusus
import PricingMetaAds from "@/components/sections/PricingMetaAds";
import HowToOrderMetaAds from "@/components/sections/HowToOrderMetaAds";
import PortfolioSectionMetaAds from "@/components/PortfolioSectionMetaAds";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAMetaAds from "@/components/sections/CTAMetaAds";

export default function MetaAds() {
  return (
    <>
      {/* SEO */}
      <title>Jasa Iklan Meta Ads (Facebook & Instagram) — Devsomnia</title>
      <meta
        name="description"
        content="Layanan Meta Ads profesional: setup Pixel/CAPI, creative testing, remarketing, dan optimasi berkala untuk FB & IG. Tingkatkan awareness, leads, dan penjualan."
      />

      {/* Sections */}
      <HeroMetaAds />
      <WhyUsALL />
      <PricingMetaAds />
      <HowToOrderMetaAds />
      <PortfolioSectionMetaAds />
      <TestimonialsSection />
      <CTAMetaAds />
    </>
  );
}
