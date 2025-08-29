import { MessageSquare, Users, Rocket, BarChart3, ArrowRight } from "lucide-react";

export default function HowToOrderMetaAds() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konsultasi & Brief",
      desc: "Sampaikan tujuan kampanye (awareness, leads, sales), target audiens, konten/produk, dan kisaran budget.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience & Creative Plan",
      desc: "Kami susun segmentasi audiens (interest, custom/lookalike), format iklan (feed, reels, stories), dan konsep kreatif.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Setup & Launch",
      desc: "Pemasangan Meta Pixel/Conversions API, struktur campaign/ad set, penulisan copy, upload kreatif, lalu peluncuran.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Optimasi & Laporan",
      desc: "Optimasi rutin (bid, budget, audience, kreatif A/B), laporan performa terukur + insight tindak lanjut.",
    },
  ];

  return (
    <section id="how-to-order" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Cara Memulai Meta Ads</h2>
        <p className="text-lg text-gray-600">
          Proses ringkas, transparan, dan terstruktur—Anda fokus pada bisnis, kami urus iklan & hasilnya.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1f2b80] text-white">
              {s.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>

            {/* Number badge */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-bold">
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition"
        >
          Konsultasi Gratis
        </a>
        <a
          href="https://wa.me/6285722511172?text=Halo%20Devsomnia%2C%20saya%20ingin%20konsultasi%20Meta%20Ads."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1f2b80] text-white font-semibold hover:opacity-90 transition"
        >
          Chat via WhatsApp
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
