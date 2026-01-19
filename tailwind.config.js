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
        // iOS system colors
        iosBlue: "#0A84FF",
        iosBlueDark: "#007AFF",

        // surfaces
        iosBg: "#F8F8FA",
        iosDark: "#0F0F10",
        iosDarkElevated: "#161618",

        // borders / hairlines
        iosBorder: "rgba(0,0,0,0.08)",
        iosBorderDark: "rgba(255,255,255,0.08)",

        // text
        iosText: "#1C1C1E",
        iosTextDark: "#EBEBF0",

        // fluid backgrounds (glass)
        iosFluid: "rgba(255,255,255,0.40)",
        iosFluidDark: "rgba(20,20,20,0.45)",
      },

      borderRadius: {
        ios: "22px",
      },

      boxShadow: {
        ios: "0 4px 20px rgba(0,0,0,0.04)",
        iosDark: "0 4px 20px rgba(255,255,255,0.03)",
      },

      backdropBlur: {
        ios: "20px",
      },
    },
  },
  plugins: [],
}
