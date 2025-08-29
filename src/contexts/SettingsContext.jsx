import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SettingsContext = createContext();

const LS_KEY_LANG = "devsomnia.lang";   // "id" | "en"
const LS_KEY_THEME = "devsomnia.theme"; // "light" | "dark" | "system"

// Mini i18n dictionary: tambah key sesuai kebutuhan
const DICT = {
  id: {
    home: "Beranda",
    services: "Layanan",
    contact: "Kontak",
    theme: "Tema",
    language: "Bahasa",
    light: "Terang",
    dark: "Gelap",
    system: "Sistem",
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
};

export function SettingsProvider({ children }) {
  // Bahasa
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(LS_KEY_LANG);
    if (saved === "id" || saved === "en") return saved;
    return "id"; // default Indonesia
  });

  // Tema
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(LS_KEY_THEME);
    if (saved === "light" || saved === "dark" || saved === "system") return saved;
    return "system";
  });

  // Terapkan tema ke <html> (tailwind 'dark' class)
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const effective = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

    if (effective === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  // Simpan ke localStorage
  useEffect(() => localStorage.setItem(LS_KEY_LANG, lang), [lang]);
  useEffect(() => localStorage.setItem(LS_KEY_THEME, theme), [theme]);

  // translator
  const t = useMemo(() => {
    const table = DICT[lang] || DICT.id;
    return (key) => table[key] ?? key;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, theme, setTheme, t }),
    [lang, theme, t]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
