/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header2': "url('./assets/Header/dogH.webp')",
        'figures': "url('./assets/wave2.png')", 
        'girlDog2': "url('./assets/Header/girl_dog2.jpg')",
        'adoptSoon': "url('./assets/adopt2E.jpg')",
        'programDog': "url('./assets/adopt1E.jpg')",
        'team': "url('./assets/team.webp')",
        'girlDog': "url('./assets/Header/girl_dog.jpg')",
        'happy': "url('./assets/happy2.jpg')",
        'ivan': "url('./assets/ivan.jpg')",
        'group': "url('./assets/group.jpg')",
        'nirina': "url('./assets/nirina_blur_shelter.jpg')",
        'donate': "url('./assets/donate.jpg')",
        'dogHeader': "url('./assets/header1.jpeg')"
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