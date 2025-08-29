import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Halaman tidak ditemukan.</p>
      <Link to="/" className="px-4 py-2 rounded-lg bg-gray-900 text-white">Kembali ke Home</Link>
    </section>
  );
}