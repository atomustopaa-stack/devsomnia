import { PenTool, ArrowRight } from "lucide-react";

export default function HeroLogoDesign() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/image/hero/logo-design-hero.jpg" // dummy
          alt="Desain Logo Profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b173d]/80" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 py-28 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
          <PenTool className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Jasa Desain Logo Profesional
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Bangun identitas brand yang kuat, unik, dan mudah diingat—siap digunakan di semua media.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="px-6 py-3 rounded-xl bg-white text-[#1f2b80] font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Lihat Paket
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#how-to-order"
            className="px-6 py-3 rounded-xl border border-white font-semibold hover:bg-white/10 transition"
          >
            Cara Order
          </a>
        </div>
      </div>
    </section>
  );
}
