import HeroBannerDesign from "@/components/hero/HeroBannerDesign";
import PricingBannerDesign from "@/components/sections/PricingBannerDesign";
import HowToOrderBannerDesign from "@/components/sections/HowToOrderBannerDesign";
import PortfolioSectionBannerDesign from "@/components/sections/PortfolioSectionBannerDesign";

export default function Banner() {
  return (
    <>
      <title>Jasa Desain Banner – Devsomnia</title>
      <meta
        name="description"
        content="Jasa desain banner profesional untuk promosi, event, hingga branding. File siap cetak & digital."
      />

      <HeroBannerDesign />
      <PricingBannerDesign />
      <HowToOrderBannerDesign />
      <PortfolioSectionBannerDesign />
    </>
  );
}
