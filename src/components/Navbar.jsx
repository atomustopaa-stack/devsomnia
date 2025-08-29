import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);         // mobile drawer
  const [megaOpen, setMegaOpen] = useState(false); // desktop mega menu
  const [scrolled, setScrolled] = useState(false); // header shadow
  const [loginOpen, setLoginOpen] = useState(false); // login modal
  const closeTimer = useRef(null);
  const location = useLocation();

  // close menus on route change
  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  // header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // clear pending timers on unmount
  useEffect(() => () => closeTimer.current && clearTimeout(closeTimer.current), []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // lock page scroll while drawer or modal open (drawer sendiri scrollable)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open || loginOpen ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev; };
  }, [open, loginOpen]);

  const linkBase =
    "relative px-3 py-2 rounded-lg text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal,#98DED9)]";

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        linkBase +
        (isActive
          ? " after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[var(--brand-navy,#161D6F)]"
          : "")
      }
    >
      {children}
    </NavLink>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/85 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3">
            {/* Brand */}
            <Link
              to="/"
              className="font-extrabold text-lg tracking-tight text-[var(--brand-navy,#161D6F)]"
            >
              DevSomnia
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              <NavItem to="/">Home</NavItem>
              {/* About dihilangkan */}

              {/* Mega Menu trigger */}
              <div
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setMegaOpen(true);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={linkBase}
                  aria-haspopup="menu"
                  aria-expanded={megaOpen}
                  onFocus={() => setMegaOpen(true)}
                  onBlur={scheduleClose}
                >
                  Service
                </button>

                {/* MEGA MENU — glassmorphism overlay (absolute) */}
                {megaOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 mt-2 w-[820px] rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl p-5 grid grid-cols-[280px_1fr_1fr] gap-6"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {/* LEFT PANEL (NAVY) */}
                    <aside className="rounded-[24px] p-5 bg-[var(--brand-navy,#161D6F)] text-white flex flex-col justify-between min-h-[300px]">
                      <div className="space-y-1.5">
                        <h3 className="text-xl font-bold leading-snug">
                          Selalu memberikan <span className="text-[var(--brand-teal,#98DED9)]">Layanan</span> terbaik untuk kamu
                        </h3>
                        <p className="text-white/80 text-xs">
                          Kami bantu bangun & promosi brandmu.
                        </p>
                      </div>
                      <div className="relative mt-4 h-28 rounded-2xl bg-white/10 flex items-center justify-center">
                        {/* Dummy illustration */}
                        <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
                          <rect x="10" y="20" width="80" height="50" rx="8" stroke="white" opacity=".6"/>
                          <rect x="30" y="38" width="40" height="8" rx="4" fill="white" opacity=".7"/>
                          <rect x="30" y="50" width="26" height="8" rx="4" fill="white" opacity=".35"/>
                        </svg>
                      </div>
                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center justify-center rounded-2xl bg-[var(--brand-mint,#C7FFD8)] text-black font-semibold px-4 py-2 hover:opacity-95 transition"
                      >
                        Konsultasi Gratis
                      </Link>
                    </aside>

                    {/* COL 1: Website + Ads */}
                    <div className="space-y-5">
                      <Category
                        title="Jasa Website"
                        items={[
                          { label: "Landing Page", to: "/services/website/landing-page" },
                          { label: "Company Profile", to: "/services/website/company-profile" },
                          { label: "Sekolah", to: "/services/website/sekolah" },
                          { label: "Ecommerce", to: "/services/website/ecommerce" },
                          { label: "Custom", to: "/services/website/custom" },
                        ]}
                      />
                      <Category
                        title="Jasa Iklan"
                        items={[
                          { label: "Google Ads", to: "/services/ads/google-ads" },
                          // { label: "Tiktok Ads", to: "/services/ads/tiktok-ads" },
                          { label: "Meta Ads", to: "/services/ads/meta-ads" },
                        ]}
                      />
                    </div>

                    {/* COL 2: Design + SEO */}
                    <div className="space-y-5">
                      <Category
                        title="Jasa Design"
                        items={[
                          { label: "Desain Logo", to: "/services/design/logo" },
                          { label: "Desain banner", to: "/services/design/banner" },
                          { label: "Kelola Sosmed", to: "/services/design/sosmed-post" },
                        ]}
                      />
                      <Category
                        title="SEO"
                        items={[
                          { label: "Artikel Pilar", to: "/services/seo/pilar-artikel" },
                          { label: "Backlink", to: "/services/seo/backlink" },
                        ]}
                      />
                    </div>
                  </div>
                )}
              </div>

              <NavItem to="/blog">Blog</NavItem>

              {/* Templates Free dengan badge FREE kecil biru di pojok kanan */}
              <div className="relative">
                <NavItem to="/templates/free">
                  <span className="pr-4">Templates Free</span>
                  <span className="absolute -top-0.5 right-1 text-[10px] leading-none px-1.5 py-[2px] rounded-md bg-[var(--brand-royal,#0B2F9F)] text-white">
                    FREE
                  </span>
                </NavItem>
              </div>

              <NavItem to="/portfolio">Portofolio</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </nav>

            {/* Actions (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://wa.me/6285722511172"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-b from-white to-slate-50 text-slate-700 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIconBlue className="w-5 h-5" />
                WhatsApp
              </a>
              <button
                onClick={() => setLoginOpen(true)}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-[var(--brand-navy,#161D6F)] text-white text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-sm"
              >
                Login
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-controls="mobile-drawer"
              aria-expanded={open}
            >
              <HamburgerIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER — FIXED OVERLAY */}
      {open && (
        <div
          id="mobile-drawer"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="h-full grid grid-rows-[1fr_auto]">
            {/* CONTENT (scrollable) */}
            <div className="overflow-y-auto">
              <div className="px-4 py-3 grid gap-1">
                <MobileLink to="/" onNavigate={() => setOpen(false)}>Home</MobileLink>
                {/* About dihilangkan */}

                {/* Accordion Service */}
                <details className="py-2">
                  <summary className="cursor-pointer font-medium">Service</summary>
                  <div className="mt-2 pl-3 grid grid-cols-1 gap-2">
                    <SectionLabel>Website</SectionLabel>
                    <MobileLink to="/services/website/landing-page" onNavigate={() => setOpen(false)}>Landing Page</MobileLink>
                    <MobileLink to="/services/website/company-profile" onNavigate={() => setOpen(false)}>Company Profile</MobileLink>
                    <MobileLink to="/services/website/sekolah" onNavigate={() => setOpen(false)}>Sekolah</MobileLink>
                    <MobileLink to="/services/website/ecommerce" onNavigate={() => setOpen(false)}>Ecommerce</MobileLink>
                    <MobileLink to="/services/website/custom" onNavigate={() => setOpen(false)}>Custom</MobileLink>

                    <SectionLabel className="mt-3">Jasa Iklan</SectionLabel>
                    <MobileLink to="/services/ads/google-ads" onNavigate={() => setOpen(false)}>Google Ads</MobileLink>
                    <MobileLink to="/services/ads/tiktok-ads" onNavigate={() => setOpen(false)}>Tiktok Ads</MobileLink>
                    <MobileLink to="/services/ads/meta-ads" onNavigate={() => setOpen(false)}>Meta Ads</MobileLink>

                    <SectionLabel className="mt-3">Jasa Design</SectionLabel>
                    <MobileLink to="/services/design/logo" onNavigate={() => setOpen(false)}>Logo</MobileLink>
                    <MobileLink to="/services/design/banner" onNavigate={() => setOpen(false)}>Banner</MobileLink>
                    <MobileLink to="/services/design/sosmed-post" onNavigate={() => setOpen(false)}>Desain Sosmed</MobileLink>

                    <SectionLabel className="mt-3">SEO</SectionLabel>
                    <MobileLink to="/services/seo/pilar-artikel" onNavigate={() => setOpen(false)}>Artikel Pilar</MobileLink>
                    <MobileLink to="/services/seo/backlink" onNavigate={() => setOpen(false)}>Backlink</MobileLink>
                  </div>
                </details>

                <MobileLink to="/blog" onNavigate={() => setOpen(false)}>Blog</MobileLink>

                {/* Templates Free + badge FREE di kanan */}
                <NavLink
                  to="/templates/free"
                  className={({ isActive }) =>
                    `py-2 rounded-lg px-2 transition-all duration-200 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm flex items-center justify-between ${
                      isActive ? "bg-slate-100 font-medium" : ""
                    }`
                  }
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setOpen(false);
                  }}
                >
                  <span>Templates Free</span>
                  <span className="ml-2 text-[10px] leading-none px-1.5 py-[2px] rounded-md bg-[var(--brand-royal,#0B2F9F)] text-white">
                    FREE
                  </span>
                </NavLink>

                <MobileLink to="/portfolio" onNavigate={() => setOpen(false)}>Portofolio</MobileLink>
                <MobileLink to="/contact" onNavigate={() => setOpen(false)}>Contact</MobileLink>
              </div>
            </div>

            {/* BOTTOM BAR (tetap) */}
            <div className="sticky bottom-0 bg-white/90 backdrop-blur border-t-0 px-4 py-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/6285722511172"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-gradient-to-b from-white to-slate-50 text-slate-700 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsAppIconBlue className="w-5 h-5" />
                  WhatsApp
                </a>
                <button
                  onClick={() => {
                    setLoginOpen(true);
                    setOpen(false);
                  }}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl bg-[var(--brand-navy,#161D6F)] text-white text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setLoginOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-lg font-semibold text-[var(--brand-navy,#161D6F)]">
                Login
              </h3>
              <button
                onClick={() => setLoginOpen(false)}
                className="text-slate-500 hover:text-slate-800"
                aria-label="Close login modal"
              >
                ✕
              </button>
            </div>
            <form className="grid gap-3">
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Email</span>
                <input
                  type="email"
                  className="rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal,#98DED9)]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Password</span>
                <input
                  type="password"
                  className="rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal,#98DED9)]"
                  placeholder="••••••••"
                />
              </label>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--brand-royal,#0B2F9F)] text-white px-4 py-2 transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-sm"
              >
                Masuk
              </button>
              <p className="text-xs text-slate-500">
                (Akses login hanya member dari admin)
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* ===== Helper Components ===== */
function Category({ title, items }) {
  return (
    <div>
      <h4 className="font-extrabold text-lg text-slate-900 mb-2">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.to}>
            <Link
              to={it.to}
              className="group flex items-center gap-3 rounded-2xl bg-[var(--mint-soft,#EAFBF1)]/90 hover:bg-[var(--brand-mint,#C7FFD8)]/70 px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-sm text-slate-800 group-hover:text-slate-900">
                {it.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ to, children, onNavigate }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-2 rounded-lg px-2 transition-all duration-200 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm ${
          isActive ? "bg-slate-100 font-medium" : ""
        }`
      }
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        onNavigate && onNavigate();
      }}
    >
      {children}
    </NavLink>
  );
}

function SectionLabel({ children, className = "" }) {
  return <p className={`text-xs uppercase text-slate-500 ${className}`}>{children}</p>;
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" opacity=".3" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

/** Ikon hamburger (3 garis rounded, panjang beda) */
function HamburgerIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      {/* bar atas (sedang) */}
      <rect x="5" y="7" rx="3" ry="3" width="18" height="4" fill="currentColor" />
      {/* bar tengah (paling panjang) */}
      <rect x="3" y="13" rx="3" ry="3" width="22" height="4" fill="currentColor" />
      {/* bar bawah (pendek) */}
      <rect x="7" y="19" rx="3" ry="3" width="14" height="4" fill="currentColor" />
    </svg>
  );
}

/** Ikon WhatsApp biru (selaras dengan tombol Login) */
function WhatsAppIconBlue({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#0B2F9F" />
      <path
        d="M21.59 18.97c-.35-.18-2.06-1.02-2.38-1.13-.32-.12-.56-.18-.8.18-.24.35-.92 1.13-1.13 1.36-.21.23-.42.25-.77.07-.35-.18-1.47-.54-2.8-1.73-1.03-.92-1.72-2.05-1.93-2.4-.21-.35-.02-.54.16-.72.16-.16.35-.42.52-.63.18-.21.23-.35.35-.59.12-.24.06-.44-.03-.62-.09-.18-.8-1.92-1.1-2.63-.29-.7-.58-.61-.8-.62l-.68-.01c-.24 0-.62.09-.95.44-.32.35-1.25 1.22-1.25 2.97 0 1.75 1.28 3.45 1.46 3.68.18.23 2.52 3.95 6.21 5.38 3.69 1.43 3.69.95 4.36.89.67-.06 2.15-.87 2.45-1.71.3-.84.3-1.55.21-1.71-.09-.16-.33-.25-.68-.43z"
        fill="#fff"
      />
    </svg>
  );
}
