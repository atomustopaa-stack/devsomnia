// src/components/Hero.jsx
import { useMemo, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  // ===== DATA =====
  const gallerySets = useMemo(
    () => [
      // Slider 1: 1a, 2a, 3a
      ["/image/slider-1a.jpg", "/image/slider-2a.jpg", "/image/slider-3a.jpg"],
      // Slider 2: 1b, 2b, 3b
      ["/image/slider-1b.jpg", "/image/slider-2b.jpg", "/image/slider-3b.jpg"],
      // Slider 3: 1c, 2c, 3c
      ["/image/slider-1c.jpg", "/image/slider-2c.jpg", "/image/slider-3c.jpg"],
    ],
    []
  );

  const SERVICES = useMemo(
    () => [
      "Jasa Website","Jasa Landing Page","Jasa Company Profile","Jasa Website Sekolah","Jasa Ecommerce",
      "Jasa Website Custom","Jasa Iklan","Jasa Google Ads","Jasa Tiktok Ads","Jasa Meta Ads",
      "Jasa Design","Jasa Desain Logo","Jasa Desain Banner","Jasa Desain Sosmed",
      "Jasa SEO","Jasa Artikel Pilar","Jasa Backlink",
    ],
    []
  );

  const ROUTES = useMemo(
    () => ({
      "Jasa Website": "/services/website/",
      "Jasa Landing Page": "/services/website/landing-page",
      "Jasa Company Profile": "/services/website/company-profile",
      "Jasa Website Sekolah": "/services/website/sekolah",
      "Jasa Ecommerce": "/services/website/ecommerce",
      "Jasa Website Custom": "/services/website/custom",
      "Jasa Iklan": "/services/ads",
      "Jasa Google Ads": "/services/ads/google-ads",
      "Jasa Tiktok Ads": "/services/ads/tiktok-ads",
      "Jasa Meta Ads": "/services/ads/meta-ads",
      "Jasa Design": "/services/design",
      "Jasa Desain Logo": "/services/design/logo",
      "Jasa Desain Banner": "/services/design/banner",
      "Jasa Desain Sosmed": "/services/design/sosmed",
      "Jasa SEO": "/services/seo",
      "Jasa Artikel Pilar": "/services/seo/artikel-pilar",
      "Jasa Backlink": "/services/seo/backlink",
    }),
    []
  );

  // ===== STATE =====
  const [gIndex, setGIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const total = gallerySets.length;

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setGIndex((i) => (i + 1) % total), 4200);
    return () => clearInterval(t);
  }, [autoPlay, total]);

  const goPrev = () => setGIndex((i) => (i - 1 + total) % total);
  const goNext = () => setGIndex((i) => (i + 1) % total);

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const [selected, setSelected] = useState(null);
  const wrapRef = useRef(null);

  const typed = query.trim();
  const canSuggest = typed.length >= 2;
  const filtered = canSuggest
    ? SERVICES.filter((s) => s.toLowerCase().includes(typed.toLowerCase()))
    : [];

  // tutup dropdown saat klik luar
  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const selectItem = (val) => {
    setQuery(val);
    setSelected(val);
    setOpen(false);
  };

  const handleGo = () => {
    const target = selected ?? (filtered[0] || typed);
    if (!target) return;
    const to = ROUTES[target] || "#layanan";
    if (to.startsWith("#")) document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
    else navigate(to);
  };

  // ===== Search width: responsif & tidak mengecil =====
  const placeholder = "Cari layanan (mis. Jasa Landing Page, Jasa SEO)";
  const [maxCh, setMaxCh] = useState(Math.max(28, placeholder.length + 2));
  useEffect(() => {
    const len = (query || placeholder).length + 2;
    setMaxCh((prev) => Math.max(prev, len));
  }, [query]);
  const inputWidth = `min(calc(100vw - 2rem), clamp(300px, ${maxCh}ch, 680px))`;

  return (
    <section className="relative bg-[#1f2b80] text-white overflow-x-clip">
      {/* pola garis + spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 16px)",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -left-24 w-[24rem] h-[24rem] bg-white/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-teal-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 py-12 md:py-16">
        {/* Brand */}
        <div className="text-center">
          <span className="text-teal-300 font-semibold">DevSomnia</span>
        </div>

        {/* Headline */}
        <div className="mt-3 text-center max-w-4xl mx-auto relative z-30">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Solusi Terbaik Setiap Masalah
            <br className="hidden sm:block" />
            Dalam Dunia Digital Anda
          </h1>
          <p className="mt-6 md:mt-7 text-xl md:text-2xl font-semibold text-white/95">
            Kami menawarkan layanan jasa digital dikerjakan oleh profesional berpengalaman
          </p>
        </div>

        {/* ===== GALERI ===== */}
        <div
          className="mt-16 md:mt-18 relative w-full max-w-6xl mx-auto z-10"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* MOBILE */}
          <div className="sm:hidden relative h-[260px] overflow-hidden rounded-[12px]">
            {gallerySets.map((set, i) => (
              <img
                key={i}
                src={set[2]}
                alt={`slider-${i + 1}`}
                className={`absolute inset-0 h-full w-auto left-1/2 -translate-x-1/2 object-cover transition-opacity duration-500 ${
                  i === gIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden sm:block">
            <div className="relative h-[300px] md:h-[380px] overflow-hidden rounded-[16px]">
              {gallerySets.map((set, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === gIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <img
                    src={set[0]}
                    alt={`slider-${i + 1}-a`}
                    className="absolute left-0 top-6 h-[78%] md:h-[84%] aspect-[16/10] object-cover rounded-[12px] shadow-md -rotate-3"
                  />
                  <img
                    src={set[1]}
                    alt={`slider-${i + 1}-b`}
                    className="absolute right-0 bottom-6 h-[78%] md:h-[84%] aspect-[16/10] object-cover rounded-[12px] shadow-md rotate-2"
                  />
                  <img
                    src={set[2]}
                    alt={`slider-${i + 1}-c`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[96%] md:h-[98%] w-auto aspect-[16/9] object-cover rounded-[12px] shadow-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SOCIAL + KONTROL ===== */}
        <div className="mt-10 relative z-30 flex items-center justify-center gap-3 sm:gap-4">
          <button
            aria-label="Sebelumnya"
            onClick={goPrev}
            className="group inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#1f2b80] shadow transition hover:shadow-lg hover:-translate-y-0.5 hover:ring-2 hover:ring-white/70"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition group-hover:scale-110">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
            {[
              { name: "pinterest", href: "#" },
              { name: "facebook", href: "#" },
              { name: "youtube", href: "#" },
              { name: "instagram", href: "#" },
              { name: "linkedin", href: "#" },
              { name: "tiktok", href: "#" },
              { name: "dribbble", href: "#" },
              { name: "x", href: "#" },
            ].map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center rounded-full bg-white p-2 shadow ring-1 ring-black/5 transition hover:shadow-xl hover:-translate-y-0.5 hover:ring-teal-400/60"
                  title={name}
                >
                  <img src={`/image/social/${name}.svg`} alt={name} className="h-6 sm:h-7 md:h-8 object-contain transition group-hover:scale-110" />
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label="Selanjutnya"
            onClick={goNext}
            className="group inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#1f2b80] shadow transition hover:shadow-lg hover:-translate-y-0.5 hover:ring-2 hover:ring-white/70"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition group-hover:scale-110">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* ===== SEARCH ===== */}
        <div className="mt-5 relative z-30" ref={wrapRef}>
          <div className="w-full flex justify-center">
            <div className="relative inline-block">
              <div
                className="flex items-center gap-2 rounded-full border border-teal-300 bg-white shadow-lg px-3.5 py-2.5 sm:px-5 sm:py-3"
                style={{ width: inputWidth }}
              >
                <input
                  type="search"
                  placeholder={placeholder}
                  className="w-full bg-transparent outline-none placeholder:text-gray-400 text-sm sm:text-base text-black"
                  value={query}
                  onChange={(e) => {
                    const v = e.target.value;
                    setQuery(v);
                    setHi(0);
                    setOpen(v.trim().length >= 2);
                  }}
                  onKeyDown={(e) => {
                    if (!open) return;
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setHi((v) => Math.min(v + 1, Math.max(filtered.length - 1, 0)));
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setHi((v) => Math.max(v - 1, 0));
                    }
                    if (e.key === "Enter" && filtered.length) {
                      e.preventDefault();
                      selectItem(filtered[hi]);
                    }
                    if (e.key === "Escape") setOpen(false);
                  }}
                />

                {selected ? (
                  <button
                    type="button"
                    onClick={handleGo}
                    className="shrink-0 rounded-full bg-[#18246b] text-white px-4 sm:px-5 h-8 sm:h-9 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Buka
                  </button>
                ) : (
                  <button
                    type="button"
                    aria-label="Cari"
                    className="grid place-content-center h-9 w-9 rounded-full bg-[#1f2b80] text-white hover:bg-[#162063] transition"
                    onClick={() => {
                      if (filtered.length >= 1) selectItem(filtered[0]);
                      else if (!open && canSuggest) setOpen(true);
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-3.6-3.6" />
                    </svg>
                  </button>
                )}
              </div>

              {open && filtered.length > 0 && (
                <ul
                  role="listbox"
                  className="absolute top-full mt-2 left-0 right-0 z-[80] max-h-72 overflow-auto rounded-2xl border border-teal-200 bg-white shadow-2xl text-black"
                >
                  {filtered.map((item, i) => (
                    <li
                      key={item}
                      role="option"
                      aria-selected={hi === i}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => selectItem(item)}
                      className={`px-4 py-2 cursor-pointer select-none text-sm sm:text-base ${
                        hi === i ? "bg-teal-50" : "hover:bg-teal-50/70"
                      }`}
                      onMouseEnter={() => setHi(i)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
