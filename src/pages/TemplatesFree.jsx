import { useMemo, useState, useCallback, useEffect } from "react";

// Tailwind assumed configured in project
// Small hero + tabs (Website / Desain) + grid + modal preview + CTA

export default function TemplatesFree() {
  const [activeTab, setActiveTab] = useState("website"); // 'website' | 'desain'
  const [websiteClicks, setWebsiteClicks] = useState(0); // "Lihat lainnya" clicks (max 2)
  const [desainClicks, setDesainClicks] = useState(0);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const websiteTemplates = useMemo(
    () => [
      { id: 1,  title: "Agency Clean UI",     img: "https://picsum.photos/id/1011/900/560", demoUrl: "https://example.com/demo/agency-clean" },
      { id: 2,  title: "Portfolio Minimal",   img: "https://picsum.photos/id/1015/900/560", demoUrl: "https://example.com/demo/portfolio-min" },
      { id: 3,  title: "Company Profile Pro", img: "https://picsum.photos/id/1020/900/560", demoUrl: "https://example.com/demo/company-pro" },
      { id: 4,  title: "Landing SaaS",        img: "https://picsum.photos/id/1035/900/560", demoUrl: "https://example.com/demo/landing-saas" },
      { id: 5,  title: "E‑Commerce Lite",     img: "https://picsum.photos/id/1043/900/560", demoUrl: "https://example.com/demo/ecommerce-lite" },
      { id: 6,  title: "Sekolah Modern",      img: "https://picsum.photos/id/1060/900/560", demoUrl: "https://example.com/demo/sekolah-modern" },
      { id: 7,  title: "Klinik Health",       img: "https://picsum.photos/id/1074/900/560", demoUrl: "https://example.com/demo/klinik-health" },
      { id: 8,  title: "Restoran Rasa",       img: "https://picsum.photos/id/1080/900/560", demoUrl: "https://example.com/demo/restoran-rasa" },
      { id: 9,  title: "Event Conference",    img: "https://picsum.photos/id/1084/900/560", demoUrl: "https://example.com/demo/event-conf" },
      { id: 10, title: "Konstruksi Solid",    img: "https://picsum.photos/id/1081/900/560", demoUrl: "https://example.com/demo/konstruksi-solid" },
      { id: 11, title: "Travel Explorer",     img: "https://picsum.photos/id/1018/900/560", demoUrl: "https://example.com/demo/travel-explorer" },
    ],
    []
  );

  const desainTemplates = useMemo(
    () => [
      { id: 1,  title: "Poster Promo 1", img: "https://picsum.photos/id/237/900/560" },
      { id: 2,  title: "Banner Event",   img: "https://picsum.photos/id/1000/900/560" },
      { id: 3,  title: "Feed Sosmed 1",  img: "https://picsum.photos/id/1003/900/560" },
      { id: 4,  title: "Flyer A5",       img: "https://picsum.photos/id/1005/900/560" },
      { id: 5,  title: "Poster Promo 2", img: "https://picsum.photos/id/1006/900/560" },
      { id: 6,  title: "Feed Sosmed 2",  img: "https://picsum.photos/id/1008/900/560" },
      { id: 7,  title: "Banner Web",     img: "https://picsum.photos/id/1012/900/560" },
      { id: 8,  title: "Kartu Nama",     img: "https://picsum.photos/id/1013/900/560" },
      { id: 9,  title: "Poster Event",   img: "https://picsum.photos/id/1014/900/560" },
      { id: 10, title: "Feed Promo 3",   img: "https://picsum.photos/id/1016/900/560" },
      { id: 11, title: "Banner Besar",   img: "https://picsum.photos/id/1021/900/560" },
    ],
    []
  );

  // Show logic: initial 5, then +3 per click (max 2 clicks)
  const websiteVisibleCount = 5 + Math.min(websiteClicks, 2) * 3;
  const desainVisibleCount  = 5 + Math.min(desainClicks, 2) * 3;

  const list         = activeTab === "website" ? websiteTemplates : desainTemplates;
  const visibleCount = activeTab === "website" ? websiteVisibleCount : desainVisibleCount;
  const visibleList  = list.slice(0, Math.min(visibleCount, list.length));

  const openModalAt = useCallback((idx) => { setCurrentIndex(idx); setIsOpen(true); }, []);
  const closeModal  = useCallback(() => setIsOpen(false), []);
  const nextInModal = useCallback(() => { setCurrentIndex((p) => (p + 1) % list.length); }, [list.length]);
  const prevInModal = useCallback(() => { setCurrentIndex((p) => (p - 1 + list.length) % list.length); }, [list.length]);

  // Close on ESC + arrows
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextInModal();
      if (e.key === "ArrowLeft")  prevInModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal, nextInModal, prevInModal]);

  const whatsappNumber = "6281214708165"; // tujuan WA (tanpa +)
  const googleDownload = "https://www.google.com/"; // download gratis diarahkan ke google

  const isWebsite   = activeTab === "website";
  const currentItem = list[currentIndex];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Hero: match About/Blog (biru #1f2b80 + ornamen) ===== */}
      <section className="relative overflow-hidden text-white">
        {/* Warna dasar */}
        <div className="absolute inset-0" style={{ backgroundColor: "#1f2b80" }} />

        {/* Glow radial agar tidak flat */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl" />

        {/* Pola grid tipis */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="grid-templates" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-templates)" />
        </svg>

        {/* Konten hero */}
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            ✨ Gratis • Update mingguan
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Koleksi Template Menarik, Siap Pakai
          </h1>
          <span className="mt-3 inline-block h-[3px] w-28 rounded-full bg-white/70" />
          <p className="mt-6 text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto">
            Website & desain grafis yang modern, clean, dan konversi‑ready. Preview cepat, unduh gratis, atau pakai sebagai starting point proyekmu.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("website")}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold border shadow-sm transition ${
                activeTab === "website" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15 text-white border-white/30"
              }`}
            >
              Jelajahi Template Website
            </button>
            <button
              onClick={() => setActiveTab("desain")}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold border shadow-sm transition ${
                activeTab === "desain" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15 text-white border-white/30"
              }`}
            >
              Jelajahi Template Desain
            </button>
          </div>
        </div>
      </section>

      {/* ===== Tabs (lebar ROM) ===== */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8">
        <div className="inline-flex rounded-xl border bg-gray-50 p-1 gap-1">
          <TabButton active={activeTab === "website"} onClick={() => setActiveTab("website")}>Website</TabButton>
          <TabButton active={activeTab === "desain"}  onClick={() => setActiveTab("desain")}>Desain</TabButton>
        </div>
      </div>

      {/* ===== Grid (lebar ROM) ===== */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[1fr]">
          {visibleList.map((item, idx) => (
            <CardItem key={item.id} item={item} index={idx} onClick={() => openModalAt(idx)} />
          ))}
        </div>

        {/* Lihat lainnya (maks 2x) */}
        {((activeTab === "website" && websiteClicks < 2 && visibleCount < websiteTemplates.length) ||
          (activeTab === "desain"  && desainClicks  < 2 && visibleCount < desainTemplates.length)) && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                if (activeTab === "website") setWebsiteClicks((c) => Math.min(2, c + 1));
                else setDesainClicks((c) => Math.min(2, c + 1));
              }}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Lihat Lainnya
            </button>
            <p className="text-xs text-gray-500 mt-2">Munculkan 3 item lagi (maksimal 2x)</p>
          </div>
        )}
      </section>

      {/* ===== Modal Preview ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b">
                <h3 className="font-semibold text-lg truncate pr-8">{currentItem?.title}</h3>
                <button onClick={closeModal} className="p-2 rounded-full hover:bg-gray-100" aria-label="Tutup">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="relative">
                <img src={currentItem?.img} alt={currentItem?.title} className="w-full max-h-[70vh] object-contain bg-gray-50" />
                <button onClick={prevInModal} className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow hover:bg-white" aria-label="Sebelumnya">‹</button>
                <button onClick={nextInModal} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow hover:bg-white" aria-label="Berikutnya">›</button>
              </div>

              {/* Footer actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t">
                <div className="text-sm text-gray-500">{currentIndex + 1} / {list.length}</div>
                <div className="flex flex-wrap gap-2">
                  <a href={googleDownload} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium">
                    Download Gratis
                  </a>
                  {isWebsite && (
                    <>
                      <a href={currentItem?.demoUrl || "#"} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90 text-sm font-medium">
                        Demo
                      </a>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          `Halo, saya mau membuat website dengan desain seperti ini: ${currentItem?.title}. Bisa dibantu?`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:opacity-90 text-sm font-medium"
                      >
                        Gunakan Desain Ini
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CTA Section (lebar ROM) ===== */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 pb-16 pt-6">
        <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Butuh bantuan memilih atau kustom desain?</h3>
            <p className="text-white/80 max-w-2xl">Tim kami siap bantu memilih template terbaik dan menyesuaikan sesuai kebutuhan bisnis kamu.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo! Saya butuh bantuan memilih/kustom template gratis.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:opacity-90 font-semibold"
            >
              Konsultasi via WhatsApp
            </a>
            <a
              href={googleDownload}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-semibold"
            >
              Lihat Semua Template
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition border ${
        active
          ? "bg-white shadow-sm border-gray-200 text-black"
          : "bg-gray-50 hover:bg-white text-gray-700 border-transparent"
      }`}
      type="button"
    >
      {children}
    </button>
  );
}

function CardItem({ item, index, onClick }) {
  const badge = item.demoUrl ? "Website" : "Desain";
  const isNew = index < 3; // tandai 3 item pertama sebagai "Baru"
  return (
    <div className="group relative rounded-2xl overflow-hidden border bg-white shadow-[0_1px_0_rgba(0,0,0,.04)] transition hover:-translate-y-0.5 hover:shadow-lg">
      <button type="button" className="absolute inset-0 z-10" onClick={onClick} aria-label={`Preview ${item.title}`}></button>

      <div className="relative">
        <img src={item.img} alt={item.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-gray-800 ring-1 ring-black/5">
            {badge}
          </span>
          {isNew && (
            <span className="inline-flex items-center rounded-full bg-emerald-500 text-white px-2 py-1 text-[10px] font-bold shadow">
              Baru
            </span>
          )}
        </div>
        {/* overlay callout */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 opacity-0 transition group-hover:bg-black/10 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold truncate">{item.title}</h3>
          <span className="text-xs text-gray-500">Gratis</span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>Klik untuk preview</span>
          <span className="opacity-0 group-hover:opacity-100 transition">Lihat ›</span>
        </div>
      </div>
    </div>
  );
}
