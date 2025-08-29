import { MessageSquare, Target, Rocket, FileBarChart2, ArrowRight } from "lucide-react";

export default function HowToOrderGoogleAds() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konsultasi & Brief",
      desc: "Ceritakan tujuan bisnis, target audiens, lokasi, dan budget iklan yang diinginkan.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Riset & Rencana",
      desc: "Kami riset keyword, kompetitor, dan menyusun struktur campaign/ad group + estimasi hasil.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Setup & Launch",
      desc: "Pembuatan campaign (Search/PMAX), copy iklan, ekstensi, serta tracking konversi.",
    },
    {
      icon: <FileBarChart2 className="w-6 h-6" />,
      title: "Optimasi & Laporan",
      desc: "Monitoring performa, optimasi bid/negatives, dan laporan rutin yang transparan.",
    },
  ];

  return (
    <section id="how-to-order" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Cara Memulai</h2>
        <p className="text-lg text-gray-600">
          Proses rapi dan mudah diikuti—Anda fokus pada bisnis, kami urus iklan dan performanya.
        </p>
      </div>

      {/* Timeline / Steps */}
      <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1f2b80] text-white">
              {s.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            {/* Step number */}
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1f2b80] text-white font-semibold hover:opacity-90 transition"
        >
          Konsultasi Gratis
          <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/6285722511172?text=Halo%20Devsomnia%2C%20saya%20ingin%20konsultasi%20Google%20Ads."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition"
        >
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
