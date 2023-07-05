/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'plantin-headline-condensed': ['Plantin Headline Condensed', 'Helvetica', 'Arial', 'sans-serif'],
      lilitaOne: ['LilitaOne', 'sans-serif'],
    }
  },
  plugins: [],
}