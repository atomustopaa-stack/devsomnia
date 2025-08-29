import { useMemo, useState, useCallback, useEffect } from "react";

// Portfolio dengan 4 tab: Website, Desain, Iklan, SEO
// TailwindCSS assumed.

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("website"); // 'website' | 'desain' | 'iklan' | 'seo'
  const [loadClicks, setLoadClicks] = useState({ website: 0, desain: 0, iklan: 0, seo: 0 });

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappNumber = "6285722511172"; // WA admin Ato

  // ===== Dummy data per kategori =====
  const websiteItems = useMemo(() => [
    { id: 1, title: "Company Profile – Konstruksi Solid", img: "https://picsum.photos/id/1081/1200/700", liveUrl: "https://example.com/kontruksi-solid" },
    { id: 2, title: "Landing Page – SaaS Analytics",    img: "https://picsum.photos/id/1035/1200/700", liveUrl: "https://example.com/saas-analytics" },
    { id: 3, title: "E‑Commerce – Kopi Nusantara",       img: "https://picsum.photos/id/1043/1200/700", liveUrl: "https://example.com/kopi-nusantara" },
    { id: 4, title: "Sekolah – SMK Digital",             img: "https://picsum.photos/id/1060/1200/700", liveUrl: "https://example.com/smk-digital" },
    { id: 5, title: "Travel – Explorer",                 img: "https://picsum.photos/id/1018/1200/700", liveUrl: "https://example.com/travel-explorer" },
    { id: 6, title: "Klinik – HealthCare Pro",           img: "https://picsum.photos/id/1074/1200/700", liveUrl: "https://example.com/healthcare-pro" },
    { id: 7, title: "Restaurant – Rasa",                 img: "https://picsum.photos/id/1080/1200/700", liveUrl: "https://example.com/restaurant-rasa" },
    { id: 8, title: "Event – Conference 2025",           img: "https://picsum.photos/id/1084/1200/700", liveUrl: "https://example.com/event-conf" },
    { id: 9, title: "Agency – Clean UI",                 img: "https://picsum.photos/id/1011/1200/700", liveUrl: "https://example.com/agency-clean" },
    { id: 10, title: "Portfolio – Minimalis",            img: "https://picsum.photos/id/1015/1200/700", liveUrl: "https://example.com/portfolio-min" },
  ], []);

  const desainItems = useMemo(() => [
    { id: 1,  title: "Poster Promo – Diskon Musim Panas", img: "https://picsum.photos/id/237/1200/700" },
    { id: 2,  title: "Feed Sosmed – Launching Produk",    img: "https://picsum.photos/id/1003/1200/700" },
    { id: 3,  title: "Banner Web – Kampanye Brand",       img: "https://picsum.photos/id/1012/1200/700" },
    { id: 4,  title: "Kartu Nama – Studio Kreatif",       img: "https://picsum.photos/id/1013/1200/700" },
    { id: 5,  title: "Flyer A5 – Grand Opening",          img: "https://picsum.photos/id/1005/1200/700" },
    { id: 6,  title: "Poster Event – Musik",              img: "https://picsum.photos/id/1014/1200/700" },
    { id: 7,  title: "Feed Promo – Bundle",               img: "https://picsum.photos/id/1016/1200/700" },
    { id: 8,  title: "Banner Besar – Outdoor",            img: "https://picsum.photos/id/1021/1200/700" },
    { id: 9,  title: "Slide Deck – Pitch",                img: "https://picsum.photos/id/1000/1200/700" },
    { id: 10, title: "Poster – Event Teknologi",          img: "https://picsum.photos/id/1006/1200/700" },
  ], []);

  const iklanItems = useMemo(() => [
    { id: 1,  title: "Google Ads – UMKM Roti (+230% CTR)",  img: "https://picsum.photos/id/1025/1200/700" },
    { id: 2,  title: "Meta Ads – Fashion (+3.1x ROAS)",     img: "https://picsum.photos/id/1027/1200/700" },
    { id: 3,  title: "TikTok Ads – F&B (+1.8x ROAS)",       img: "https://picsum.photos/id/1029/1200/700" },
    { id: 4,  title: "Marketplace Ads – Elektronik (+120%)", img: "https://picsum.photos/id/1031/1200/700" },
    { id: 5,  title: "Lead Gen – B2B SaaS (CPA ↓37%)",      img: "https://picsum.photos/id/1033/1200/700" },
    { id: 6,  title: "Retargeting – E‑Com (ROAS stabil)",    img: "https://picsum.photos/id/1036/1200/700" },
    { id: 7,  title: "Awareness – Brand Lokal",              img: "https://picsum.photos/id/1037/1200/700" },
    { id: 8,  title: "Conversion – Landing Funnel",          img: "https://picsum.photos/id/1038/1200/700" },
    { id: 9,  title: "Catalog – DPA Performance",            img: "https://picsum.photos/id/1040/1200/700" },
    { id: 10, title: "Video Ads – UGC Style",                img: "https://picsum.photos/id/1041/1200/700" },
  ], []);

  const seoItems = useMemo(() => [
    { id: 1,  title: "SEO – Klinik (Top 3 keyword lokal)",      img: "https://picsum.photos/id/1050/1200/700" },
    { id: 2,  title: "SEO – Restoran (Traffic +180%)",          img: "https://picsum.photos/id/1051/1200/700" }, // fixed URL
    { id: 3,  title: "SEO – E‑Com (Indexing & Core Web Vitals)",img: "https://picsum.photos/id/1052/1200/700" },
    { id: 4,  title: "SEO – Travel (Topical Authority)",        img: "https://picsum.photos/id/1053/1200/700" },
    { id: 5,  title: "SEO – Edu (Organic leads naik)",          img: "https://picsum.photos/id/1054/1200/700" },
    { id: 6,  title: "SEO – B2B (Schema & EEAT)",               img: "https://picsum.photos/id/1055/1200/700" },
    { id: 7,  title: "SEO – Media (Growth editorial)",          img: "https://picsum.photos/id/1056/1200/700" },
    { id: 8,  title: "SEO – Properti (Local pack)",             img: "https://picsum.photos/id/1057/1200/700" },
    { id: 9,  title: "SEO – Personal brand",                    img: "https://picsum.photos/id/1058/1200/700" },
    { id: 10, title: "SEO – Startup (Content hub)",             img: "https://picsum.photos/id/1059/1200/700" },
  ], []);

  const lists = { website: websiteItems, desain: desainItems, iklan: iklanItems, seo: seoItems };
  const list = lists[activeTab] ?? [];

  const base = 6;
  const clicks = loadClicks[activeTab] ?? 0;
  const visibleCount = base + Math.min(2, clicks) * 3; // +3 per klik, maks 2x
  const visibleList = list.slice(0, Math.min(visibleCount, list.length));

  const openModalAt = useCallback((idx) => { setCurrentIndex(idx); setIsOpen(true); }, []);
  const closeModal  = useCallback(() => setIsOpen(false), []);
  const nextInModal = useCallback(() => { setCurrentIndex((p) => (p + 1) % list.length); }, [list.length]);
  const prevInModal = useCallback(() => { setCurrentIndex((p) => (p - 1 + list.length) % list.length); }, [list.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextInModal();
      if (e.key === "ArrowLeft")  prevInModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal, nextInModal, prevInModal]);

  const currentItem = list[currentIndex];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Hero: biru #1f2b80 + glow + grid (match About/Blog) ===== */}
      <section className="relative overflow-hidden text-white">
        {/* Warna dasar */}
        <div className="absolute inset-0" style={{ backgroundColor: "#1f2b80" }} />

        {/* Glow radial agar tidak flat */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl" />

        {/* Pola grid tipis */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="grid-portfolio" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-portfolio)" />
        </svg>

        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">📂 Portofolio • Real Project</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Hasil Karya &amp; Studi Kasus
          </h1>
          <span className="mt-3 inline-block h-[3px] w-28 rounded-full bg-white/70" />
          <p className="mt-6 text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto">
            Lihat contoh pekerjaan kami di berbagai industri. Website, desain visual, kampanye iklan, hingga pertumbuhan SEO.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            <TabButton active={activeTab === "website"} onClick={() => setActiveTab("website")}>Website</TabButton>
            <TabButton active={activeTab === "desain"}  onClick={() => setActiveTab("desain")}>Desain</TabButton>
            <TabButton active={activeTab === "iklan"}   onClick={() => setActiveTab("iklan")}>Iklan</TabButton>
            <TabButton active={activeTab === "seo"}     onClick={() => setActiveTab("seo")}>SEO</TabButton>
          </div>
        </div>
      </section>

      {/* ===== Grid (lebar ROM) ===== */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleList.map((item, idx) => (
            <CardItem key={item.id} item={item} index={idx} onClick={() => openModalAt(idx)} tab={activeTab} />
          ))}
        </div>

        {/* Lihat lainnya */}
        {visibleCount < list.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setLoadClicks((s) => ({ ...s, [activeTab]: Math.min(2, (s[activeTab] ?? 0) + 1) }))}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Lihat Lainnya
            </button>
            <p className="text-xs text-gray-500 mt-2">Munculkan 3 item lagi (maksimal 2x)</p>
          </div>
        )}
      </section>

      {/* ===== Modal ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b">
                <h3 className="font-semibold text-lg truncate pr-8">{currentItem?.title}</h3>
                <button onClick={closeModal} className="p-2 rounded-full hover:bg-gray-100" aria-label="Tutup">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
                </button>
              </div>

              <div className="relative">
                <img src={currentItem?.img} alt={currentItem?.title} className="w-full max-h-[70vh] object-contain bg-gray-50" />
                <button onClick={prevInModal} className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow hover:bg-white" aria-label="Sebelumnya">‹</button>
                <button onClick={nextInModal} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow hover:bg-white" aria-label="Berikutnya">›</button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t">
                <div className="text-sm text-gray-500">{currentIndex + 1} / {list.length}</div>
                <div className="flex flex-wrap gap-2">
                  {/* Aksi umum: Lihat Detail (placeholder) */}
                  <a href="#" className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium">Lihat Detail</a>

                  {/* Khusus Website: Live + Ajukan */}
                  {activeTab === "website" && (
                    <>
                      {currentItem?.liveUrl && (
                        <a href={currentItem.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90 text-sm font-medium">Lihat Live</a>
                      )}
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik dengan proyek Website seperti: ${currentItem?.title}. Bisa konsultasi?`)}`}
                        target="_blank" rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:opacity-90 text-sm font-medium"
                      >Ajukan Project</a>
                    </>
                  )}

                  {/* Khusus Desain */}
                  {activeTab === "desain" && (
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik dengan portofolio Desain: ${currentItem?.title}. Tolong info paket & revisi.`)}`}
                      target="_blank" rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:opacity-90 text-sm font-medium"
                    >Ajukan Project</a>
                  )}

                  {/* Khusus Iklan */}
                  {activeTab === "iklan" && (
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya ingin konsultasi Iklan seperti studi kasus: ${currentItem?.title}.`)}`}
                      target="_blank" rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:opacity-90 text-sm font-medium"
                    >Konsultasi Iklan</a>
                  )}

                  {/* Khusus SEO */}
                  {activeTab === "seo" && (
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya ingin konsultasi SEO seperti studi kasus: ${currentItem?.title}. Mohon audit singkat.`)}`}
                      target="_blank" rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:opacity-90 text-sm font-medium"
                    >Konsultasi SEO</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CTA (lebar ROM) ===== */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 pb-16 pt-6">
        <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ingin hasil serupa untuk bisnismu?</h3>
            <p className="text-white/80 max-w-2xl">Kami bantu dari strategi hingga eksekusi. Mulai dari website, desain visual, kampanye iklan, sampai pertumbuhan SEO.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo! Saya ingin diskusi project berdasarkan portofolio.")}`}
              target="_blank" rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:opacity-90 font-semibold"
            >Konsultasi via WhatsApp</a>
            <a href="#" className="px-5 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-semibold">Lihat Paket Layanan</a>
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
          : "bg-white/10 hover:bg-white/15 text-white border-white/30"
      }`}
      type="button"
    >
      {children}
    </button>
  );
}

function CardItem({ item, index, onClick, tab }) {
  const label = tab === "website" ? "Website" : tab === "desain" ? "Desain" : tab === "iklan" ? "Iklan" : "SEO";
  const isNew = index < 3;
  return (
    <div className="group relative rounded-2xl overflow-hidden border bg-white shadow-[0_1px_0_rgba(0,0,0,.04)] transition hover:-translate-y-0.5 hover:shadow-lg">
      <button type="button" className="absolute inset-0 z-10" onClick={onClick} aria-label={`Preview ${item.title}`}></button>
      <div className="relative">
        <img src={item.img} alt={item.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-gray-800 ring-1 ring-black/5">{label}</span>
          {isNew && <span className="inline-flex items-center rounded-full bg-emerald-500 text-white px-2 py-1 text-[10px] font-bold shadow">Baru</span>}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/0 opacity-0 transition group-hover:bg-black/10 group-hover:opacity-100" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold truncate">{item.title}</h3>
          <span className="text-xs text-gray-500">Case</span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>Klik untuk preview</span>
          <span className="opacity-0 group-hover:opacity-100 transition">Lihat ›</span>
        </div>
      </div>
    </div>
  );
}
