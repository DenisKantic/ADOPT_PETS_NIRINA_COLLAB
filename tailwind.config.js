/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./assets/Header/nirina.png')",
        'header2': "url('./assets/Header/dog4T.jpg')",
        'figures': "url('./assets/wave2.png')", 
        'girlDog': "url('./assets/Header/girl_dog2.jpg')",
        'adoptSoon': "url('./assets/adopt2E.jpg')",
        'programDog': "url('./assets/adopt1E.jpg')"
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