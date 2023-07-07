/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xss': '270px',
        'xs': '410px',
        'sm': '430px',
        'md': '740px',
        'mdd': '799px'
      }
    },
  },
  plugins: [],
}