const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      cabinetGrotesk: ["Cabinet Grotesk", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        dark: {
          main: colors.gray[700],
          second: colors.gray[800],
        },
        light: {
          main: colors.gray[50],
          second: colors.gray[200],
        },
      },
      textColor: {
        dark: {
          main: colors.slate[700],
          second: colors.slate[800],
        },
        light: {
          main: colors.slate[200],
          second: colors.slate[100],
        },
      },
      colors: {
        primary: colors.violet[600],
        lighter: colors.violet[400],
        darker: colors.violet[800],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
