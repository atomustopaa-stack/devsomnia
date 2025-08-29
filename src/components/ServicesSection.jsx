import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function ServicesSection() {
  const CATEGORIES = useMemo(
    () => [
      {
        id: "website",
        title: "Jasa Website",
        desc:
          "Pembuatan website profesional: Company Profile, Landing Page, Sekolah, hingga Ecommerce.",
        icon: "/image/icons/website.svg",
        children: [
          { label: "Landing Page", to: "/services/website/landing-page" },
          { label: "Company Profile", to: "/services/website/company-profile" },
          { label: "Website Sekolah", to: "/services/website/sekolah" },
          { label: "Ecommerce", to: "/services/website/ecommerce" },
          { label: "Website Custom", to: "/services/website/custom" },
        ],
      },
      {
        id: "ads",
        title: "Jasa Iklan",
        desc:
          "Optimasi iklan digital di Google Ads, Tiktok Ads, hingga Meta Ads untuk hasil maksimal.",
        icon: "/image/icons/ads.svg",
        children: [
          { label: "Google Ads", to: "/services/ads/google-ads" },
          { label: "Tiktok Ads", to: "/services/ads/tiktok-ads" },
          { label: "Meta Ads", to: "/services/ads/meta-ads" },
        ],
      },
      {
        id: "design",
        title: "Jasa Desain",
        desc:
          "Layanan desain logo, banner, dan konten sosial media untuk branding bisnis impian  Anda.",
        icon: "/image/icons/desain.svg",
        children: [
          { label: "Desain Logo", to: "/services/design/logo" },
          { label: "Desain Banner", to: "/services/design/banner" },
          { label: "Kelola Sosmed", to: "/services/design/sosmed" },
        ],
      },
      {
        id: "seo",
        title: "Jasa SEO",
        desc:
          "Optimasi mesin pencari, artikel pilar, dan backlink agar website Anda lebih mudah ditemukan.",
        icon: "/image/icons/seo.svg",
        children: [
          { label: "SEO (Umum)", to: "/services/seo" },
          { label: "Artikel Pilar", to: "/services/seo/artikel-pilar" },
          { label: "Backlink", to: "/services/seo/backlink" },
        ],
      },
    ],
    []
  );

  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((curr) => (curr === id ? null : id));

  return (
    <section id="layanan" className="bg-white">
      {/* ROM CONTAINER: max-w-screen-xl, px-4 md:px-8, py-20 */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 py-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#1f2b80] font-semibold text-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1f2b80]" />
            <span>Layanan Kami</span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#111a4c]">
            Solusi  lengkap  mendukung  bisnis Anda
          </h2>
        </div>

        {/* Grid 4 kartu (gap-8 sesuai ROM) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="relative">
              {/* Card */}
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-[#1f2b80]/20 to-transparent hover:-translate-y-1 transition-transform hover:shadow-2xl">
                <div className="relative h-full rounded-[15px] bg-white backdrop-blur-md border border-white/60 shadow-sm px-5 py-6">
                  <div className="mb-4 inline-grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-200/50">
                    <img src={cat.icon} alt={cat.title} className="h-6 w-6 opacity-90" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f1842]">{cat.title}</h3>
                  {/* Paragraf mengikuti ROM: 16–18px, lh 1.6–1.8, gray-700 */}
                  <p className="mt-2 text-base md:text-lg leading-8 text-gray-700">{cat.desc}</p>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => toggle(cat.id)}
                      className="inline-flex items-center gap-2 text-[#18246b] text-sm font-semibold hover:opacity-90"
                    >
                      Lihat daftar
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform ${openId === cat.id ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile: Dropdown muncul di bawah card */}
              {openId === cat.id && (
                <div className="block md:hidden mt-3">
                  <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {cat.children.map((ch) => (
                          <Link
                            key={ch.label}
                            to={ch.to}
                            className="group rounded-lg border border-black/10 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all p-3"
                          >
                            <h5 className="font-medium text-[#0f1842] text-sm leading-tight">
                              {ch.label}
                            </h5>
                            <div className="mt-2">
                              <span className="inline-flex items-center text-xs font-semibold text-[#1f2b80] group-hover:underline">
                                Kunjungi →
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Dropdown penuh di bawah grid */}
        {openId && (
          <div className="hidden md:block mt-10">
            {CATEGORIES.filter((c) => c.id === openId).map((cat) => (
              <div
                key={cat.id}
                className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl"
              >
                <div className="relative grid grid-cols-1 md:grid-cols-12">
                  {/* kiri: icon + deskripsi */}
                  <div className="md:col-span-5 p-6 md:p-7 border-b md:border-b-0 md:border-r border-black/5">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-200/50 grid place-items-center">
                        <img src={cat.icon} alt={cat.title} className="h-6 w-6 opacity-90" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-[#0f1842]">
                          {cat.title}
                        </h3>
                        {/* Paragraf mengikuti ROM */}
                        <p className="mt-2 text-base md:text-lg leading-8 text-gray-700">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* kanan: daftar layanan */}
                  <div className="md:col-span-7 p-5 md:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {cat.children.map((ch) => (
                        <Link
                          key={ch.label}
                          to={ch.to}
                          className="group rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all p-4"
                        >
                          <h5 className="font-medium text-[#0f1842] text-sm sm:text-base leading-tight">
                            {ch.label}
                          </h5>
                          <div className="mt-3">
                            <span className="inline-flex items-center text-sm font-semibold text-[#1f2b80] group-hover:underline">
                              Kunjungi →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* /ROM CONTAINER */}
    </section>
  );
}
