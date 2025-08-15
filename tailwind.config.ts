module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-primary1",
    "bg-primary2",
    "bg-secondary1",
    "text-primary1",
    "text-primary2",
    "text-secondary1"
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#d0363c",
        primary2: "#b32724",
        secondary1: "#ffffff",
      }
    }
  },
  plugins: [],
}
