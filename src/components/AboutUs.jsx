export default function AboutUs() {
  return (
    <section id="tentang" className="bg-white">
      {/* ROM CONTAINER: max-w-screen-xl, px-4 md:px-8, py-20 */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-20">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
            Tentang Kami
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#111a4c]">
            Menaikan Bisnis Anda Melalui Digial!

            
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-8">
            Devsomnia membantu bisnis bertumbuh lewat <b>website, iklan digital, SEO, dan desain kreatif.  </b>
            Fokus kami: hasil nyata dan pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Grid: teks + gambar */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* KIRI: poin keunggulan */}
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="rounded-2xl border border-black/10 p-4">
                <div className="text-sm font-semibold text-[#1f2b80]">Fokus pada Hasil</div>
                <p className="mt-1 text-sm text-gray-600">
                  Semua strategi dirancang untuk mendatangkan trafik, konversi, dan peningkatan penjualan.
                </p>
              </li>
              <li className="rounded-2xl border border-black/10 p-5">
                <div className="text-sm font-semibold text-[#1f2b80]">Proses Cepat & Efisien  </div>
                <p className="mt-1 text-sm text-gray-600">
                Dengan pendekatan UI-first, website dan campaign Anda bisa lebih cepat online.

                </p>
              </li>
              <li className="rounded-2xl border border-black/10 p-4">
                <div className="text-sm font-semibold text-[#1f2b80]">  Partner Jangka Panjang </div>
                <p className="mt-1 text-sm text-gray-600">
                Kami tidak sekadar vendor, tapi mitra yang mendampingi bisnis Anda tumbuh.
                </p>
              </li>
              <li className="rounded-2xl border border-black/10 p-4">
                <div className="text-sm font-semibold text-[#1f2b80]">Layanan Lengkap </div>
                <p className="mt-1 text-sm text-gray-600">
                Dari website, SEO, iklan digital, hingga desain kreatif — semua tersedia dalam satu atap.
                </p>
              </li>
            </ul>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
              <div className="rounded-2xl border border-black/10 px-5 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#111a4c]">60+</div>
                <div className="text-xs sm:text-sm text-gray-600">Proyek selesai*</div>
              </div>
              <div className="rounded-2xl border border-black/10 px-5 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#111a4c]">30+</div>
                <div className="text-xs sm:text-sm text-gray-600">Klien aktif*</div>
              </div>
              <div className="rounded-2xl border border-black/10 px-5 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#111a4c]">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Kepuasan*</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f2b80] text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Lihat Layanan
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:shadow-sm transition"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* <p className="mt-3 text-xs text-gray-500">
              *Angka contoh — silakan ganti sesuai data DevSomnia.
            </p> */}
          </div>

          {/* KANAN: gambar */}
          <div className="order-first lg:order-none">
            <div className="relative mx-auto max-w-md sm:max-w-lg">
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-[#1f2b80]/10 to-teal-300/10 blur" />
              <img
                src="/image/Home-page abbout.jpg" /* ganti sesuai file kamu */
                alt="Devsomnia team & workflow"
                className="relative w-full rounded-[28px] border border-black/10 object-cover"
                loading="lazy"
              />
              {/* <div className="absolute -bottom-4 left-4 right-4 hidden sm:flex items-center justify-between rounded-2xl border bg-white/90 backdrop-blur px-4 py-3 shadow-sm">
                <div className="text-xs">
                  <div className="font-semibold text-[#111a4c]">Stack</div>
                  <div className="text-gray-600">React · Tailwind · Vite · Node</div>
                </div>
                <div className="h-8 w-px bg-black/10" />
                <div className="text-xs">
                  <div className="font-semibold text-[#111a4c]">Metode</div>
                  <div className="text-gray-600">UI-first · Modular</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>
      {/* /ROM CONTAINER */}
    </section>
  );
}
