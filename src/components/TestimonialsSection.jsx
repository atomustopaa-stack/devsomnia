import { useMemo, useState, useCallback } from "react";
import { Star, ThumbsUp, ChevronDown, CheckCircle, MessageSquareText } from "lucide-react";

export default function TestimonialsSection() {
  const ALL_REVIEWS = useMemo( 
    () => [
      { id: 1, name: "Raka Pratama", stars: 5, time: "2 minggu lalu", text: "Timnya responsif, progres jelas, dan hasil websitenya cepat serta rapi.", initials: "RP" },
      { id: 2, name: "Dewi Lestari", stars: 5, time: "1 bulan lalu", text: "Company profile kami naik trafiknya setelah optimasi. Recommended!", initials: "DL" },
      { id: 3, name: "Ardiansyah", stars: 4, time: "3 minggu lalu", text: "Prosesnya mulus. Ada revisi minor dan cepat dibereskan.", initials: "AR" },
      { id: 4, name: "Salsabila", stars: 5, time: "5 hari lalu", text: "Landing page konversinya bagus. Copywriting & desain pas.", initials: "SA" },
      { id: 5, name: "Yusuf H.", stars: 5, time: "6 hari lalu", text: "Support after go-live mantap. Dibantu setting email & domain.", initials: "YH" },
      { id: 6, name: "Intan P.", stars: 4, time: "2 bulan lalu", text: "Harga masuk akal untuk kualitasnya. Timeline sesuai komitmen.", initials: "IP" },
      { id: 7, name: "Bima", stars: 5, time: "3 hari lalu", text: "Ecommerce performanya ringan, page speed oke.", initials: "BM" },
      { id: 8, name: "Nadia", stars: 5, time: "1 minggu lalu", text: "Dari brief ke eksekusi, komunikasinya enak dan terarah.", initials: "NA" },
      { id: 9, name: "Andi", stars: 5, time: "4 hari lalu", text: "SEO dasarnya rapi. Struktur halaman mudah diindex.", initials: "AN" },
      { id: 10, name: "Lukman", stars: 4, time: "3 bulan lalu", text: "Pengerjaan cepat. Dokumentasi dasar juga disiapkan.", initials: "LK" },
      { id: 11, name: "Farah", stars: 5, time: "baru saja", text: "UI/UX clean. Sesuai brand guide kami.", initials: "FR" },
      { id: 12, name: "Tono", stars: 5, time: "1 hari lalu", text: "Senior-friendly CMS. Tim bantu training singkat juga.", initials: "TO" },
    ],
    []
  );

  const average = useMemo(() => {
    const sum = ALL_REVIEWS.reduce((a, r) => a + r.stars, 0);
    return (sum / ALL_REVIEWS.length).toFixed(1);
  }, [ALL_REVIEWS]);

  const distribution = useMemo(() => {
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    ALL_REVIEWS.forEach((r) => (dist[r.stars] += 1));
    const total = ALL_REVIEWS.length;
    return (star) => ({ n: dist[star], pct: total ? Math.round((dist[star] / total) * 100) : 0 });
  }, [ALL_REVIEWS]);

  const [filter, setFilter] = useState("ALL");
  const filtered = useMemo(() => {
    if (filter === "ALL") return ALL_REVIEWS;
    if (filter === "5") return ALL_REVIEWS.filter((r) => r.stars === 5);
    if (filter === "4") return ALL_REVIEWS.filter((r) => r.stars === 4);
    if (filter === "3PLUS") return ALL_REVIEWS.filter((r) => r.stars >= 3);
    return ALL_REVIEWS;
  }, [filter, ALL_REVIEWS]);

  const [visible, setVisible] = useState(5);
  const showMore = useCallback(() => setVisible((v) => Math.min(v + 3, filtered.length)), [filtered.length]);

  const renderStars = (n) => (
    <div className="flex items-center gap-0.5" aria-label={`${n} bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < n ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="mx-auto max-w-screen-xl px-4 md:px-8 py-20">
      {/* Judul section rata kiri */}
      <header className="max-w-2xl mb-12">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
          Testimoni
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#111a4c]">
          Testimoni Klien Kami
        </h2>

        <p className="mt-4 text-gray-700 text-base md:text-lg leading-8">
          Ringkasan rating dan <b>ulasan terbaru</b> dari pelanggan yang sudah memakai layanan Devsomnia.
        </p>
      </header>

      {/* Header block: kartu biru & grafik sejajar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Score tile */}
        <div className="rounded-2xl bg-[#1f2b80] text-white p-6 shadow-xl h-full">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm/5 text-white/80">Rating</div>
              <div className="text-5xl font-semibold mt-1">{average}</div>
              <div className="mt-2">{renderStars(Math.round(Number(average)))}</div>
              <div className="text-xs/5 text-white/80 mt-2">Berdasarkan {ALL_REVIEWS.length} ulasan</div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                <CheckCircle size={14} className="text-emerald-300" />
                Mirip Google Review
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/6285722511172?text=${encodeURIComponent("Halo, saya ingin menulis ulasan untuk Devsomnia.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90"
          >
            <MessageSquareText size={16} /> Tulis ulasan via WhatsApp
          </a>
        </div>

        {/* Distribution */}
        <div className="md:col-span-2 rounded-2xl bg-white shadow-xl p-6 border h-full flex flex-col">
          {[5, 4, 3, 2, 1].map((s) => {
            const d = distribution(s);
            return (
              <div key={s} className="flex items-center gap-3 py-1.5">
                <div className="w-8 text-sm text-slate-600">{s}</div>
                <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#1f2b80]" style={{ width: `${d.pct}%` }} />
                </div>
                <div className="w-14 text-right text-sm text-slate-600">{d.pct}%</div>
              </div>
            );
          })}

          {/* Filters */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {[
              { key: "ALL", label: "Semua" },
              { key: "5", label: "5 bintang" },
              { key: "4", label: "4 bintang" },
              { key: "3PLUS", label: "3+ bintang" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setVisible(5);
                }}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  filter === f.key ? "bg-[#1f2b80] text-white border-[#1f2b80]" : "bg-white hover:bg-slate-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews list: row1=3, row2=2 */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.slice(0, visible).map((r) => (
          <article key={r.id} className="rounded-2xl border bg-white shadow-sm p-5">
            <header className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-[#1f2b80] text-white flex items-center justify-center text-sm font-semibold">
                {r.initials}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900">{r.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                    <CheckCircle size={14} />Terverifikasi
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-0.5">
                  {renderStars(r.stars)}
                  <span className="text-slate-500">· {r.time}</span>
                </div>
              </div>
            </header>
            <p className="mt-3 text-slate-700">{r.text}</p>
            <footer className="mt-4 flex items-center justify-between">
              <button className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900">
                <ThumbsUp size={16} /> Bermanfaat
              </button>
              <button className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700">
                Selengkapnya <ChevronDown size={16} />
              </button>
            </footer>
          </article>
        ))}
      </div>

      {/* Show more */}
      {visible < filtered.length && (
        <div className="flex justify-start mt-8">
          <button
            onClick={showMore}
            className="rounded-full px-5 py-3 bg-slate-900 text-white hover:bg-black shadow"
          >
            Lainnya
          </button>
        </div>
      )}
    </section>
  );
}
