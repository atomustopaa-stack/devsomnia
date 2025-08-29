import HeroLogoDesign from "@/components/hero/HeroLogoDesign";
import PricingLogoDesign from "@/components/sections/PricingLogoDesign";
import HowToOrderLogoDesign from "@/components/sections/HowToOrderLogoDesign";
import PortfolioSectionLogoDesign from "@/components/sections/PortfolioSectionLogoDesign";

export default function Logo() {
  return (
    <>
      {/* SEO */}
      <title>Jasa Desain Logo – Devsomnia</title>
      <meta
        name="description"
        content="Jasa desain logo profesional: orisinal, siap pakai, dan file lengkap untuk semua kebutuhan brand Anda."
      />

      {/* Sections */}
      <HeroLogoDesign />
      <PricingLogoDesign />
      <HowToOrderLogoDesign />
      <PortfolioSectionLogoDesign />
    </>
  );
}
