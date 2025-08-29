// src/components/layout/FooterModern.jsx
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function FooterModern({
  brand = "Devsomnia",
  accent = "#1f2b80",
  whatsapp = "6285722511172",
}) {
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    // demo only: kirim ke mailto (ganti ke backend/newsletter service kamu)
    window.location.href = `mailto:halo@devsomnia.com?subject=Subscribe%20Newsletter&body=${encodeURIComponent(
      `Email: ${email}`
    )}`;
  }

  const social = [
    { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter/X" },
    { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0b173d] text-gray-300">
      {/* Top row: brand + socials */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 pt-14">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3">
            {/* kalau punya logo image, ganti span ini jadi <img src="/image/logo.svg" .../> */}
            <span
              className="inline-grid place-items-center h-9 w-9 rounded-xl text-white font-bold"
              style={{ backgroundColor: accent }}
              aria-hidden
            >
              D
            </span>
            <span className="text-xl md:text-2xl font-extrabold text-white">
              {brand}
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 transition"
                aria-label={label}
                title={label}
              >
                <Icon className="h-4 w-4 text-white/90" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />
      </div>

      {/* Middle grid */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Column 1: Devsomnia (menu) */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              {brand}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/website/landing-page"
                  className="hover:text-white transition-colors"
                >
                  Pro Version (Landing Page)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services (Products) */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/services/website/company-profile"
                  className="hover:text-white transition-colors"
                >
                  Website Company Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ads/google-ads"
                  className="hover:text-white transition-colors"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="hover:text-white transition-colors"
                >
                  SEO & Artikel Pilar
                </Link>
              </li>
              <li>
                <Link
                  to="/services/design/logo"
                  className="hover:text-white transition-colors"
                >
                  Desain Logo & Brand
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/quick-start"
                  className="hover:text-white transition-colors"
                >
                  Quick Start
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/user-guide"
                  className="hover:text-white transition-colors"
                >
                  User Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Newsletter
            </h4>
            <form
              onSubmit={onSubmit}
              className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            >
              <label className="text-xs text-gray-300">Email</label>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 rounded-xl ring-1 ring-white/15 focus-within:ring-2 focus-within:ring-white/25 bg-transparent px-3 py-2">
                  <input
                    type="email"
                    required
                    placeholder="mail@devsomnia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none"
                    aria-label="Email"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition"
                  style={{ backgroundColor: accent }}
                >
                  Send <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <label className="mt-3 flex items-start gap-2 text-xs text-gray-400">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 rounded border-white/20 bg-transparent"
                />
                <span>
                  I agree with{" "}
                  <Link
                    to="/privacy"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/terms"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                  .
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-2 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>

          {/* CTA chat pill (kanan bawah pada desain contoh) */}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto group inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: accent }}>
              <MessageCircle className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm text-gray-200">
              Punya pertanyaan? <span className="font-semibold">Chat via WhatsApp</span>
            </span>
            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
