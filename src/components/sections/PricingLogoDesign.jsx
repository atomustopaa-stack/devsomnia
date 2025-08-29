import { Check, Star } from "lucide-react";

export default function PricingLogoDesign() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 850.000",
      period: "",
      tagline: "Cocok untuk UMKM/startup awal",
      features: [
        "2 konsep logo awal",
        "2 kali revisi terarah",
        "Format PNG/JPG (hi-res)",
        "Panduan penggunaan singkat",
      ],
      ctaText: "Pilih Paket Basic",
    },
    {
      name: "Standard",
      price: "Rp 1.650.000",
      period: "",
      tagline: "Seimbang: lengkap & hemat",
      popular: true,
      features: [
        "3–4 konsep logo",
        "3 kali revisi",
        "Master file AI/SVG + PNG/JPG",
        "Paket warna utama & turunan",
        "Mockup presentasi (brand in use)",
      ],
      ctaText: "Pilih Paket Standard",
    },
    {
      name: "Premium",
      price: "Rp 2.900.000",
      period: "",
      tagline: "Untuk brand yang butuh sistem",
      features: [
        "4–6 konsep logo + eksplorasi",
        "Unlimited minor tweak (2 minggu)",
        "Master file lengkap (AI/SVG/PNG/JPG/PDF)",
        "Mini brand guideline (warna, tipografi, clearspace, do & don't)",
        "Aplikasi logo (profile sosmed, favicon, watermark)",
      ],
      ctaText: "Pilih Paket Premium",
    },
  ];

  return (
    <section id="pricing" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Paket Desain Logo</h2>
        <p className="text-lg text-gray-600">Pilih paket sesuai kebutuhan brand Anda.</p>
      </div>

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
                {p.period && <span className="text-gray-500">{p.period}</span>}
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
              href="#how-to-order"
              className={`w-full inline-flex justify-center items-center rounded-xl px-4 py-3 font-semibold transition ${
                p.popular
                  ? "bg-[#1f2b80] text-white hover:opacity-90"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {p.ctaText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
