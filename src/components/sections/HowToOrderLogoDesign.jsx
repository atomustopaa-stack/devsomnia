import { MessageSquare, Brush, Layers, FileCheck, ArrowRight } from "lucide-react";

export default function HowToOrderLogoDesign() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konsultasi & Brief",
      desc: "Ceritakan visi brand, preferensi gaya, warna, contoh referensi, dan penggunaan logo.",
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Explorasi Konsep",
      desc: "Kami kembangkan beberapa konsep logo berdasarkan brief & strategi brand.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Revisi Terarah",
      desc: "Penyempurnaan bentuk, proporsi, warna, dan tipografi hingga siap final.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Final & Deliverables",
      desc: "Serah terima file lengkap + mini guideline agar konsisten di semua media.",
    },
  ];

  return (
    <section id="how-to-order" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Cara Memulai</h2>
        <p className="text-lg text-gray-600">Proses ringkas, kolaboratif, dan transparan.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
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
          href="https://wa.me/6285722511172?text=Halo%20Devsomnia%2C%20saya%20ingin%20konsultasi%20Desain%20Logo."
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
