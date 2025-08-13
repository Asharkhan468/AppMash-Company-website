import type { Config as TailwindConfig } from "tailwindcss";

interface MyConfig extends TailwindConfig {
  safelist?: string[];
}

const config: MyConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "min-h-[600px]",
    "aspect-[4/5]",
    "max-w-[440px]",
    "bg-primary2",
    "bg-white/50",
  ],
  theme: {
    extend: {
      fontFamily: {
        monda: ["var(--font-monda)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
