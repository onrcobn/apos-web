/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Sleek dark background (Gray 950)
        foreground: "#f9fafb", // White Text (Gray 50)
        accent: {
          blue: "#3b82f6", // Blue Accent
          blueDark: "#1d4ed8",
        },
        secondary: "#9ca3af", // Gray Secondary (Gray 400)
        cardBg: "rgba(17, 24, 39, 0.7)", // Glassmorphism base (Gray 900)
        success: "#10b981", // Emerald Success
        warning: "#f97316", // Orange Warning
        critical: "#ef4444", // Red Critical
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
