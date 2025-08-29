// File: src/components/sections/PortfolioSection.jsx
// Revisi: Tombol Demo/Preview dipindah ke bawah kartu (bukan di samping judul)

import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

export default function PortfolioSection() {
  const ITEMS = [
    {
      id: 1,
      title: "Landing Page — Startup Apps",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      href: "#",
    },
    {
      id: 2,
      title: "Company Profile — PT Maju Jaya",
      category: "Company Profile",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      href: "#",
    },
    {
      id: 3,
      title: "Website Sekolah — SMP Cahaya Bangsa",
      category: "Website Sekolah",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
      href: "#",
    },
    {
      id: 4,
      title: "Ecommerce — Toko Online Nusantara",
      category: "Ecommerce",
      image: "https://images.unsplash.com/photo-1547658719-8be6922d5f36?q=80&w=1200&auto=format&fit=crop",
      href: "#",
    },
  ];

  const [preview, setPreview] = useState(null);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="md:mt-3 text-3xl md:text-4xl font-bold text-[#111a4c]">Portofolio Website</h2>
          <p className="mt-3 text-gray-600 md:text-lg">Berbagai jenis website yang telah kami kerjakan untuk klien.</p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow hover:shadow-lg transition">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{item.category}</p>

                {/* Tombol di bawah */}
                <div className="mt-4 flex gap-2">
                  <button
                    className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold hover:bg-gray-50"
                    onClick={() => setPreview(item)}
                  >
                    Preview
                  </button>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Preview */}
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <button
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                onClick={() => setPreview(null)}
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={preview.image} alt={preview.title} className="h-80 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{preview.title}</h3>
                <p className="mt-1 text-sm text-gray-600">Kategori: {preview.category}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={preview.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4" /> Lihat Demo
                  </a>
                  <button
                    onClick={() => setPreview(null)}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
