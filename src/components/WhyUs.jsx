// src/components/WhyUs.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function WhyUs() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const prevFocusRef = useRef(null);

  const YT_ID = "dQw4w9WgXcQ"; // ganti dengan ID YouTube kamu
  const BRAND = "#1f2b80";

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    if (open) {
      prevFocusRef.current = document.activeElement;
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prevFocusRef.current && prevFocusRef.current.focus?.();
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="why-us" className="relative overflow-hidden py-20" style={{ backgroundColor: "#DDF4E7" }}>
      {/* dekor tipis */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg className="absolute -top-24 right-0 h-[640px] w-[640px]" viewBox="0 0 600 600" fill="none">
          <defs>
            <pattern id="grid-why" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="24" stroke={BRAND} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-why)" />
        </svg>
      </div>

      {/* container ROM */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: image + floating stats */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <img
                src="/image/why-us/hero.jpg"
                alt="Tim Devsomnia mendukung pertumbuhan bisnis"
                className="h-[340px] w-full object-cover sm:h-[430px]"
              />
            </div>

            <div className="absolute left-4 -bottom-8 sm:left-8 sm:-bottom-10">
              <div
                className="w-60 sm:w-72 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-md"
                style={{ backgroundColor: "rgba(255,255,255,0.78)", border: `1px solid ${withAlpha(BRAND, 0.25)}` }}
              >
                <StatRow big="112K+" small="Project & Page Views" />
                <Divider brand={BRAND} />
                <StatRow big="+40%" small="Rata-rata peningkatan konversi" />
                <Divider brand={BRAND} />
                <StatRow big="4.9★" small="Rerata rating klien" />
              </div>
            </div>
          </div>

          {/* RIGHT: label + H2 + paragraf + poin */}
          <div className="pt-12 lg:pt-0">
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND }}>
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
              Keunggulan Kami
            </span>

            {/* H2 sekarang tepat di atas paragraf (bukan full-bleed) */}
            <h2
  className="
    text-[clamp(28px,5vw,44px)]
    md:mt-3 text-3xl md:text-4xl font-bold text-[#111a4c]
    md:whitespace-nowrap 
  "
>
  Kenapa Harus Devsomnia?
</h2>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600">
              Kami tidak hanya membuat website—kami menghadirkan solusi digital yang ringan, SEO-ready, dan scalable untuk
              pertumbuhan bisnis.
            </p>

            <ul className="mt-8 space-y-6">
              <Point brand={BRAND} title="Fokus Hasil" desc="Strategi berbasis data untuk trafik & konversi nyata." />
              <Point brand={BRAND} title="Cepat & Efisien" desc="UI-first: rapi, cepat online, siap scale ke backend." />
              <Point brand={BRAND} title="Layanan Lengkap" desc="Website, Ads, SEO, dan Desain dalam satu atap." />
              <Point brand={BRAND} title="Support Berlanjut" desc="Pendampingan rutin, perbaikan cepat, panduan non-teknis." />
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-95"
                style={{ backgroundColor: BRAND }}
              >
                Selengkapnya
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-3 font-medium text-[#111a4c] hover:opacity-90"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-full shadow ring-1"
                  style={{ backgroundColor: withAlpha(BRAND, 0.08), borderColor: withAlpha(BRAND, 0.45) }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Tentang Kami
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal YouTube */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whyus-modal-title"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{ backgroundColor: "rgba(17, 24, 39, 0.55)", backdropFilter: "blur(2px)" }}
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <h3 id="whyus-modal-title" className="text-lg font-semibold text-[#0f1842]">Tentang Kami</h3>
              <button
                ref={closeBtnRef}
                onClick={() => setOpen(false)}
                className="rounded-md p-2 hover:bg-black/5 focus:outline-none"
                aria-label="Tutup modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="#111a4c" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                title="Profil Devsomnia"
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${YT_ID}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex justify-end gap-2 border-t border-black/10 px-4 py-3">
              <button onClick={() => setOpen(false)} className="rounded-full px-4 py-2 text-sm font-medium text-[#111a4c] hover:bg-black/5">Tutup</button>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2 text-sm font-semibold text-white hover:opacity-95" style={{ backgroundColor: BRAND }}>Lihat di YouTube</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ===== Subcomponents ===== */
function Divider({ brand }) {
  return <div className="my-2 h-px w-full" style={{ backgroundColor: withAlpha(brand, 0.25) }} />;
}
function StatRow({ big, small }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-[22px] sm:text-2xl font-semibold text-[#0f1842]">{big}</div>
      <div className="text-[11px] sm:text-xs leading-snug text-gray-700 text-right">{small}</div>
    </div>
  );
}
function Point({ title, desc, brand }) {
  return (
    <li>
      <div className="flex items-start gap-4">
        <span
          className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl shadow ring-1"
          style={{ backgroundColor: withAlpha(brand, 0.08), borderColor: withAlpha(brand, 0.45) }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: brand }}>
            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <h3 className="text-lg font-semibold text-[#0f1842]">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
        </div>
      </div>
      <div className="mt-6 h-px w-full bg-black/10" />
    </li>
  );
}

/* ===== Helpers ===== */
function withAlpha(hex, alpha) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return hex;
  const [_, r, g, b] = m;
  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
}
