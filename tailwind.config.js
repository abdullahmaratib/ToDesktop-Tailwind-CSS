
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'display': ["poppins", "sans-serif"],
        'body': ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}