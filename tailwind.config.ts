/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'clip-bottom-right',
    'clip-top-left',
    'PhoneInputInput',
    'PhoneInputCountry',
    'PhoneInput'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
