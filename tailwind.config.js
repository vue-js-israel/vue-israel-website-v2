const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          50: "#d6ffee",
          100: "#acffdd",
          200: "#83ffcc",
          300: "#30ffaa",
          400: "#00dc82",
          500: "#00bd6f",
          600: "#009d5d",
          700: "#007e4a",
          800: "#005e38",
          900: "#003f25",
        },
        dark: {
          bg: {
            dark: colors.gray[800],
            darker: colors.gray[900],
            darkest: "#0c0c0d",
          },
          text: {
            light: colors.gray[500],
            lighter: colors.gray[300],
            lightest: colors.gray[100],
          },
        },
        light: {
          text: {
            dark: colors.gray[800],
            darker: colors.gray[900],
            darkest: "#0c0c0d",
          },
          bg: {
            light: colors.gray[500],
            lighter: colors.gray[300],
            lightest: "#e9e9e9",
          },
        },
        cta: {
          base: colors.green[400],
          hover: colors.green[500],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
