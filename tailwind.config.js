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
        serifdisplay: ["DM Serif Display", ...defaultTheme.fontFamily.sans],

        //CTLS
        gochi: ["Gochi Hand", ...defaultTheme.fontFamily.sans],
        gara: ["EB Garamond", ...defaultTheme.fontFamily.sans],

        // PSYKOLOG
        merri: ["Merriweather", ...defaultTheme.fontFamily.sans]
      }
    },
    // fontSize: {
    //   'sm': ['14px', {
    //     lineHeight: '21px',
    //   }],
    //   'base': ['16px', {
    //     lineHeight: '21px',
    //     fontWeight: '450',
    //   }],
    //   'lg': ['20px', {
    //     lineHeight: '25px',
    //     fontWeight: '450',
    //   }],
    //   'xl': ['25px', {
    //     lineHeight: '25px',
    //     fontWeight: '500',
    //   }],
    //   '5xl': ['48px', {
    //     lineHeight: '38px',
    //     fontWeight: '800',
    //     }],
    //   '6xl': ['60px', {
    //     lineHeight: '52px',
    //     fontWeight: '800',
    //     }],
    // }
  },
  plugins: [],
}

