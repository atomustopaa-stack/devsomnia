import HeroGoogleAds from "@/components/hero/HeroGoogleAds";
import WhyUsGoogleAds from "@/components/sections/WhyUsGoogleAds";
import PricingGoogleAds from "@/components/sections/PricingGoogleAds";
import HowToOrderGoogleAds from "@/components/sections/HowToOrderGoogleAds";
import CTAGoogleAds from "@/components/sections/CTAGoogleAds";

export default function GoogleAds() {
  return (
    <>
      <title>Jasa Iklan Google Ads – Devsomnia</title>
      <meta
        name="description"
        content="Optimasi iklan Google Ads untuk meningkatkan traffic dan konversi bisnis Anda."
      />

      <HeroGoogleAds />
      <WhyUsGoogleAds />
      <PricingGoogleAds />
      <HowToOrderGoogleAds />
      {/* PortfolioSection kalau ada */}
      {/* TestimonialsSection */}
      <CTAGoogleAds />
    </>
  );
}
