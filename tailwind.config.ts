/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-primary2",
    "bg-secondary1",
    "text-primary1",
    "text-primary2",
    "text-secondary1",
    "from-primary2",
    "via-black",
    "to-primary2",
    "md:grid-cols-2",
    "flex",
    "items-center",
    "justify-center",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
