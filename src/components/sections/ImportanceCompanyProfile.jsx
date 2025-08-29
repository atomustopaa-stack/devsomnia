// File: src/components/sections/ImportanceCompanyProfile.jsx
// Versi revisi: background dihapus, heading diperkecil, gambar dummy pakai URL internet.

import { ShieldCheck, Search, FileText, PhoneCall, BarChart3, CheckCircle2 } from "lucide-react";

export default function ImportanceCompanyProfile() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Kepercayaan & Kredibilitas",
      desc: "Tampilkan profil resmi, legalitas, portofolio, dan testimoni untuk meningkatkan trust calon klien.",
    },
    {
      icon: Search,
      title: "Mudah Ditemukan di Google",
      desc: "Dengan struktur konten yang rapi & SEO dasar, bisnis Anda lebih mudah ditemukan calon pelanggan.",
    },
    {
      icon: FileText,
      title: "Pusat Informasi Resmi",
      desc: "Semua informasi penting (layanan, kontak, alamat, jam operasional) tersaji jelas & selalu up-to-date.",
    },
    {
      icon: PhoneCall,
      title: "Lead & Penawaran Masuk",
      desc: "Formulir, CTA WhatsApp, dan integrasi chat mempermudah calon klien menghubungi tanpa hambatan.",
    },
  ];

  const stats = [
    { k: "+78%", v: "Kepercayaan brand" },
    { k: "24/7", v: "Akses informasi" },
    { k: "+35%", v: "Peluang konversi" },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="grid gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-12">
            {/* Kolom teks */}
            <div>
              <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                Seberapa Penting <span className="text-blue-700">Website Company Profile</span> untuk Perusahaan?
              </h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-gray-700 md:text-lg">
                Website company profile adalah wajah digital bisnis Anda. Selain membangun kredibilitas, website membantu
                calon klien memahami layanan Anda dan mengambil tindakan lebih cepat.
              </p>

              {/* Bullets */}
              <ul className="mt-8 space-y-5">
                {points.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-semibold md:text-lg">{title}</p>
                      <p className="text-sm text-gray-700 md:text-base">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Chips kecil */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Tingkatkan trust", "Profesional", "Skalabel", "Mudah dikelola"].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm">
                    <CheckCircle2 className="h-4 w-4" /> {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Kolom gambar */}
            <div className="relative">
              <div className="relative mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
                <img
                  src="https://source.unsplash.com/600x400/?business,website"
                  alt="Ilustrasi website company profile"
                  className="h-auto w-full rounded-xl object-cover"
                />
                {/* badge mengambang */}
                <div className="pointer-events-none absolute -right-4 -top-4 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-md">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" /> Growth Insight
                  </div>
                </div>
              </div>

              {/* strip statistik */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.v} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
                    <div className="text-lg font-extrabold md:text-xl">{s.k}</div>
                    <div className="text-xs text-gray-700 md:text-sm">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA ringan opsional */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-gray-600 md:text-base">
            Ingin tampilan yang disesuaikan dengan brand Anda? Kami siap bantu dari UI/UX, copy, hingga implementasi SEO dasar.
          </p>
        </div>
      </div>
    </section>
  );
}
