module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        primary1: '#d0363c',
        primary2: '#b32724',
        neutral1: '#292b30',
        neutral2: '#000000',
        neutral3: '#292929',
        neutral4: '#1a1a1a',
        secondary1: '#ffffff',
        secondary2: '#f9f9f9',
        gradient1: '#3e0204',
      }
    },
  },
  plugins: [],
}