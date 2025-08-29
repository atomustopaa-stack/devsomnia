import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

// Placeholder Social Icon (Inisial Brand)
function SocialBadge({ label, href, initials }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-semibold hover:opacity-90 transition"
      title={label}
    >
      {initials}
    </a>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Dummy submit – nanti diganti integrasi backend/email service
    setTimeout(() => {
      alert("Pesan terkirim (dummy). Nanti ini kita hubungkan ke backend/email.");
      setLoading(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Hero: biru #1f2b80 + glow + grid (match About/Blog/Portfolio/Templates) ===== */}
      <section className="relative overflow-hidden text-white">
        {/* Warna dasar */}
        <div className="absolute inset-0" style={{ backgroundColor: "#1f2b80" }} />
        {/* Glow radial agar tidak flat */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl" />
        {/* Pola grid tipis */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="grid-contact" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>

        {/* Konten hero */}
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            Kontak
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Hubungi Kami
          </h1>
          <span className="mt-3 inline-block h-[3px] w-28 rounded-full bg-white/70" />
          <p className="mt-6 text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto">
            Ada pertanyaan atau butuh konsultasi? Kirim pesan melalui formulir di bawah atau hubungi kontak kami.
          </p>
        </div>
      </section>

      {/* ===== Info + Form (lebar ROM) ===== */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Info Card */}
            <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Info Kontak</h2>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-gray-100"><Phone className="size-5" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Telepon</p>
                    <p className="font-medium">+62 812-0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-gray-100"><Mail className="size-5" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">halo@contoh-agency.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-gray-100"><MapPin className="size-5" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="font-medium">Jl. Mawar No. 123, Jakarta</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-gray-100"><Clock className="size-5" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Jam Operasional</p>
                    <p className="font-medium">Senin–Jumat, 09.00–18.00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Ikuti kami</p>
                <div className="flex items-center gap-3">
                  <SocialBadge label="Instagram" href="#" initials="IG" />
                  <SocialBadge label="TikTok" href="#" initials="TT" />
                  <SocialBadge label="Facebook" href="#" initials="FB" />
                  <SocialBadge label="WhatsApp" href="#" initials="WA" />
                  <SocialBadge label="LinkedIn" href="#" initials="IN" />
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Kirim Pesan</h2>
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm text-gray-600">Nama</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Nama lengkap"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="nama@domain.com"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-sm text-gray-600">No. Telepon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="08xxxxxxxxxx"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="subject" className="text-sm text-gray-600">Subjek</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Judul pesan"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm text-gray-600">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    placeholder="Tulis pesan kamu di sini..."
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold shadow hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#1f2b80" }}
                  >
                    <Send className="size-4" />
                    {loading ? "Mengirim..." : "Kirim Pesan"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="h-80 w-full">
              {/* Dummy Google Maps Embed (Jakarta) */}
              <iframe
                title="Lokasi Kantor (Dummy)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982711.8477610548!2d105.12950731718748!3d-6.211544000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e7a1f0b1df%3A0x301576d14feb9b0!2sJakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
