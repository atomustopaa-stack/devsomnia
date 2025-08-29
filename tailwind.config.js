/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // toggle via class "dark" di <html>
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f59e0b", // amber-500 (kuning lemon)
          dark: "#d97706",
          light: "#fde68a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
