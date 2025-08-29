import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import WhyUs from "../components/WhyUs";
import ShowcaseCTA from "../components/ShowcaseCTA";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection"; // ⬅️ tambahkan ini

export default function Home() {
  return (
    <>
      <title>Home - Devsomnia</title>
      <meta
        name="description"
        content="Devsomnia — Jasa pembuatan website profesional, cepat, dan SEO-friendly"
      />

      <Hero />
      <AboutUs />
      <ServicesSection />
      <WhyUs />
      <ShowcaseCTA /> {/* Call To Action */}
      <PortfolioSection /> {/* Portofolio */}
      <TestimonialsSection /> {/* Testimonial mirip Google Review */}
    </>
  );
}
