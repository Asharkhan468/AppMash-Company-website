// tailwind.config.ts

// TailwindCSS v4 me default type export nahi hota, isliye hum apna type define kar rahe hain
type Config = {
  content: string[];
  theme?: Record<string, any>;
  safelist?: string[];
  plugins?: any[];
};

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // agar pages dir use ho to
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
} satisfies Config;
