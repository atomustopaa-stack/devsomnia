import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

// ✅ Provider untuk Language & Theme
import { SettingsProvider } from "./contexts/SettingsContext";

// Gunakan lazy import untuk semua halaman
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const TemplatesFree = lazy(() => import("./pages/TemplatesFree"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Services – Website
const LandingPage = lazy(() => import("./pages/services/website/LandingPage"));
const CompanyProfile = lazy(() => import("./pages/services/website/CompanyProfile"));
const Sekolah = lazy(() => import("./pages/services/website/Sekolah"));
const Ecommerce = lazy(() => import("./pages/services/website/Ecommerce"));
const Custom = lazy(() => import("./pages/services/website/Custom"));

// Services – Ads
const GoogleAds = lazy(() => import("./pages/services/ads/GoogleAds"));
const MetaAds = lazy(() => import("./pages/services/ads/MetaAds"));
const TiktokAds = lazy(() => import("./pages/services/ads/TiktokAds"));
const MarketplaceAds = lazy(() => import("./pages/services/ads/MarketplaceAds"));

// Services – Design
const Logo = lazy(() => import("./pages/services/design/Logo"));
const Banner = lazy(() => import("./pages/services/design/Banner"));
// ⬇️ ganti SosmedPost -> Sosmed (sesuai halaman “layanan penuh” yg kita buat)
const Sosmed = lazy(() => import("./pages/services/design/SosmedPost"));

// Services – SEO
// ⬇️ ganti PilarArtikel -> ArtikelPilar (sesuai file yang kita buat)
const ArtikelPilar = lazy(() => import("./pages/services/seo/PilarArtikel"));
const Backlink = lazy(() => import("./pages/services/seo/Backlink"));

// Blog (langsung import biasa, biar gampang edit)
import Blog from "./pages/Blog";

function Loader() {
  return <div className="p-8 text-center">Memuat…</div>;
}

export default function App() {
  return (
    <SettingsProvider>
      <Router>
        {/* base color utk dark mode */}
        <div className="min-h-dvh flex flex-col bg-white text-slate-900 dark:bg-gray-950 dark:text-slate-100">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} /> {/* ✅ Blog Page */}
                <Route path="/templates/free" element={<TemplatesFree />} />
                <Route path="/templates" element={<TemplatesFree />} /> {/* ✅ Alias ke Templates */}
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

                {/* Services – Website */}
                <Route path="/services/website/landing-page" element={<LandingPage />} />
                <Route path="/services/website/company-profile" element={<CompanyProfile />} />
                <Route path="/services/website/sekolah" element={<Sekolah />} />
                <Route path="/services/website/ecommerce" element={<Ecommerce />} />
                <Route path="/services/website/custom" element={<Custom />} />

                {/* Services – Ads */}
                <Route path="/services/ads/google-ads" element={<GoogleAds />} />
                <Route path="/services/ads/meta-ads" element={<MetaAds />} />
                <Route path="/services/ads/tiktok-ads" element={<TiktokAds />} />
                <Route path="/services/ads/marketplace-ads" element={<MarketplaceAds />} />

                {/* Services – Design */}
                <Route path="/services/design/logo" element={<Logo />} />
                <Route path="/services/design/banner" element={<Banner />} />
                {/* ⬇️ path konsisten dengan navbar/mobile: /services/design/sosmed */}
                <Route path="/services/design/sosmed" element={<Sosmed />} />

                {/* Services – SEO */}
                <Route path="/services/seo/artikel-pilar" element={<ArtikelPilar />} />
                <Route path="/services/seo/backlink" element={<Backlink />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />

          {/* ✅ Floating Chat Widget */}
          <ChatWidget
            whatsappNumber="6285722511172" // nomor WA admin
            adminEmail="halo@devsomnia.com"
            services={[
              "Jasa Website Landing Page",
              "Jasa Website Company Profile",
              "Jasa Website Sekolah",
              "Jasa Website Ecommerce",
              "Jasa Website Custom",
              "Google Ads",
              "Tiktok Ads",
              "Meta Ads",
              "Jasa Design",
              "Desain Logo",
              "Desain Banner",
              "Desain Sosmed",
              "SEO",
              "Artikel Pilar",
              "Backlink",
            ]}
          />
        </div>
      </Router>
    </SettingsProvider>
  );
}
