import type { Config } from "tailwindcss";

interface MyConfig extends Config {
  safelist?: string[];
}

const config: MyConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "min-h-[600px]",
    "aspect-[4/5]",
    "max-w-[440px]",
  ],
};

export default config;
