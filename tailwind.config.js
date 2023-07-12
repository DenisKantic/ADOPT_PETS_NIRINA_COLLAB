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
        'md': '640px',
        'mdd': '799px',
        'lg': '1024px'
      }
    },
    fontFamily: {
      'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'plantin-headline-condensed': ['Plantin Headline Condensed', 'Helvetica', 'Arial', 'sans-serif'],
      lilitaOne: ['LilitaOne', 'sans-serif'],
    }
      }
    },
  },
  plugins: [],
}