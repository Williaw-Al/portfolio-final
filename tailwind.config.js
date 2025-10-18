/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-lg': '425px', 
      },
    },
  },
  plugins: [],
}