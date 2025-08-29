// src/components/ShowcaseCTA.jsx
import { useState, useMemo } from "react";
import { Building2, MapPin, Mail, Send } from "lucide-react";

export default function ShowcaseCTA() {
  const SERVICES = useMemo(
    () => [
      "Landing Page",
      "Company Profile",
      "Website Sekolah",
      "Ecommerce",
      "Website Custom",
      "Maintenance Website",
      "SEO",
      "UI/UX Design",
      "Google Ads",
      "Meta Ads",
      "Tiktok Ads",
    ],
    []
  );

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !company || !service) return;
    setSubmitting(true);

    const targetWa = "6285722511172";
    const text = `Halo, saya ${name} dari perusahaan ${company}. Saya ingin berkonsultasi mengenai layanan ${service}.`;
    const msg = encodeURIComponent(text);
    const url = `https://wa.me/${targetWa}?text=${msg}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  };

  return (
    <section className="relative my-16 md:my-24">
      <div className="mx-auto max-w-screen-xl rounded-3xl bg-[#1f2b80] px-4 md:px-8 py-20 shadow-xl overflow-hidden">
        {/* background subtle pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Grid container */}
        <div className="relative grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
          {/* Left: Form card */}
          <div className="rounded-2xl bg-white/10 text-white p-6 md:p-8 shadow-lg backdrop-blur">
            <h3 className="text-base md:text-lg font-semibold mb-5 leading-tight">
              Hubungi Kami
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[12px] md:text-xs/5 opacity-90 mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lengkap"
                  className="w-full rounded-full bg-white/20 backdrop-blur px-5 py-3 outline-none placeholder:text-white/70 focus:ring-2 ring-lime-300/70"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-[12px] md:text-xs/5 opacity-90 mb-1">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Contoh: Devsomnia"
                  className="w-full rounded-full bg-white/20 backdrop-blur px-5 py-3 outline-none placeholder:text-white/70 focus:ring-2 ring-lime-300/70"
                  required
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-[12px] md:text-xs/5 opacity-90 mb-1">
                  Pilih Layanan
                </label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full appearance-none rounded-full bg-white/20 backdrop-blur px-5 py-3 pr-10 outline-none focus:ring-2 ring-lime-300/70"
                    required
                  >
                    <option value="" disabled>
                      — Pilih layanan —
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="text-slate-900">
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
                    ▾
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 rounded-full bg-lime-300 text-slate-900 font-medium px-5 py-3 hover:bg-lime-200 transition shadow-lg disabled:opacity-60"
              >
                <span>Kirim ke WhatsApp</span>
                <Send size={18} className="transition group-hover:translate-x-0.5" />
              </button>

              <p className="text-[12px] md:text-xs/6 text-white/70">
                Dengan menekan tombol ini, Anda akan diarahkan ke WhatsApp untuk mengirim pesan otomatis.
              </p>
            </form>
          </div>

          {/* Right: Copy & contact */}
          <div className="flex flex-col justify-center text-white space-y-6">
            {/* Eyebrow (ornamen kecil) */}
            <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#D6FCF4" }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D6FCF4" }} />
              Contact Us
            </span>

            {/* H2 sesuai permintaan: putih + Company #D6FCF4 */}
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Get in Touch With Our</span>{" "}
              <span className="italic" style={{ color: "#D6FCF4" }}>
                Company
              </span>
            </h2>

            <p className="max-w-prose text-gray-200 text-base md:text-lg leading-8">
              Kami siap bantu project website & pemasaran digital Anda—mulai dari landing page, company profile, hingga ecommerce. Respon cepat via WhatsApp.
            </p>

            <ul className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white/90">
              <li className="inline-flex items-center gap-2"><Building2 size={16} /> Devsomnia</li>
              <li className="inline-flex items-center gap-2"><MapPin size={16} /> Indonesia</li>
              <li className="inline-flex items-center gap-2"><Mail size={16} /> company@gmail.com</li>
            </ul>

            {/* Dummy illustration */}
            <div className="rounded-2xl bg-white/10 backdrop-blur p-0 overflow-hidden shadow-lg">
              <div className="aspect-[16/8] w-full bg-gradient-to-br from-white/20 to-white/5 relative">
                <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="g2" x1="0" x2="1">
                      <stop offset="0%" stopColor="#a3e635" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="200" fill="url(#g2)" opacity="0.25" />
                  <g fill="none" stroke="white" strokeOpacity=".5">
                    <circle cx="80" cy="120" r="32" />
                    <rect x="140" y="70" width="180" height="90" rx="12" />
                    <path d="M150 140 L210 95 L260 125 L310 100" />
                  </g>
                  <text x="20" y="36" fill="white" opacity=".8" fontSize="18" fontFamily="sans-serif">Project Preview</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
