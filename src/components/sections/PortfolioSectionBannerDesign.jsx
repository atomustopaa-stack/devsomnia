import { useEffect, useMemo, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioSectionBannerDesign({ items, initialCount = 9 }) {
  const DUMMY = useMemo(
    () => [
      { src: "/image/portfolio/banner/b1.jpg", title: "Banner Promo Diskon", desc: "Desain banner e-commerce untuk promo diskon 50%." },
      { src: "/image/portfolio/banner/b2.jpg", title: "Banner Event Kampus", desc: "Event universitas dengan tema edukasi modern." },
      { src: "/image/portfolio/banner/b3.jpg", title: "Banner Restoran", desc: "Desain banner menu baru resto dengan gaya kekinian." },
      { src: "/image/portfolio/banner/b4.jpg", title: "Banner Workshop", desc: "Workshop teknologi dengan visual dinamis." },
      { src: "/image/portfolio/banner/b5.jpg", title: "Banner Festival Musik", desc: "Konser musik lokal, warna berani & energik." },
      { src: "/image/portfolio/banner/b6.jpg", title: "Banner Grand Opening", desc: "Grand opening toko fashion dengan nuansa elegan." },
    ],
    []
  );

  const data = items?.length ? items : DUMMY;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleItems = data.slice(0, visibleCount);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openModal = (i) => { setActive(i); setOpen(true); document.documentElement.style.overflow = "hidden"; };
  const closeModal = useCallback(() => { setOpen(false); document.documentElement.style.overflow = ""; }, []);
  const next = useCallback(() => setActive((i) => (i + 1) % data.length), [data.length]);
  const prev = useCallback(() => setActive((i) => (i - 1 + data.length) % data.length), [data.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") closeModal(); if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal, next, prev]);

  return (
    <section id="portfolio" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Portofolio Desain Banner</h2>
        <p className="text-lg text-gray-600">Klik gambar untuk melihat detail banner.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {visibleItems.map((item, idx) => (
          <button key={idx} onClick={() => openModal(idx)} className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
            <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/25 transition" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition p-4">
              <div className="rounded-lg bg-white/90 backdrop-blur px-3 py-2 text-left">
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">{item.title}</p>
                <p className="text-xs text-gray-600 line-clamp-1">{item.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="mt-8 text-center">
          <button onClick={() => setVisibleCount((c) => Math.min(c + 6, data.length))} className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition">
            Tampilkan Lebih Banyak
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative z-[81] w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            <button onClick={closeModal} className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition">
              <X className="h-5 w-5" />
            </button>

            <div className="relative bg-gray-50">
              <img src={data[active].src} alt={data[active].title} className="w-full object-contain max-h-[70vh]" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
                <button onClick={prev} className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white transition shadow">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={next} className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white transition shadow">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold">{data[active].title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{data[active].desc}</p>
              <p className="mt-4 text-sm text-gray-500">{active + 1} / {data.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
