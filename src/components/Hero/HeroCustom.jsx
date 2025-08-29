import { Sparkles, CheckCircle2, ArrowRight, Puzzle, Wrench } from "lucide-react";

export default function HeroCustom({ bg = "#0b173d", wa = "6285722511172" }) {
  return (
    <section className="relative overflow-hidden text-white mt-6" style={{ backgroundColor: bg }}>
      <OrnamentBg />
      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Kiri */}
        <div className="[&>*]:relative">
          <span className="inline-flex items-center gap-2 text-sky-200/90 text-sm md:text-base">
            <Sparkles className="w-4 h-4" /> Jasa Website Custom
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Bangun fitur sesuai
            <span className="block font-semibold text-sky-300">workflow & kebutuhan unik bisnismu</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-sky-100/90">
            Mulai dari dashboard internal, multi-role akses, sampai integrasi API—semua dirancang UI-first,
            performa cepat, dan siap dikembangkan bertahap.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              "Arsitektur scalable",
              "Komponen reusable",
              "Integrasi API/SSO",
              "Keamanan & audit",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-none text-emerald-300" />
                <span className="text-sky-100/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent("Halo Devsomnia, saya ingin buat Website Custom.")}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white text-sky-900 hover:opacity-95 shadow-lg shadow-sky-900/20 transition"
            >
              Diskusi Kebutuhan
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/30 hover:border-white/60 hover:bg-white/5 transition"
            >
              Lihat Estimasi
              <Puzzle className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="relative lg:pl-6">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl opacity-30 bg-gradient-to-tr from-sky-400 via-cyan-300 to-blue-200" />
          <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="grid-custom" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeOpacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-custom)" />
            </svg>
            <img
              src="/image/hero/custom-illustration.png"
              alt="Ilustrasi website custom"
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <figcaption className="absolute bottom-3 right-4 text-xs text-white/70 backdrop-blur-sm bg-black/30 rounded-full px-3 py-1">
              Preview arsitektur modular
            </figcaption>
          </figure>
          <div className="mt-4 text-sky-200/80 text-sm">Devsomnia — Custom app yang bertumbuh bersama bisnis</div>
        </div>
      </div>
    </section>
  );
}

function OrnamentBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="stroke-custom" x1="0" x2="1" y1="0" y2="1">
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
              stroke="url(#stroke-custom)"
              strokeWidth={i % 4 === 0 ? 1.5 : 0.7}
            />
          );
        })}
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="diagonal-custom" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#ffffff" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-custom)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="dots-custom" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#e2f2ff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-custom)" />
      </svg>
    </div>
  );
}
