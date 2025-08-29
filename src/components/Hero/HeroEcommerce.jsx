import { Sparkles, CheckCircle2, ArrowRight, ShoppingBag, CreditCard } from "lucide-react";

export default function HeroEcommerce({ bg = "#0b173d", wa = "6285722511172" }) {
  return (
    <section className="relative overflow-hidden text-white mt-6" style={{ backgroundColor: bg }}>
      <OrnamentBg />
      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Kiri */}
        <div className="[&>*]:relative">
          <span className="inline-flex items-center gap-2 text-indigo-200/90 text-sm md:text-base">
            <Sparkles className="w-4 h-4" /> Jasa Website Ecommerce
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Jualan online lebih mudah dengan
            <span className="block font-semibold text-indigo-300">toko yang cepat & siap konversi</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-indigo-50/90">
            Katalog rapi, checkout simpel, ongkir otomatis, dan metode pembayaran lengkap. Terintegrasi analitik & siap iklan.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              "Katalog & kategori produk",
              "Keranjang & checkout mudah",
              "Ekspedisi & ongkir otomatis",
              "Pembayaran (transfer/VA/e-wallet*)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-none text-emerald-300" />
                <span className="text-indigo-50/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent("Halo Devsomnia, saya ingin buat Website Ecommerce.")}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white text-gray-900 hover:opacity-95 shadow-lg transition"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/30 hover:border-white/60 hover:bg-white/5 transition"
            >
              Lihat Harga
              <ShoppingBag className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#pembayaran"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white/10 hover:bg-white/15 ring-1 ring-white/20 transition"
            >
              Metode Bayar
              <CreditCard className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="relative lg:pl-6">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl opacity-30 bg-gradient-to-tr from-indigo-400 via-violet-300 to-sky-200" />
          <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="grid-eco" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeOpacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-eco)" />
            </svg>
            <img
              src="/image/hero/ecommerce-illustration.png"
              alt="Ilustrasi website ecommerce"
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <figcaption className="absolute bottom-3 right-4 text-xs text-white/70 backdrop-blur-sm bg-black/30 rounded-full px-3 py-1">
              Preview tampilan toko
            </figcaption>
          </figure>
          <div className="mt-4 text-indigo-100/80 text-sm">Devsomnia — Toko online cepat & siap scale</div>
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
          <linearGradient id="stroke-eco" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#c7d2fe" stopOpacity=".35" />
            <stop offset="100%" stopColor="#a5b4fc" stopOpacity=".15" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => {
          const y = 30 + i * 60;
          return (
            <path
              key={i}
              d={`M-50 ${y} C 250 ${y - 40}, 950 ${y + 40}, 1250 ${y}`}
              fill="none"
              stroke="url(#stroke-eco)"
              strokeWidth={i % 4 === 0 ? 1.5 : 0.7}
            />
          );
        })}
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="diagonal-eco" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#ffffff" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-eco)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="dots-eco" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#eef2ff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-eco)" />
      </svg>
    </div>
  );
}
