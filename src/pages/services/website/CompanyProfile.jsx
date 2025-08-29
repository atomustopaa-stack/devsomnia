// src/pages/services/website/CompanyProfile.jsx
import { useEffect } from "react";
import HeroCompanyProfile from "@/components/Hero/HeroCompanyProfile";
import WhyUsALL from "@/components/sections/WhyUsALL";
import PricingCompanyProfile from "@/components/sections/PricingCompanyProfile";
import HowToOrder from "@/components/sections/HowToOrder";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "../../../components/TestimonialsSection";

export default function CompanyProfile() {
  useEffect(() => {
    document.title = "Jasa Website Company Profile - Devsomnia";
    const m =
      document.querySelector('meta[name="description"]') ??
      (() => {
        const el = document.createElement("meta");
        el.setAttribute("name", "description");
        document.head.appendChild(el);
        return el;
      })();
    m.setAttribute(
      "content",
      "Pembuatan website company profile profesional untuk meningkatkan kredibilitas bisnis."
    );
  }, []);

  return (
    <>
      <HeroCompanyProfile />
      <WhyUsALL />
      <PricingCompanyProfile />
      <HowToOrder />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
