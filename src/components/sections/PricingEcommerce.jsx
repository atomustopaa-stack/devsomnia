// File: src/components/sections/PricingEcommerce.jsx
// Pricing Ecommerce: card-based, expandable features, props untuk judul & WA.
// Desain & style disamakan dengan PricingLandingPage.jsx

import { useState } from "react";
import { Check, X, ShoppingBag, Rocket, Shield, Headset, Wrench } from "lucide-react";

/* ---------- Util kecil ---------- */
const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 rounded-full bg-blue-600/10 p-1">
      <Check className="h-4 w-4" />
    </span>
    <span className="text-sm md:text-base text-gray-700 leading-relaxed">{children}</span>
  </li>
);

// Harga diperkecil: text-2xl md:text-3xl & font-bold
function Price({ value, suffix }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold md:text-3xl">{value}</span>
      {suffix ? <span className="text-xs md:text-sm text-gray-500">{suffix}</span> : null}
    </div>
  );
}

/* ---------- Component utama ---------- */
export default function PricingEcommerce({
  title = "Paket Website Ecommerce",
  subtitle = "Skalakan penjualan dengan fitur yang pas untuk bisnis Anda.",
  whatsapp = "6285722511172",
  id = "pricing",
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
                tab === "build" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
              aria-pressed={tab === "build"}
            >
              Sekali Bayar
            </button>
            <button
              onClick={() => setTab("care")}
              className={`px-4 py-2 text-sm md:text-base rounded-full ${
                tab === "care" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
              aria-pressed={tab === "care"}
            >
              Bulanan
            </button>
          </div>
        </div>

        {tab === "build" ? <BuildPlans whatsapp={whatsapp} /> : <CarePlans whatsapp={whatsapp} />}
      </div>
    </section>
  );
}

/* ---------- Data & list ---------- */
function BuildPlans({ whatsapp }) {
  const plans = [
    {
      name: "Starter Shop",
      icon: ShoppingBag,
      ribbon: null,
      price: "Rp 3.500.000",
      desc: "Toko sederhana untuk mulai jualan online.",
      features: [
        "Katalog + kategori produk",
        "Keranjang & checkout sederhana",
        "Metode pembayaran transfer manual",
        "Ongkir statis (manual)",
        "Optimasi performa dasar",
        "Integrasi WhatsApp untuk order",
      ],
      excludes: ["Gateway pembayaran otomatis", "Ongkir otomatis", "Multi-gudang"],
    },
    {
      name: "Pro Commerce",
      icon: Rocket,
      ribbon: "Terpopuler",
      price: "Rp 7.500.000",
      desc: "Siap skala: pembayaran & ongkir otomatis.",
      features: [
        "Semua fitur Starter",
        "Gateway pembayaran (Midtrans/Xendit)*",
        "Ongkir otomatis (RajaOngkir/ID)*",
        "Voucher/kupon & ongkir promo",
        "Dashboard pesanan & status",
        "Integrasi analitik (GA4/Meta Pixel)",
      ],
      excludes: ["ERP/akuntansi terintegrasi"],
      highlight: true,
    },
    {
      name: "Enterprise Commerce",
      icon: Shield,
      ribbon: null,
      price: "Hubungi Kami",
      desc: "Integrasi kompleks & keamanan tinggi.",
      features: [
        "Integrasi ERP/akuntansi",
        "Multi-gudang & stok real-time",
        "Role-based access & audit log",
        "Staging & QA terstruktur",
        "CDN gambar & optimasi skala",
        "Hardening & monitoring",
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
      price: "Rp 300.000",
      suffix: "/bulan",
      desc: "Maintenance ringan toko online.",
      features: [
        "Update konten minor (1x/bln)",
        "Monitoring uptime dasar",
        "Backup bulanan",
        "Patch dependensi minor",
      ],
    },
    {
      name: "Priority Care",
      icon: Headset,
      price: "Rp 650.000",
      suffix: "/bulan",
      desc: "Support cepat & optimasi berkala.",
      features: [
        "Update konten (4 tiket/bln)",
        "Optimasi performa & keamanan",
        "Backup mingguan",
        "Support WhatsApp prioritas",
      ],
      highlight: true,
    },
    {
      name: "Shield Care",
      icon: Shield,
      price: "Hubungi Kami",
      suffix: null,
      desc: "SLA custom untuk skala besar.",
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

/* ---------- Kartu Plan ---------- */
function PlanCard({ data, maintenance = false, whatsapp }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = data.icon;
  const highlight = data.highlight;

  // tampilkan 4 fitur dulu, sisanya saat expanded
  const short = data.features.slice(0, 4);
  const rest = data.features.slice(4);

  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Halo Devsomnia, saya minat paket ${data.name} (Ecommerce)`
  )}`;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-6 md:p-8 shadow-lg transition ${
        highlight ? "border-blue-600 shadow-xl ring-1 ring-blue-600/10" : "border-gray-200"
      }`}
    >
      {data.ribbon ? (
        <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
          {data.ribbon}
        </div>
      ) : null}

      <div className="flex items-center gap-3">
        <div className={`rounded-2xl p-2 ${highlight ? "bg-blue-600/10" : "bg-gray-100"}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{data.name}</h3>
      </div>

      <div className="mt-4">
        <Price value={data.price} suffix={data.suffix} />
        {data.desc ? <p className="mt-1 text-sm text-gray-600">{data.desc}</p> : null}
      </div>

      <ul className="mt-5 space-y-3" id={`${data.name.replace(/\s+/g, "-").toLowerCase()}-features`}>
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
          highlight ? "bg-blue-600 text-white hover:opacity-90" : "bg-gray-900 text-white hover:opacity-90"
        }`}
      >
        Minta Penawaran
      </a>
    </div>
  );
}
