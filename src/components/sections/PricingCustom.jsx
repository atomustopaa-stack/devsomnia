// File: src/components/sections/PricingCustom.jsx
// Style konsisten: brand #1f2b80, harga kecil, card highlight, expandable features, dark mode basic.

import { useState } from "react";
import {
  Check,
  X,
  Info,
  Shield,
  Headset,
  Wrench,
  Puzzle,
  GitBranch,
} from "lucide-react";

/* ---------- Util kecil ---------- */
const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 rounded-full bg-[#1f2b80]/10 p-1 dark:bg-[#1f2b80]/20">
      <Check className="h-4 w-4" />
    </span>
    <span className="text-sm md:text-base text-gray-700 leading-relaxed dark:text-gray-200">
      {children}
    </span>
  </li>
);

// Harga diperkecil agar harmonis
function Price({ value, suffix }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold md:text-3xl">{value}</span>
      {suffix ? (
        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {suffix}
        </span>
      ) : null}
    </div>
  );
}

/* ---------- Component utama ---------- */
export default function PricingCustom({
  title = "Estimasi Website Custom",
  subtitle = "Harga tergantung scope & kompleksitas. Mulai kecil, iterasi cepat.",
  whatsapp = "6285722511172",
  id = "pricing-custom",
}) {
  const [tab, setTab] = useState("build"); // build | care

  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-[#111a4c] dark:text-white">
            {title}
          </h2>
          <p className="mt-3 text-gray-600 md:text-lg dark:text-gray-300">
            {subtitle}
          </p>

          {/* Tabs */}
          <div
            className="mt-6 inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm dark:bg-gray-900 dark:border-gray-700"
            role="tablist"
            aria-label="Tipe paket"
          >
            <button
              onClick={() => setTab("build")}
              role="tab"
              aria-selected={tab === "build"}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition ${
                tab === "build"
                  ? "bg-[#1f2b80] text-white"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              Pembuatan (Milestone)
            </button>
            <button
              onClick={() => setTab("care")}
              role="tab"
              aria-selected={tab === "care"}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition ${
                tab === "care"
                  ? "bg-[#1f2b80] text-white"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              Maintenance (Bulanan)
            </button>
          </div>
        </div>

        {tab === "build" ? (
          <BuildPlans whatsapp={whatsapp} />
        ) : (
          <CarePlans whatsapp={whatsapp} />
        )}

        {/* Note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">
          <div className="flex items-start gap-3">
            <Info className="mt-1 h-5 w-5" />
            <p className="text-sm text-gray-700 md:text-base dark:text-gray-200">
              Estimasi dapat berubah setelah workshop & definisi scope. Kami
              sarankan pendekatan iteratif: deliver cepat per milestone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Plans ---------- */
function BuildPlans({ whatsapp }) {
  const plans = [
    {
      name: "Starter Custom",
      icon: Puzzle,
      price: "Mulai Rp 5–12 jt",
      desc: "Landing/internal tool sederhana dengan 1–2 integrasi.",
      features: [
        "UI khusus (1–2 layout inti)",
        "Auth sederhana (Email/Google)",
        "1–2 endpoint integrasi API",
        "Dashboard basic & export CSV",
        "Deploy & domain mapping",
      ],
      excludes: ["SSO/LDAP", "Role kompleks", "Audit log"],
    },
    {
      name: "Pro Custom",
      icon: GitBranch,
      ribbon: "Terpopuler",
      price: "Mulai Rp 15–35 jt",
      desc: "Aplikasi modular, multi-role, integrasi API lebih dalam.",
      features: [
        "Arsitektur modular & reusable",
        "Role-based access (admin/staff/user)",
        "Integrasi API/Webhook (2–5 layanan)",
        "File storage & CDN gambar",
        "Staging + QA terstruktur",
      ],
      excludes: ["Compliance ketat (ISO/PCI)", "Integrasi ERP penuh"],
      highlight: true,
    },
    {
      name: "Enterprise Custom",
      icon: Shield,
      price: "Hubungi Kami",
      desc: "Compliance, skala besar, & integrasi kompleks.",
      features: [
        "SSO/LDAP/OAuth & audit log",
        "Integrasi ERP/CRM/Payment",
        "Observability (logs/metrics/traces)",
        "Hardening & pentest eksternal",
        "Dokumentasi & pelatihan tim",
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
      price: "Rp 500.000",
      suffix: "/bulan",
      desc: "Perawatan ringan & patch minor.",
      features: [
        "Update konten minor (1×/bln)",
        "Monitoring uptime dasar",
        "Backup bulanan",
        "Patch dependensi minor",
      ],
    },
    {
      name: "Priority Care",
      icon: Headset,
      price: "Rp 1.200.000",
      suffix: "/bulan",
      desc: "Support prioritas & optimasi berkala.",
      features: [
        "Update (4 tiket/bln)",
        "Optimasi performa & keamanan",
        "Backup mingguan",
        "SLA respons lebih cepat",
      ],
      highlight: true,
    },
    {
      name: "Shield Care",
      icon: Shield,
      price: "Hubungi Kami",
      desc: "SLA custom & compliance.",
      features: [
        "SLA custom & on-call",
        "Backup harian",
        "Pengetesan berkala",
        "Audit keamanan berkala",
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

/* ---------- Card ---------- */
function PlanCard({ data, maintenance = false, whatsapp }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = data.icon;
  const highlight = data.highlight;

  const short = data.features.slice(0, 4);
  const rest = data.features.slice(4);

  const waText = `Halo Devsomnia, saya minat paket ${data.name} (${maintenance ? "Maintenance Bulanan" : "Website Custom – Milestone"}). Mohon info lebih lanjut.`;
  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}`;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-6 md:p-8 shadow-lg transition dark:bg-gray-900 ${
        highlight
          ? "border-[#1f2b80] shadow-xl ring-1 ring-[#1f2b80]/10"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      {data.ribbon ? (
        <div className="absolute -top-3 right-6 rounded-full bg-[#1f2b80] px-3 py-1 text-xs font-semibold text-white shadow">
          {data.ribbon}
        </div>
      ) : null}

      <div className="flex items-center gap-3">
        <div
          className={`rounded-2xl p-2 ${
            highlight ? "bg-[#1f2b80]/10" : "bg-gray-100 dark:bg-gray-800"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-[#0f1540] dark:text-white">
          {data.name}
        </h3>
      </div>

      <div className="mt-4">
        <Price value={data.price} suffix={data.suffix} />
        {data.desc ? (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {data.desc}
          </p>
        ) : null}
      </div>

      <ul className="mt-5 space-y-3" id={`${slugify(data.name)}-features`}>
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
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Tidak termasuk:
                </p>
                <ul className="mt-2 space-y-2">
                  {data.excludes.map((e) => (
                    <li key={e} className="flex items-start gap-3 opacity-80">
                      <span className="mt-1 rounded-full bg-gray-200 p-1 dark:bg-gray-700">
                        <X className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {e}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </ul>

      {(rest.length > 0 ||
        (Array.isArray(data.excludes) && data.excludes.length > 0)) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex w-fit items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          aria-expanded={expanded}
          aria-controls={`${slugify(data.name)}-features`}
        >
          {expanded ? "Tutup" : "Lihat lainnya"}
        </button>
      )}

      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
          highlight
            ? "bg-[#1f2b80] text-white hover:opacity-90"
            : "bg-gray-900 text-white hover:opacity-90 dark:bg-white dark:text-gray-900"
        }`}
        aria-label={`Diskusi fitur untuk paket ${data.name}`}
      >
        Diskusi Fitur
      </a>
    </div>
  );
}

/* ---------- helper ---------- */
function slugify(s) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}
