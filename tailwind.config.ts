/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    'clip-bottom-right',
    'clip-top-left',
    'PhoneInputInput',
    'PhoneInputCountry',
    'PhoneInput',
    'text-red-500', // agar dynamic text colors use ho rahe ho
    'bg-primary1',
    'bg-primary2',
    'bg-neutral1',
    'bg-neutral2',
    'bg-neutral3',
    'bg-neutral4',
    'bg-secondary1',
    'bg-secondary2'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
