import { MessageSquare, Brush, FileCheck, ArrowRight } from "lucide-react";

export default function HowToOrderBannerDesign() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konsultasi & Brief",
      desc: "Ceritakan ukuran banner, tujuan, dan gaya desain yang diinginkan.",
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Desain & Draft",
      desc: "Kami buat draft banner sesuai brief. Anda bisa review dan beri masukan.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Revisi & Final",
      desc: "Revisi sesuai feedback hingga final. File diserahkan lengkap, siap cetak/digital.",
    },
  ];

  return (
    <section id="how-to-order" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Cara Memesan</h2>
        <p className="text-lg text-gray-600">Proses mudah & cepat, sesuai kebutuhan event/promosi Anda.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1f2b80] text-white">
              {s.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-bold">
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition"
        >
          Konsultasi Gratis
        </a>
        <a
          href="https://wa.me/6285722511172?text=Halo%20Devsomnia%2C%20saya%20ingin%20pesan%20desain%20banner."
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1f2b80] text-white font-semibold hover:opacity-90 transition"
        >
          Chat via WhatsApp
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
