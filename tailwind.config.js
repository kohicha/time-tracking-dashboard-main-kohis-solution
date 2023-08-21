/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      Rubik: "Rubik"
    },
    extend: {
      colors:{
        Blue: 'hsl(246, 80%, 60%)',
        Lightorange : 'hsl(15, 100%, 70%)',
        Softblue : 'hsl(195, 74%, 62%)',
        Lightred : 'hsl(348, 100%, 68%)',
        Limegreen : 'hsl(145, 58%, 55%)',
        Violet : 'hsl(264, 64%, 52%)',
        Softyellow : 'hsl(43, 84%, 65%)',
        Verydarkblue: 'hsl(226, 43%, 10%)',
        Darkblue: 'hsl(235, 46%, 20%)',
        Desaturatedblue: 'hsl(235, 45%, 61%)',
        PaleBlue: 'hsl(236, 100%, 87%)'
      }
    },
  },
  plugins: [],
}

