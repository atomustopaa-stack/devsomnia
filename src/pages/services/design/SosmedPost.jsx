import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sosmed() {
  return (
    <>
      <title>Jasa Desain Sosial Media – Devsomnia</title>
      <meta
        name="description"
        content="Layanan desain sosial media Devsomnia saat ini sudah penuh. Silakan kembali ke halaman utama."
      />

      <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Layanan Desain Sosial Media Saat Ini Penuh 🚫
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-10">
          Terima kasih atas minat Anda. Untuk sementara, layanan desain sosial media Devsomnia
          tidak tersedia karena kuota penuh. Silakan cek layanan kami yang lain.
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
