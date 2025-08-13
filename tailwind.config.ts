// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Omit<Config, 'safelist'> & { safelist: string[] } = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monda: ["var(--font-monda)", "sans-serif"],
      },
    },
  },
  safelist: [
    "min-h-[600px]",
    "aspect-[4/5]",
    "max-w-[440px]",
    "bg-primary2",
    "bg-white/50",
  ],
  plugins: [],
};

export default config;
