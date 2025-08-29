// import { useSettings } from "@/contexts/SettingsContext";
// import { Globe, Moon, Sun } from "lucide-react";
// import { useState } from "react";

// export default function ThemeLangToggle() {
//   const { lang, setLang, theme, setTheme, t } = useSettings();
//   const [openLang, setOpenLang] = useState(false);
//   const [openTheme, setOpenTheme] = useState(false);

//   const toggleLang = (val) => {
//     setLang(val);
//     setOpenLang(false);
//   };

//   const toggleTheme = (val) => {
//     setTheme(val);
//     setOpenTheme(false);
//   };

//   return (
//     <div className="flex items-center gap-2">
//       {/* Language Selector */}
//       <div className="relative">
//         <button
//           onClick={() => setOpenLang((s) => !s)}
//           className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition"
//           aria-haspopup="menu"
//           aria-expanded={openLang}
//         >
//           <Globe className="w-4 h-4" />
//           <span className="hidden sm:inline">{t("language")}:</span>
//           <span className="font-semibold uppercase">{lang}</span>
//         </button>
//         {openLang && (
//           <div
//             className="absolute right-0 mt-2 w-36 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700 shadow z-30 overflow-hidden"
//             role="menu"
//           >
//             <button
//               onClick={() => toggleLang("id")}
//               className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 ${
//                 lang === "id" ? "font-semibold" : ""
//               }`}
//             >
//               Indonesia
//             </button>
//             <button
//               onClick={() => toggleLang("en")}
//               className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 ${
//                 lang === "en" ? "font-semibold" : ""
//               }`}
//             >
//               English
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Theme Selector */}
//       <div className="relative">
//         <button
//           onClick={() => setOpenTheme((s) => !s)}
//           className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition"
//           aria-haspopup="menu"
//           aria-expanded={openTheme}
//         >
//           {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
//           <span className="hidden sm:inline">{t("theme")}:</span>
//           <span className="font-semibold capitalize">{theme}</span>
//         </button>
//         {openTheme && (
//           <div
//             className="absolute right-0 mt-2 w-40 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700 shadow z-30 overflow-hidden"
//             role="menu"
//           >
//             <button
//               onClick={() => toggleTheme("light")}
//               className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 ${
//                 theme === "light" ? "font-semibold" : ""
//               }`}
//             >
//               {t("light")}
//             </button>
//             <button
//               onClick={() => toggleTheme("dark")}
//               className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 ${
//                 theme === "dark" ? "font-semibold" : ""
//               }`}
//             >
//               {t("dark")}
//             </button>
//             <button
//               onClick={() => toggleTheme("system")}
//               className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10 ${
//                 theme === "system" ? "font-semibold" : ""
//               }`}
//             >
//               {t("system")}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
