/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {      
      colors:{
        'bgColor' : 'rgb(249, 247, 243)',
        'borderColor': 'rgba(17, 17, 17, 0.3)',        
        'borderColor2': 'rgba(17, 17, 17, 0.1)',
        'btnColor' : 'rgb(180, 244, 97)',
        'btnColor2' : 'rgba(17, 17, 17, 0.05)',
        'textColor': 'rgb(17, 17, 17)',
        'textColor2': 'rgba(17, 17, 17, 0.7)',
        'textColor3': 'rgba(17, 17, 17, 0.4)',
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