/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        iosGlassLight: "rgba(255,255,255,0.28)",
        iosGlassDark: "rgba(26,26,28,0.28)",
        iosBlue: "#0A84FF",
        iosBlueDark: "#007AFF",
      },
      borderRadius: {
        ios: "28px",
        iosSm: "20px",
      },
      boxShadow: {
        ios: "inset 0 1px 1px rgba(255,255,255,.6), 0 8px 32px rgba(0,0,0,.12)",
        iosDark: "inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,.5)",
      },
    },
  },
  plugins: [],
}
