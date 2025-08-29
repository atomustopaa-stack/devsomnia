// src/components/sections/WhyUsALL.jsx
import { ThumbsUp, ShieldCheck, Rocket, Users } from "lucide-react";

export default function WhyUsALL() {
  const reasons = [
    { icon: <ThumbsUp className="w-8 h-8 text-sky-600" />, title: "Terpercaya", desc: "Ratusan klien telah mempercayakan pembuatan website mereka pada kami dengan hasil memuaskan." },
    { icon: <ShieldCheck className="w-8 h-8 text-sky-600" />, title: "Bergaransi", desc: "Setiap project kami dukung dengan garansi revisi agar website sesuai ekspektasi bisnis Anda." },
    { icon: <Rocket className="w-8 h-8 text-sky-600" />, title: "Cepat & Efisien", desc: "Proses pengerjaan cepat tanpa mengorbankan kualitas desain maupun performa website." },
    { icon: <Users className="w-8 h-8 text-sky-600" />, title: "Support Ramah", desc: "Tim kami siap membantu dan memberikan dukungan bahkan setelah website selesai dibuat." },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kenapa Harus Kami?</h2>
        <p className="mt-3 text-gray-600">
          Kami memberikan solusi terbaik agar bisnis Anda memiliki website yang kredibel, mudah diakses, dan siap
          meningkatkan kepercayaan klien.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 mb-4">{r.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{r.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
