/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
        //MAIN
        anek: ["Anek Latin", ...defaultTheme.fontFamily.sans],
        kode: ["Kode Mono", ...defaultTheme.fontFamily.sans],

        //TØMRER
        akshar: ["Akshar", ...defaultTheme.fontFamily.sans],
        serifdisplay: ["DM Serif Display", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

