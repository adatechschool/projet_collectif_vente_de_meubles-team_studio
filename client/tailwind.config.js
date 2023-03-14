/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        apercu: ['Apercu Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}