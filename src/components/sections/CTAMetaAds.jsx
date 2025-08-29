import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTAMetaAds() {
  return (
    <section className="relative bg-[#1f2b80] text-white py-20 overflow-hidden">
      {/* Background pattern (opsional) */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/image/pattern/grid.svg"
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Siap Tingkatkan Bisnis dengan Meta Ads?
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          Raih lebih banyak pelanggan melalui iklan Facebook & Instagram.
          Tim Devsomnia siap membantu Anda dari setup hingga optimasi berkelanjutan.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/6285722511172?text=Halo%20Devsomnia%2C%20saya%20ingin%20konsultasi%20tentang%20Meta%20Ads."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1f2b80] font-semibold hover:bg-gray-100 transition shadow"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white font-semibold hover:bg-white/10 transition"
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
