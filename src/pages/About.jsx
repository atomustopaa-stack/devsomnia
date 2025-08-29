// src/pages/About.jsx
import React from "react";

const socials = [
  { name: "Pinterest", href: "https://pinterest.com", icon: "/image/social/pinterest.svg" },
  { name: "Facebook", href: "https://facebook.com", icon: "/image/social/facebook.svg" },
  { name: "YouTube", href: "https://youtube.com", icon: "/image/social/youtube.svg" },
  { name: "Instagram", href: "https://instagram.com", icon: "/image/social/instagram.svg" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/image/social/linkedin.svg" },
  { name: "TikTok", href: "https://tiktok.com", icon: "/image/social/tiktok.svg" },
  { name: "Dribbble", href: "https://dribbble.com", icon: "/image/social/dribbble.svg" },
  { name: "X", href: "https://x.com", icon: "/image/social/x.svg" },
];

export default function About() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden text-white">
        {/* Solid blue background */}
        <div className="absolute inset-0" style={{ backgroundColor: "#1f2b80" }} />

        {/* Ornamen: radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl"
        />

        {/* Ornamen: grid tipis */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        >
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Konten Hero */}
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Tentang Kami
          </h1>
          <span className="mt-3 inline-block h-1 w-20 rounded-full bg-white/70" />

          <p className="mt-6 text-base md:text-lg text-blue-100/90">
            Kami berdedikasi membantu bisnis Anda tumbuh melalui solusi digital yang
            inovatif, profesional, dan mudah diakses.
          </p>

          {/* Ikon Sosial */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 md:gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 focus:outline-none"
                title={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
