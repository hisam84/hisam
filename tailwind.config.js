/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-base": "#0B0F17",
        "surface": "#0b1326",
        "surface-dim": "#0b1326",
        "surface-bright": "#31394d",
        "surface-container-lowest": "#060e20",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "surface-card": "rgba(17, 24, 39, 0.75)",
        "surface-elevated": "rgba(30, 41, 59, 0.65)",
        "primary": "#4edea3",
        "primary-container": "#10b981",
        "primary-fixed": "#6ffbbe",
        "on-primary": "#003824",
        "secondary": "#4cd7f6",
        "secondary-container": "#03b5d3",
        "secondary-fixed": "#acedff",
        "on-secondary": "#003640",
        "tertiary": "#c0c1ff",
        "tertiary-container": "#9699ff",
        "tertiary-fixed": "#e1e0ff",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#bbcabf",
        "text-primary": "#F8FAFC",
        "text-muted": "#94A3B8",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(16, 185, 129, 0.35)",
        "success-pulse": "#10B981",
        "warning": "#F59E0B",
        "error": "#ffb4ab"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px"
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
        "gutter": "1.5rem",
        "margin": "2rem"
      },
      fontFamily: {
        "display": ["'Space Grotesk'", "sans-serif"],
        "headline-lg": ["'Space Grotesk'", "sans-serif"],
        "headline-md": ["'Space Grotesk'", "sans-serif"],
        "headline-sm": ["'Space Grotesk'", "sans-serif"],
        "body-lg": ["'Inter'", "sans-serif"],
        "body-md": ["'Inter'", "sans-serif"],
        "body-sm": ["'Inter'", "sans-serif"],
        "code-md": ["'JetBrains Mono'", "monospace"],
        "label-md": ["'JetBrains Mono'", "monospace"],
        "label-sm": ["'JetBrains Mono'", "monospace"]
      }
    }
  },
  plugins: []
};
