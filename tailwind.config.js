const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent: "#179957",
        accentDark: "#184D47",
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
    container: {
      center: true,
      padding: "15px"
    }
  },
  plugins: [],
}

