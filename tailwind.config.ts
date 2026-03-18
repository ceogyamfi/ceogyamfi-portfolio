import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-dim": "var(--accent-dim)",
        foreground: "var(--foreground)",
        muted: "rgba(255,255,255,0.05)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        "glass-border": "var(--glass-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glow-accent": "0 0 24px var(--accent-glow)",
        "glow-sm": "0 0 12px var(--accent-glow)",
      },
    },
  },
  plugins: [typography],
};
export default config;
