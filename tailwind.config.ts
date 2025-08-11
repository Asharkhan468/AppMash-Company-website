// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  screens: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
},
  safelist: [
    "bg-primary2",
    "from-primary2/40",
    "text-primary1",
    "hover:bg-primary2/90"
  ],
  plugins: [],
};
