// File: src/components/sections/PricingCompanyProfile.jsx
// Style disamakan dengan PricingLandingPage: brand #1f2b80, harga kecil, card highlight, expandable features.

import { useState } from "react";
import { Check, X, Sparkles, Rocket, Shield, Headset, Wrench, Info } from "lucide-react";

/* ---------- Util kecil ---------- */
const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 rounded-full bg-[#1f2b80]/10 p-1">
      <Check className="h-4 w-4" />
    </span>
    <span className="text-sm md:text-base text-gray-700 leading-relaxed">{children}</span>
  </li>
);

// Harga diperkecil agar harmonis
function Price({ value, suffix }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold md:text-3xl">{value}</span>
      {suffix ? <span className="text-xs md:text-sm text-gray-500">{suffix}</span> : null}
    </div>
  );
}

/* ---------- Component utama ---------- */
export default function PricingCompanyProfile({
  title = "Paket Harga Company Profile",
  subtitle = "Fleksibel, bisa upgrade fitur kapan saja.",
  whatsapp = "6285722511172",
  id = "pricing-company-profile",
}) {
  const [tab, setTab] = useState("build"); // build | care

  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 text-gray-600 md:text-lg">{subtitle}</p>

          {/* Tabs */}
          <div className="mt-6 inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setTab("build")}
              className={`px-4 py-2 text-sm md:text-base rounded-full ${
                tab === "build" ? "bg-[#1f2b80] text-white" : "text-gray-700"
              }`}
              aria-pressed={tab === "build"}
            >
              Sekali Bayar
            </button>
            <button
              onClick={() => setTab("care")}
              className={`px-4 py-2 text-sm md:text-base rounded-full ${
                tab === "care" ? "bg-[#1f2b80] text-white" : "text-gray-700"
              }`}
              aria-pressed={tab === "care"}
            >
              Bulanan
            </button>
          </div>
        </div>

        {tab === "build" ? (
          <BuildPlans whatsapp={whatsapp} />
        ) : (
          <CarePlans whatsapp={whatsapp} />
        )}

        {/* Note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-1 h-5 w-5" />
            <p className="text-sm text-gray-700 md:text-base">
              Harga contoh — sesuaikan dengan kebutuhan. Semua paket bisa ditambah halaman/fitur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Data & list ---------- */
function BuildPlans({ whatsapp }) {
  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      ribbon: null,
      price: "Rp 1.750.000",
      desc: "Profil sederhana, profesional, dan cepat online.",
      features: [
        "Desain Custom & responsif",
        "Gratis Domain .com/.net/.my.id",
        "Free Logo (opsional)",
        "Gratis SSL / HTTPS",
        "Form kontak & CTA WhatsApp",
        "Optimasi performa dasar",
        "Integrasi Google Maps",
        "Integrasi ikon sosial media",
        "Deployment & domain mapping (opsional)",
        "6 halaman Custon Desain",
        "10 Giga Memori",
        "70.00 Max Visitor",
        "Page Speed Up To 100%",
        "Copywriting profesional",
        "Support Buat Iklan",
        "Pengerjaan 5-7 Hari",
        "website Siap Pakai",
        "bebas Pilih tema Envato (opsional)"

      ],
      excludes: ["Copywriting Lanjutan", "SEO lanjutan (Schema/Blog)", "Akses Admin", "Upad Sendiri", "Akses Cpnel"],
    },
    {
      name: "Pro",
      icon: Rocket,
      ribbon: "Terpopuler",
      price: "Rp 3.500.000",
      desc: "Tampil menonjol di pencarian, siap dikembangkan.",
      features: [
        "Desain Custom & responsif",
        "Gratis Domain .com/.net/.my.id",
        "Free Logo (opsional)",
        "Gratis SSL / HTTPS",
        "Form kontak & CTA WhatsApp",
        "Optimasi performa dasar",
        "Integrasi Google Maps",
        "Integrasi ikon sosial media",
        "Deployment & domain mapping (opsional)",
        "12 halaman Custon Desain",
        "26 Giga Memori",
        "100.00 Max Visitor",
        "Page Speed Up To 100%",
        "Copywriting profesional",
        "Support Buat Iklan",
        "Pengerjaan 4-5 Hari",
        "website Siap Pakai",
        "bebas Pilih tema Envato (opsional)",
        "Copywriting Lanjutan", 
        "SEO lanjutan (Schema/Blog)",

      ],
      excludes: ["Akses Admin", "Upad Sendiri", "Akses Cpnel"],
      highlight: true,
    },
    {
      name: "Enterprise",
      icon: Shield,
      ribbon: null,
      price: "Hubungi Kami",
      desc: "Untuk korporasi: workflow, integrasi API, dan compliance.",
      features: [
        "Termasuk Semua paket Yang ada",
        "Bebas Pilih Domain",
        "Desain kustom kompleks (komponen reusable)",
        "Integrasi API/sistem internal",
        "Akses role-based & audit log",
        "SEO lanjutan + konten pilar",
        "Staging & QA terstruktur",
        "Dokumentasi & pelatihan tim",
        "akses Cpanel (opsional)",
        "bantu Dibantu Instalasi Google Ads "

      ],
      excludes: [],
    },
  ];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <PlanCard key={p.name} data={p} whatsapp={whatsapp} />
      ))}
    </div>
  );
}

function CarePlans({ whatsapp }) {
  const plans = [
    {
      name: "Basic Care",
      icon: Wrench,
      price: "Rp 150.000",
      suffix: "/bulan",
      desc: "Wajib Langganan 3 bulan pertama. Profil sederhana, profesional, dan cepat online.",
      features: [
        "Desain Custom & responsif",
        "Gratis Domain .com/.net/.my.id",
        "Free Logo (opsional)",
        "Gratis SSL / HTTPS",
        "Form kontak & CTA WhatsApp",
        "Optimasi performa dasar",
        "Integrasi Google Maps",
        "Integrasi ikon sosial media",
        "Deployment & domain mapping (opsional)",
        "6 halaman Custon Desain",
        "10 Giga Memori",
        "70.00 Max Visitor",
        "Page Speed Up To 100%",
        "Copywriting profesional",
        "Support Buat Iklan",
        "Pengerjaan 2-3 Hari",
        "website Siap Pakai",
        "bebas Pilih tema Envato (opsional)"

      ],
    },
    {
      name: "Priority Care",
      icon: Headset,
      price: "Rp 350.000",
      suffix: "/bulan",
      desc: "Wajib Langganan 3 bulan pertama. Profil sederhana, profesional, dan cepat online.",
      features: [
        "Desain Custom & responsif",
        "Gratis Domain .com/.net/.my.id",
        "Free Logo (opsional)",
        "Gratis SSL / HTTPS",
        "Form kontak & CTA WhatsApp",
        "Optimasi performa dasar",
        "Integrasi Google Maps",
        "Integrasi ikon sosial media",
        "Deployment & domain mapping (opsional)",
        "12 halaman Custon Desain",
        "26 Giga Memori",
        "100.00 Max Visitor",
        "Page Speed Up To 100%",
        "Copywriting profesional",
        "Support Buat Iklan",
        "Pengerjaan 4-5 Hari",
        "website Siap Pakai",
        "bebas Pilih tema Envato (opsional)",
        "Copywriting Lanjutan", 
        "SEO lanjutan (Schema/Blog)",

      ],
      highlight: true,
    },
    {
      name: "Shield Care",
      icon: Shield,
      price: "Hubungi Kami",
      suffix: null,
      desc: "Wajib Langganan 5 bulan pertama. Untuk korporasi: workflow, integrasi API, dan compliance.",
      features: [
        "Termasuk Semua paket Yang ada",
        "Bebas Pilih Domain",
        "Desain kustom kompleks (komponen reusable)",
        "Integrasi API/sistem internal",
        "Akses role-based & audit log",
        "SEO lanjutan + konten pilar",
        "Staging & QA terstruktur",
        "Dokumentasi & pelatihan tim",
        "akses Cpanel (opsional)",
        "bantu Dibantu Instalasi Google Ads "

      ],
    },
  ];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <PlanCard key={p.name} data={p} maintenance whatsapp={whatsapp} />
      ))}
    </div>
  );
}

/* ---------- Kartu Plan ---------- */
function PlanCard({ data, maintenance = false, whatsapp }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = data.icon;
  const highlight = data.highlight;

  // tampilkan 4 fitur dulu, sisanya saat expanded
  const short = data.features.slice(0, 4);
  const rest = data.features.slice(4);

  const waText = `Halo Devsomnia, saya minat paket ${data.name} (${maintenance ? "Maintenance Bulanan" : "Pembuatan Sekali Bayar"}). Mohon info lebih lanjut.`;
  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}`;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-6 md:p-8 shadow-lg transition ${
        highlight ? "border-[#1f2b80] shadow-xl ring-1 ring-[#1f2b80]/10" : "border-gray-200"
      }`}
    >
      {data.ribbon ? (
        <div className="absolute -top-3 right-6 rounded-full bg-[#1f2b80] px-3 py-1 text-xs font-semibold text-white shadow">
          {data.ribbon}
        </div>
      ) : null}

      <div className="flex items-center gap-3">
        <div className={`rounded-2xl p-2 ${highlight ? "bg-[#1f2b80]/10" : "bg-gray-100"}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{data.name}</h3>
      </div>

      <div className="mt-4">
        <Price value={data.price} suffix={data.suffix} />
        {data.desc ? <p className="mt-1 text-sm text-gray-600">{data.desc}</p> : null}
      </div>

      <ul
        className="mt-5 space-y-3"
        id={`${data.name.replace(/\s+/g, "-").toLowerCase()}-features`}
      >
        {short.map((f) => (
          <Bullet key={f}>{f}</Bullet>
        ))}

        {expanded && (
          <div className="space-y-3">
            {rest.map((f) => (
              <Bullet key={f}>{f}</Bullet>
            ))}

            {Array.isArray(data.excludes) && data.excludes.length > 0 ? (
              <div className="pt-2">
                <p className="text-xs font-semibold text-gray-500">Tidak termasuk:</p>
                <ul className="mt-2 space-y-2">
                  {data.excludes.map((e) => (
                    <li key={e} className="flex items-start gap-3 opacity-80">
                      <span className="mt-1 rounded-full bg-gray-200 p-1">
                        <X className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-gray-600">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </ul>

      {(rest.length > 0 || (Array.isArray(data.excludes) && data.excludes.length > 0)) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex w-fit items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          aria-expanded={expanded}
          aria-controls={`${data.name.replace(/\s+/g, "-").toLowerCase()}-features`}
        >
          {expanded ? "Tutup" : "Lihat lainnya"}
        </button>
      )}

      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
          highlight ? "bg-[#1f2b80] text-white hover:opacity-90" : "bg-gray-900 text-white hover:opacity-90"
        }`}
        aria-label={`Minta penawaran untuk paket ${data.name}`}
      >
        Minta Penawaran
      </a>
    </div>
  );
}
