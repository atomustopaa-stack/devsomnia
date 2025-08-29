import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function TiktokAds() {
  return (
    <>
      <title>Jasa Iklan TikTok Ads – Devsomnia</title>
      <meta
        name="description"
        content="Layanan TikTok Ads Devsomnia saat ini sudah penuh. Silakan kembali ke halaman utama untuk melihat layanan lainnya."
      />

      <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Layanan TikTok Ads Saat Ini Penuh 🚫
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-10">
          Terima kasih atas minat Anda. Untuk sementara, layanan TikTok Ads Devsomnia tidak
          tersedia karena kuota penuh. Silakan jelajahi layanan lain kami.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1f2b80] text-white font-semibold hover:opacity-90 transition"
        >
          <Home className="w-5 h-5" />
          Kembali ke Home
        </Link>
      </section>
    </>
  );
}
