import { Check, Star } from "lucide-react";

export default function PricingMetaAds() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 1.150.000",
      period: "/bulan",
      tagline: "Mulai bangun awareness & leads",
      features: [
        "Setup Meta Pixel dasar + UTM",
        "1–2 campaign, 3–5 ad set",
        "3–5 kreatif (feed/stories)",
        "Audience interest + geo",
        "Frequency & placement control",
        "Optimasi mingguan ringan",
        "Laporan bulanan ringkas",
      ],
      ctaText: "Pilih Paket Basic",
    },
    {
      name: "Standard",
      price: "Rp 2.150.000",
      period: "/bulan",
      tagline: "Seimbang untuk scale & efisiensi",
      popular: true, // ⭐ Rekomendasi
      features: [
        "Pixel + Conversions API (CAPI) dasar",
        "2–3 campaign, 6–10 ad set",
        "8+ kreatif (feed/reels/stories) + A/B copy",
        "Custom & Lookalike Audience (1–3%)",
        "Remarketing 7–30 hari",
        "Optimasi mingguan (bid/budget/audience)",
        "Laporan mingguan + bulanan",
      ],
      ctaText: "Pilih Paket Standard",
    },
    {
      name: "Premium",
      price: "Rp 3.750.000",
      period: "/bulan",
      tagline: "Agresif dengan kontrol penuh",
      features: [
        "Pixel + CAPI advance (event prioritas)",
        "3–5 campaign, 12+ ad set (multi-objektif)",
        "12+ kreatif (UGC, hooks, variabel CTA)",
        "Segmentasi LLA 1–10% + stacked interest",
        "Dynamic/Advantage+ placements & catalog",
        "Optimasi 2×/minggu + audit bulanan",
        "Laporan detail + insight growth call 2×/bln",
      ],
      ctaText: "Pilih Paket Premium",
    },
  ];

  return (
    <section id="pricing" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Paket Harga Meta Ads</h2>
        <p className="text-lg text-gray-600">
          Sesuaikan paket dengan tujuan Anda—awareness, leads, atau sales. Semua paket termasuk setup, optimasi, dan laporan transparan.
        </p>
        <p className="text-xs text-gray-500 mt-2">*Harga belum termasuk biaya iklan (ad spend) di Meta.</p>
      </div>

      {/* Grid Plans */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition ${
              p.popular ? "border-[#1f2b80]" : "border-gray-200"
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-[#1f2b80] text-white px-3 py-1 text-xs font-semibold shadow">
                <Star className="w-4 h-4" /> Rekomendasi
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="text-gray-600 mt-1">{p.tagline}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold">{p.price}</span>
                <span className="text-gray-500">{p.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1f2b80]" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`w-full inline-flex justify-center items-center rounded-xl px-4 py-3 font-semibold transition ${
                p.popular
                  ? "bg-[#1f2b80] text-white hover:opacity-90"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {p.ctaText}
            </a>

            <p className="text-[11px] text-gray-500 mt-3">
              Minimal kontrak 1 bulan. Upgrade paket kapan saja.
            </p>
          </div>
        ))}
      </div>

      {/* Note tambahan (opsional) */}
      <div className="max-w-3xl mx-auto mt-10 text-center text-sm text-gray-600">
        Add-ons: Creative production (UGC/ads set), Landing page, Lead form integration, Catalog setup. Hubungi kami untuk penawaran.
      </div>
    </section>
  );
}
