import { Check, Star } from "lucide-react";

export default function PricingBannerDesign() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 350.000",
      tagline: "Cocok untuk kebutuhan satu kali",
      features: [
        "1 desain banner",
        "2 kali revisi minor",
        "Format JPG/PNG (hi-res)",
      ],
      ctaText: "Pilih Paket Basic",
    },
    {
      name: "Standard",
      price: "Rp 650.000",
      tagline: "Hemat untuk kebutuhan rutin",
      popular: true,
      features: [
        "3 desain banner",
        "3 kali revisi",
        "Format JPG/PNG (hi-res)",
        "File sumber (AI/PSD)",
      ],
      ctaText: "Pilih Paket Standard",
    },
    {
      name: "Premium",
      price: "Rp 1.200.000",
      tagline: "Untuk brand dengan campaign besar",
      features: [
        "6 desain banner",
        "Unlimited minor tweak (1 minggu)",
        "Format lengkap (AI/PSD/JPG/PNG)",
        "Mockup preview banner",
      ],
      ctaText: "Pilih Paket Premium",
    },
  ];

  return (
    <section id="pricing" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Paket Desain Banner</h2>
        <p className="text-lg text-gray-600">Pilih paket sesuai kebutuhan event, promosi, atau branding Anda.</p>
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
              <span className="text-3xl font-extrabold">{p.price}</span>
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
