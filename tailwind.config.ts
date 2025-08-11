/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-primary2',
    'bg-primary2/90',
    'from-primary2/40',
    'to-primary2/20',
    'text-primary1',
    'bg-secondary1',
    'bg-black/60',
    'bg-white/50',
    'bg-white/70',
    'w-3',
    'sm:w-4',
    'w-1.5',
    'sm:w-2',
    'h-1.5',
    'sm:h-2',
    'lg:right-[-60px]',
    'right-[-40px]'
  ],
};
