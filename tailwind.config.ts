import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F7F3",
        panel: "#FFFFFF",
        ink: { DEFAULT: "#0E211B", soft: "#3D4F49", faint: "#6B7A74" },
        verified: { DEFAULT: "#128A62", soft: "#E2F2EB" },
        flag: { DEFAULT: "#B57417", soft: "#F7EDDC" },
        alert: { DEFAULT: "#B5402F", soft: "#F6E4E0" },
        line: "#D9DED5",
      },
      fontFamily: {
        display: ["'Funnel Display'", "sans-serif"],
        body: ["'Public Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
