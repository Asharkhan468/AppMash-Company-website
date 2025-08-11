/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'w-[160px]',
    'w-[200px]',
    'w-[260px]',
    'w-[340px]',
    'w-[440px]',
    'h-[160px]',
    'h-[200px]',
    'h-[260px]',
    'h-[340px]',
    'h-[440px]',
    'max-w-[90%]',
    // agar tum xs: prefix use karte ho to:
    'xs:text-3xl',
    'xs:w-[200px]'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
