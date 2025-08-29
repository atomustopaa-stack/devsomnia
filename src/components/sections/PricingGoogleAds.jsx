import { Check, Star } from "lucide-react";

export default function PricingGoogleAds() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 1.250.000",
      period: "/bulan",
      tagline: "Cocok untuk mulai uji pasar",
      features: [
        "Riset keyword dasar (10–20 kata kunci)",
        "1–2 campaign, 3–5 ad group",
        "3 variasi iklan (RSA/Expanded)",
        "Ekstensi iklan dasar (sitelink, callout)",
        "Penjadwalan iklan & lokasi",
        "Optimasi mingguan ringan",
        "Laporan bulanan ringkas",
      ],
      ctaText: "Pilih Paket Basic",
      popular: false,
    },
    {
      name: "Standard",
      price: "Rp 2.250.000",
      period: "/bulan",
      tagline: "Balance antara skala & efisiensi",
      features: [
        "Riset keyword menengah (30–60 kata kunci)",
        "2–3 campaign, 6–10 ad group",
        "6+ variasi iklan (A/B testing)",
        "Ekstensi lengkap (sitelink, callout, snippet, call)",
        "Tracking konversi (GA4 / Tag Manager)",
        "Optimasi mingguan (bid, budget, query negative)",
        "Laporan mingguan + bulanan",
      ],
      ctaText: "Pilih Paket Standard",
      popular: true, // ⭐ Direkomendasikan
    },
    {
      name: "Premium",
      price: "Rp 3.900.000",
      period: "/bulan",
      tagline: "Skala agresif & optimasi intensif",
      features: [
        "Riset keyword advance (80+ kata kunci)",
        "3–5 campaign, 12+ ad group (Search/Performance Max)",
        "10+ variasi iklan + sitelink khusus penawaran",
        "Custom audience & remarketing",
        "Setup konversi micro & revenue (ecommerce/lead score)",
        "Optimasi 2×/minggu + audit bulanan",
        "Laporan detail + insight growth",
        "Sesi konsultasi strategi 2×/bulan",
      ],
      ctaText: "Pilih Paket Premium",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Paket Harga Google Ads</h2>
        <p className="text-lg text-gray-600">
          Pilih paket sesuai kebutuhan dan skala bisnis Anda. Semua paket termasuk setup, optimasi,
          dan laporan performa yang transparan.
        </p>
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
              <p className="text-xs text-gray-500 mt-2">
                *Belum termasuk biaya iklan (ad spend) di Google.
              </p>
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
              Minimal kontrak 1 bulan. Bisa upgrade kapan saja.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
