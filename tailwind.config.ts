import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MediMind Brand Colors
        primary: {
          DEFAULT: "#1B4D3E",
          50: "#E8F5F0",
          100: "#D1EBE1",
          200: "#A3D7C3",
          300: "#75C3A5",
          400: "#47AF87",
          500: "#2D7A5F",
          600: "#1B4D3E",
          700: "#153D31",
          800: "#0F2D24",
          900: "#091D17",
        },
        accent: {
          DEFAULT: "#2D7A5F",
          light: "#3D9A7A",
          dark: "#1D5A45",
        },
        mint: {
          DEFAULT: "#E8F5F0",
          light: "#F5FAF8",
          dark: "#D1EBE1",
        },
        success: "#10B981",
        body: "#374151",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Refined, smaller display sizes for cleaner look
        "display-xl": ["3.25rem", { lineHeight: "1.15", fontWeight: "600", letterSpacing: "-0.02em" }],
        "display-lg": ["2.5rem", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.02em" }],
        "display-md": ["1.875rem", { lineHeight: "1.25", fontWeight: "600", letterSpacing: "-0.01em" }],
        "display-sm": ["1.5rem", { lineHeight: "1.3", fontWeight: "600", letterSpacing: "-0.01em" }],
        // Body text
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "section": "5rem",
        "section-lg": "6rem",
      },
      maxWidth: {
        "container": "1280px",
        "content": "720px",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(27, 77, 62, 0.07), 0 10px 20px -2px rgba(27, 77, 62, 0.04)",
        "medium": "0 4px 25px -5px rgba(27, 77, 62, 0.1), 0 10px 30px -5px rgba(27, 77, 62, 0.08)",
        "large": "0 10px 40px -10px rgba(27, 77, 62, 0.15), 0 20px 50px -15px rgba(27, 77, 62, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
