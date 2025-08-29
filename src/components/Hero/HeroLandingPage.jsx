// src/components/hero/HeroLandingPage.jsx
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, Rocket, Play } from "lucide-react";

export default function HeroLandingPage({
  bg = "#0b173d",                // latar biru tua
  brand = "Devsomnia",
  wa = "6285722511172",          // nomor WhatsApp tanpa +
}) {
  return (
    <section
      className="relative overflow-hidden text-white mt-6"
      style={{ backgroundColor: bg }}
    >
      <OrnamentBg />

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Kiri: Copywriting */}
        <div className="[&>*]:relative">
          <span className="inline-flex items-center gap-2 text-sky-200/90 text-sm md:text-base">
            <Sparkles className="w-4 h-4" />
            Jasa Website Landing Page
          </span>
<h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
  Raih lebih banyak
  <span className="block font-semibold text-sky-300">
    leads & penjualan dari Internet 
  </span>
</h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-sky-100/90">
            Landing page yang fokus pada hasil: copy yang jelas, struktur rapi, load cepat,
            & siap SEO dasar. Cocok untuk campaign iklan, prelaunch, hingga pengumpulan data prospek.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              "CTA kuat & jelas",
              "Section terstruktur",
              "Kecepatan optimal",
              "SEO dasar siap",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-none text-emerald-300" />
                <span className="text-sky-100/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent(
                "Halo Devsomnia, saya ingin membuat Landing Page."
              )}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white text-sky-900 hover:opacity-95 shadow-lg shadow-sky-900/20 transition"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            <Link
              to="#demo"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/30 hover:border-white/60 hover:bg-white/5 transition"
            >
              Tentang Kami
              <Play className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to="#fitur"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-sky-900/30 hover:bg-sky-900/40 ring-1 ring-white/10 transition"
            >
              Fitur Utama
              <Rocket className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Trust badges kecil */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sky-200/80">
            <Badge>Tanpa ribet</Badge>
            <Badge>Mobile-first</Badge>
            <Badge>Siap campaign iklan</Badge>
          </div>
        </div>

        {/* Kanan: Mockup / ilustrasi */}
        <div className="relative lg:pl-6">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl opacity-30 bg-gradient-to-tr from-sky-400 via-cyan-300 to-blue-200" />
          <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            {/* Grid placeholder */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="grid-landing" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeOpacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-landing)" />
            </svg>

            <img
              src="/image/dymmy.1.jpg"
              alt="Ilustrasi landing page konversi tinggi"
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />

            <figcaption className="absolute bottom-3 right-4 text-xs text-white/70 backdrop-blur-sm bg-sky-900/30 rounded-full px-3 py-1">
              Preview struktur landing page
            </figcaption>
          </figure>

          <div className="mt-4 text-sky-200/80 text-sm">
            {brand} — Landing page untuk kampanye yang butuh hasil
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Komponen kecil ===== */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 ring-1 ring-white/10">
      {children}
    </span>
  );
}

function OrnamentBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* garis kontur */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="stroke-landing" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity=".35" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity=".15" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => {
          const y = 30 + i * 60;
          return (
            <path
              key={i}
              d={`M-50 ${y} C 250 ${y - 40}, 950 ${y + 40}, 1250 ${y}`}
              fill="none"
              stroke="url(#stroke-landing)"
              strokeWidth={i % 4 === 0 ? 1.5 : 0.7}
            />
          );
        })}
      </svg>

      {/* diagonal pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="diagonal-landing" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#ffffff" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-landing)" />
      </svg>

      {/* grid titik */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="dots-landing" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#e2f2ff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-landing)" />
      </svg>
    </div>
  );
}
