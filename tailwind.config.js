/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {      
      colors:{
        'bgc-1' : "rgb(249, 247, 243)",
        'btnColor' : "rgb(180, 244, 97)",
        'btnTextColor' : "rgb(17,17, 17)",
        'btnTextColor-2' : "rgba(17,17, 17,0.7)",
        'btnTextColor-3' : "rgba(17,17, 17,0.05)",
      },
      fontFamily:{
        'lexendFont' : "Lexend",
      },
      fontSize:{
        '20' : '20px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}