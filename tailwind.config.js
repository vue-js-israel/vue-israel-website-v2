/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      cabinetGrotesk: ['Cabinet Grotesk', 'sans-serif'],
      satoshi: ['Satoshi', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}

