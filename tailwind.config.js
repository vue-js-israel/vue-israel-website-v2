/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      header: ['Cabinet Grotesk', 'sans-serif'],
      sans: ['Satoshi', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}

