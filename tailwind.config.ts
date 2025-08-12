/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#d0363c",
        primary2: "#b32724",
        secondary1: "#ffffff",
      },
    },
  },
  safelist: [
    "bg-primary2",
    "bg-secondary1",
    "text-primary1",
    "text-primary2",
    "bg-white/50"
  ],
  plugins: [],
};
