import { useEffect, useMemo, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * PortfolioSectionMetaAds.jsx
 * - Grid gambar (responsive) khusus Meta Ads
 * - Klik item → Modal tampilkan gambar besar + judul + deskripsi
 * - Navigasi: Next (wajib), juga Prev & ESC untuk UX lebih baik
 * - Keyboard: ESC (close), ← → (prev/next)
 * - Tombol "Tampilkan Lebih Banyak"
 *
 * Opsional props:
 * - items: [{ src, title, desc }]  // override data default
 * - initialCount: jumlah item awal yang ditampilkan (default 9)
 */
export default function PortfolioSectionMetaAds({
  items,
  initialCount = 9,
}) {
  const META_ITEMS = useMemo(
    () => [
      {
        src: "/image/portfolio/meta/meta-1.jpg",
        title: "Reels Conversion – UGC Hooks",
        desc:
          "Pengujian 6 variasi UGC (hook berbeda) pada Reels. CPA turun 24% dengan CTR naik 38%.",
      },
      {
        src: "/image/portfolio/meta/meta-2.jpg",
        title: "Stories Lead Gen – CAPI",
        desc:
          "Integrasi Meta Pixel + Conversions API, validasi nomor otomatis. Biaya per lead lebih stabil.",
      },
      {
        src: "/image/portfolio/meta/meta-3.jpg",
        title: "Remarketing 7–30 Hari",
        desc:
          "Segmentasi audience berdasarkan interaksi & kunjungan. ROAS meningkat pada fase retarget.",
      },
      {
        src: "/image/portfolio/meta/meta-4.jpg",
        title: "Advantage+ Placements",
        desc:
          "Memaksimalkan penempatan otomatis (feed, stories, reels). Skala impresi dengan efisiensi biaya.",
      },
      {
        src: "/image/portfolio/meta/meta-5.jpg",
        title: "Catalog Sales – DPA",
        desc:
          "Dynamic Product Ads dengan feed katalog. Menampilkan produk relevan untuk tiap pengguna.",
      },
      {
        src: "/image/portfolio/meta/meta-6.jpg",
        title: "Lookalike 1–3% Audience",
        desc:
          "LLA dari sumber purchase & add-to-cart. Kualitas traffic meningkat, volume konversi stabil.",
      },
      {
        src: "/image/portfolio/meta/meta-7.jpg",
        title: "Creative Testing Sprint",
        desc:
          "12 variasi kreatif: format square/vertical, CTA berbeda. Fatigue delay + performa lebih tahan lama.",
      },
      {
        src: "/image/portfolio/meta/meta-8.jpg",
        title: "Lead Form + CRM",
        desc:
          "Formulir instan Meta terhubung ke CRM. Follow-up cepat → peningkatan SQO secara signifikan.",
      },
      {
        src: "/image/portfolio/meta/meta-9.jpg",
        title: "Awareness to Consideration",
        desc:
          "Funnel 2 tahap: video views → traffic. Audience hangat masuk ke kampanye konversi.",
      },
      // Tambah bila perlu:
      {
        src: "/image/portfolio/meta/meta-10.jpg",
        title: "Re-engagement Campaign",
        desc:
          "Menjangkau kembali pengguna yang enggan checkout. Penawaran terbatas mendorong konversi.",
      },
      {
        src: "/image/portfolio/meta/meta-11.jpg",
        title: "UGC x Product Demo",
        desc:
          "Kombinasi demo produk + social proof singkat. Peningkatan watch-through rate pada Reels.",
      },
      {
        src: "/image/portfolio/meta/meta-12.jpg",
        title: "Advantage+ Shopping",
        desc:
          "Eksperimen Advantage+ Shopping untuk ecom. Pengayaan sinyal kreatif & audience broad.",
      },
    ],
    []
  );

  const data = items && items.length ? items : META_ITEMS;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleItems = data.slice(0, visibleCount);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openModal = (idx) => {
    setActive(idx);
    setOpen(true);
    // Lock scroll
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setOpen(false);
    document.documentElement.style.overflow = "";
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % data.length);
  }, [data.length]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + data.length) % data.length);
  }, [data.length]);

  // Keyboard handler: ESC / ← →
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal, next, prev]);

  return (
    <section id="portfolio" className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Portofolio Meta Ads</h2>
        <p className="text-lg text-gray-600">
          Klik gambar untuk melihat detail kampanye: ringkasan, insight, dan hasil singkat.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {visibleItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => openModal(idx)}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"
            aria-label={`Buka ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay hover */}
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/25 transition" />
            {/* Caption hover */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition p-4">
              <div className="rounded-lg bg-white/90 backdrop-blur px-3 py-2 text-left">
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                  {item.title}
                </p>
                <p className="text-xs text-gray-600 line-clamp-1">{item.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Load more */}
      {visibleCount < data.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + 6, data.length))}
            className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition"
          >
            Tampilkan Lebih Banyak
          </button>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Dialog */}
          <div className="relative z-[81] w-full max-w-5xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative bg-gray-50">
                <img
                  src={data[active].src}
                  alt={data[active].title}
                  className="h-full w-full object-cover"
                />

                {/* Prev/Next on image */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
                  <button
                    onClick={prev}
                    className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white transition shadow"
                    aria-label="Sebelumnya"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white transition shadow"
                    aria-label="Berikutnya"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold">{data[active].title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {data[active].desc}
                </p>

                {/* Controls */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-50 transition"
                  >
                    Prev
                  </button>
                  <button
                    onClick={next}
                    className="inline-flex items-center justify-center rounded-xl bg-[#1f2b80] px-4 py-2 font-semibold text-white hover:opacity-90 transition"
                  >
                    Next
                  </button>
                </div>

                {/* Counter */}
                <p className="mt-4 text-sm text-gray-500">
                  {active + 1} / {data.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
