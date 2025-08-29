// src/components/PortfolioSection.jsx
import { useMemo, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ExternalLink, Plus } from "lucide-react";

export default function PortfolioSection() {
  const SERVICES = [
    { name: "Landing Page", to: "/services/website/landing-page" },
    { name: "Company Profile", to: "/services/website/company-profile" },
    { name: "Website Sekolah", to: "/services/website/sekolah" },
    { name: "Ecommerce", to: "/services/website/ecommerce" },
    { name: "Website Custom", to: "/services/website/custom" },
    { name: "Maintenance Website", to: "/services/website/maintenance" },
    { name: "SEO", to: "/services/seo" },
    { name: "UI/UX Design", to: "/services/ui-ux" },
    { name: "Google Ads", to: "/services/ads/google-ads" },
    { name: "Meta Ads", to: "/services/ads/meta-ads" },
    { name: "Tiktok Ads", to: "/services/ads/tiktok-ads" },
  ];

  const ALL_ITEMS = useMemo(() => {
    const items = Array.from({ length: 15 }).map((_, i) => {
      const s = SERVICES[i % SERVICES.length];
      return {
        id: i + 1,
        title: `${s.name} – Project ${String(i + 1).padStart(2, "0")}`,
        service: s.name,
        to: s.to,
        src: "/image/about/about-hero.jpg",
      };
    });
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, []);

  const [visibleCount, setVisibleCount] = useState(6);
  const canShowMore = visibleCount < ALL_ITEMS.length;
  const showMore = () => setVisibleCount((v) => Math.min(v + 3, ALL_ITEMS.length));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = ALL_ITEMS.slice(0, visibleCount);

  const openAt = useCallback((i) => { setIndex(i); setOpen(true); }, []);
  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  return (
    <section id="portfolio" className="relative bg-[#DDF4E7] mt-12 md:mt-16 mb-16 md:mb-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-20">
        {/* Header dengan style ornamen + H2 */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
            Portofolio Kami
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#111a4c]">
            Portfolio
          </h2>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-8">
            Contoh hasil kerja dari berbagai layanan. <b>Klik gambar</b> untuk melihat pratinjau.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => openAt(i)}
              className="group relative overflow-hidden rounded-[10px] shadow hover:shadow-lg transition"
            >
              <img src={it.src} alt={it.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
                <div className="w-full p-4">
                  <p className="text-sm/5 font-medium">{it.title}</p>
                  <span className="text-xs/5 opacity-80">{it.service}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {canShowMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-slate-900 text-white hover:bg-black transition shadow"
            >
              <Plus size={18} /> Selengkapnya
            </button>
          </div>
        )}
      </div>

      {/* Modal preview (sama seperti sebelumnya) */}
      {open && items.length > 0 && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4">
            <div className="relative w-[96%] max-w-2xl rounded-[10px] bg-white shadow-xl overflow-hidden">
              <button
                onClick={close}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/90 shadow hover:bg-white"
                aria-label="Tutup"
              >
                <X size={18} />
              </button>

              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div>
                  <p className="text-xs text-slate-500">{items[index].service}</p>
                  <h3 className="text-base font-semibold text-slate-900">{items[index].title}</h3>
                </div>
              </div>

              <div className="relative bg-slate-100">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img src={items[index].src} alt={items[index].title} className="w-full h-full object-cover" />
                </div>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"><ChevronLeft /></button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"><ChevronRight /></button>
              </div>

              <div className="flex items-center justify-between px-4 py-3 border-t">
                <div className="text-xs text-slate-500">{index + 1} / {items.length}</div>
                <div className="flex items-center gap-2 md:gap-3">
                  <button onClick={prev} className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-2"><ChevronLeft size={16}/>Sebelumnya</button>
                  <button onClick={next} className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-black text-white inline-flex items-center gap-2">Selanjutnya<ChevronRight size={16}/></button>
                  <Link to={items[index].to} className="px-3 py-2 rounded-lg bg-lime-400 hover:bg-lime-300 text-slate-900 inline-flex items-center gap-2">
                    Selengkapnya <ExternalLink size={16}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
