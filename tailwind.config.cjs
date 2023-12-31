/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#00040f",
                secondary: "#00f6ff",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                dimBlue: "rgba(9, 151, 124, 0.1)",
            },
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
        },
        theme: {
            colors: {
              bttransparent: 'transparent',
              btcurrent: 'currentColor',
              btblack: colors.black,
              btwhite: colors.white,
              btgray: colors.gray,
              btemerald: colors.emerald,
              btindigo: '#6366f1',
              btyellow: colors.yellow,
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};
