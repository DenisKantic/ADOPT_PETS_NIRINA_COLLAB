/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./assets/Header/nirina.png')",
        'header2': "url('./assets/Header/dog_shelter2.png')",
        'figures': "url('./assets/wave2.png')"
      },
      screens:{
        'xss': '270px',
        'xs': '410px',
        'sm': '430px',
        'md': '640px',
        'mdd': '799px',
        'lg': '1024px'
      }
    }
  }
}