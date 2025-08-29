import { useEffect, useMemo, useRef, useState } from "react";

/* ==== Utilities ==== */
// Path gambar kamu: /public/image/dummy-develop3.jpg  -> /image/dummy-develop3.jpg
const IMG_SRC = "/image/dummy-develop3.jpg";

function ImageCard({ alt, size = "small" }) {
  const src = IMG_SRC; // satu gambar untuk semua tile
  const placeholder = size === "large" ? "1280x720" : "960x540";
  const onError = (e) => {
    e.currentTarget.src = `https://via.placeholder.com/${placeholder}?text=${placeholder}`;
  };
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-black/5 shadow
      ${size === "large" ? "h-56 sm:h-64 lg:h-80" : "h-36 sm:h-40 lg:h-48"}`}
    >
      <img
        src={src}
        alt={alt ?? ""}
        onError={onError}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ==== Slider ==== */
export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [yt, setYt] = useState("");
  const hover = useRef(false);

  // data dua slide — layout kanan berbeda
  const slides = useMemo(
    () => [
      {
        key: "s1",
        title: "Lorem Ipsum is simply dummy",
        sub:
          "Kami bantu bisnis kamu tampil profesional, cepat, dan SEO-friendly agar mudah ditemukan dan dipercaya pelanggan.",
        primary: { label: "Konsultasi Gratis", href: "#konsultasi" },
        secondary: { label: "600k", caption: "PERTAMA" },
        note:
          "Kami bekerja dengan sepenuh hati demi mendapatkan hasil terbaik.",
        // RIGHT: 4 gambar + badge cyan + badge rating
        right: {
          type: "grid-4",
          badgeTop: {
            title: "Add a heading",
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
            playVideo: "dQw4w9WgXcQ",
          },
          badgeBottom: {
            left: "4.8",
            rightTitle: "Overall Clients Rate",
            rightText: "Lebih dari 1k review client",
          },
        },
      },
      {
        key: "s2",
        title: "Naikkan Trafik & Omzet Bisnis Kamu",
        sub:
          "Kami bantu bisnis kamu tampil profesional, cepat, dan SEO-friendly agar mudah ditemukan dan dipercaya pelanggan.",
        primary: { label: "Tentang Kami", href: "#tentang" },
        secondary: { label: "Kontak Kami", href: "#kontak" },
        chips: ["Jasa Website", "Jasa Iklan", "Jasa Desain", "Jasa SEO"],
        contact: { phone: "+62 857 2251 1172", site: "devsomnia.id" },
        // RIGHT: 2 gambar + tombol play besar + 3 stats badges
        right: {
          type: "grid-2",
          playVideo: "kXYiU_JCYtU",
          statBadges: [
            { title: "repeat order", value: "634+" },
            { title: "Happy Client", value: "99%" },
            { title: "Project Selesai", value: "329+" },
          ],
        },
      },
    ],
    []
  );

  // Autoplay (9s), pause saat hover
  useEffect(() => {
    const id = setInterval(() => {
      if (!hover.current) setIdx((i) => (i + 1) % slides.length);
    }, 9000);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (dir) =>
    setIdx((i) => (i + (dir === "next" ? 1 : -1) + slides.length) % slides.length);

  const openYT = (id) => {
    if (!id) return;
    setYt(id);
    setOpen(true);
  };

  const s = slides[idx];

  return (
    <section
      className="relative w-full bg-white"
      onMouseEnter={() => (hover.current = true)}
      onMouseLeave={() => (hover.current = false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-[600px] lg:h-[800px]">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <LeftContent data={s} />
          </div>

          {/* RIGHT (layout per slide) */}
          <div className="order-1 lg:order-2">
            {s.right.type === "grid-4" ? (
              <RightGridFour data={s.right} onPlay={openYT} />
            ) : (
              <RightGridTwo data={s.right} onPlay={openYT} />
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
        <button
          onClick={() => go("prev")}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
          aria-label="Prev"
        >
          ‹
        </button>
        <Dots count={slides.length} active={idx} onClick={setIdx} />
        <button
          onClick={() => go("next")}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Popup YouTube */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title="YouTube"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${yt}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <button
            className="absolute top-6 right-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow"
            onClick={() => setOpen(false)}
          >
            Tutup
          </button>
        </div>
      )}
    </section>
  );
}

/* ====== LEFT ====== */
function LeftContent({ data }) {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
        {data.title}
      </h1>
      <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600">
        {data.sub}
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={data.primary.href}
          className="inline-flex items-center rounded-full bg-indigo-900 px-6 py-3 text-white font-semibold shadow hover:translate-y-[-1px] transition"
        >
          {data.primary.label}
        </a>

        {"caption" in (data.secondary ?? {}) ? (
          <div className="ml-2 sm:ml-4">
            <div className="text-2xl font-bold text-gray-900">
              {data.secondary.label}
            </div>
            <div className="text-[11px] tracking-wide text-gray-500">
              {data.secondary.caption}
            </div>
          </div>
        ) : null}
      </div>

      {/* Separator + note (slide 1) */}
      {data.note && (
        <>
          <div className="mt-10 h-px w-full max-w-xl bg-gray-300" />
          <p className="mt-4 max-w-xl text-gray-700">{data.note}</p>

          {/* ikon placeholder (emoji) – bebas kamu ganti ke ikon library */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {["💻", "🖌️", "📣", "🔎", "📱", "🌐", "🚀"].map((ic, i) => (
              <span
                key={i}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-900 text-white ring-1 ring-black/5 shadow text-sm"
              >
                {ic}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Chips + contact (slide 2) */}
      {data.chips && (
        <>
          <div className="mt-10 flex flex-wrap gap-3">
            {data.chips.map((c) => (
              <span
                key={c}
                className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-gray-900"
              >
                {c}
              </span>
            ))}
          </div>
          {data.contact && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-gray-200">
                  ☎
                </span>
                <span className="font-medium">{data.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-gray-200">
                  🌐
                </span>
                <span className="font-medium">{data.contact.site}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ====== RIGHT: SLIDE 1 (4 gambar) ====== */
function RightGridFour({ data, onPlay }) {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        {/* tiga tile kecil */}
        <ImageCard alt="tile 1" />
        <ImageCard alt="tile 2" />
        <ImageCard alt="tile 3" />
        {/* satu tile besar */}
        <ImageCard alt="tile besar" size="large" />
      </div>

      {/* badge cyan (atas kiri) */}
      {data.badgeTop && (
        <div className="absolute left-6 top-8 sm:left-10 sm:top-10">
          <div className="relative rounded-2xl bg-teal-200 px-6 py-5 shadow">
            <button
              className="absolute -right-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5"
              onClick={() => onPlay?.(data.badgeTop.playVideo)}
              aria-label="Play"
              title="Play"
            >
              ▶
            </button>
            <div className="text-lg font-bold text-gray-900">
              {data.badgeTop.title}
            </div>
            <div className="mt-1 max-w-[220px] text-sm text-gray-800">
              {data.badgeTop.text}
            </div>
          </div>
        </div>
      )}

      {/* badge rating (bawah kiri) */}
      {data.badgeBottom && (
        <div className="absolute left-6 bottom-10">
          <div className="flex items-center gap-3 rounded-2xl bg-black text-white px-4 py-3 shadow">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-700 font-bold">
              {data.badgeBottom.left}
            </span>
            <div>
              <div className="text-sm font-semibold">
                {data.badgeBottom.rightTitle}
              </div>
              <div className="text-xs opacity-80">
                {data.badgeBottom.rightText}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ====== RIGHT: SLIDE 2 (2 gambar + play + badges) ====== */
function RightGridTwo({ data, onPlay }) {
  return (
    <div className="relative">
      {/* layout: kiri berisi 2 tile (atas kecil, bawah besar), kanan untuk badges */}
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1 space-y-5">
          <ImageCard alt="tile kecil" />
          <ImageCard alt="tile besar" size="large" />
        </div>

        {/* kolom kanan kosong untuk ruang badges */}
        <div className="hidden lg:block" />

        {/* tombol play di tengah stack kiri */}
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5"
          aria-label="Play video"
          onClick={() => onPlay?.(data.playVideo)}
          title="Play video"
        >
          ▶
        </button>

        {/* badges statistik di kanan */}
        {data.statBadges && (
          <div className="absolute right-[-10px] top-24 hidden lg:flex flex-col gap-4">
            {data.statBadges.map((b, i) => (
              <div
                key={i}
                className="rounded-xl bg-teal-200 px-4 py-3 shadow text-right"
              >
                <div className="text-xs text-gray-700">{b.title}</div>
                <div className="text-2xl font-bold text-gray-900">
                  {b.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ====== Dots ====== */
function Dots({ count, active, onClick }) {
  return (
    <div className="pointer-events-auto flex items-center gap-2 px-2 py-1 rounded-full bg-white/80 ring-1 ring-black/5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2.5 w-2.5 rounded-full transition ${
            active === i ? "bg-gray-900 w-6" : "bg-gray-400 hover:bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
}
