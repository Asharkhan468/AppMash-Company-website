// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Omit<Config, "safelist"> & { safelist: string[] } = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monda: ["var(--font-monda)", "sans-serif"],
      },
    },
  },
  safelist: [
  'bg-primary2',
  'text-primary2',
  'from-primary2/40',
  'to-primary2/20',
  'bg-secondary1',
  'text-primary1',
  'right-[-40px]',
  'lg:right-[-60px]',
  'xs:text-2xl'
],

  plugins: [],
};

export default config;
