import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#78716C",
        "secondary": "#92400E",
        "accent": "#D97706",
        "background": "#FFFBEB",
        "foreground": "#0F172A",
        "muted": "#F6F6F6",
        "border": "#EEEDED"
      },
    },
  },
  plugins: [],
};

export default config;
