/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Deep navy scale for dark surfaces
        ink: {
          50: "#f5f6fb",
          100: "#e9ebf5",
          200: "#cfd4e8",
          300: "#a6afcf",
          400: "#7581aa",
          500: "#4f5b86",
          600: "#37416a",
          700: "#262e52",
          800: "#171d3a",
          900: "#0f1329",
          950: "#090c1c",
        },
        // Brand accent: indigo -> violet
        brand: {
          50: "#eef0ff",
          100: "#e0e3ff",
          200: "#c6caff",
          300: "#a3a6ff",
          400: "#7f79fb",
          500: "#6c5cf5",
          600: "#5b3fe8",
          700: "#4c31cc",
          800: "#3e2aa5",
          900: "#352982",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,108,251,.25), 0 20px 60px -20px rgba(124,108,251,.45)",
        "glow-sm": "0 0 0 1px rgba(124,108,251,.2), 0 10px 30px -12px rgba(124,108,251,.4)",
        card: "0 1px 2px rgba(9,12,28,.06), 0 12px 32px -16px rgba(9,12,28,.18)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6c5cf5 0%, #8b5cf6 55%, #c084fc 100%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(108,92,245,.35) 0%, rgba(108,92,245,0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        reveal: "reveal .7s cubic-bezier(.22,1,.36,1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
