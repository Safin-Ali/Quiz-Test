/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        common: '#f10085',
        common2: '#F94892',
        common80: '#f10085b0',
        lightWhite: '#EEF1F8',
        lightWhite2: '#F5F4F6',
        lightWhite3: '#F7F7F7',
        lightWhite4: '#EEF1F8',
      }
    },
  },
  plugins: [],
}