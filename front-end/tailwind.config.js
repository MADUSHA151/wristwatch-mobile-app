/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "g-theme-color":"#13171C",
        "t-blue-color":"#3C4159",
        "side-bar-navigation":"#242C32",
        "button-color":"#0071FF",
        "input-color":"#ADAEB0",
      },
      colors:{
        "star-color":"#F8D711",
        "blue-blur-color":"#696E72",
        "white-color":"#FFFFFF",
        "font-green-color":"#11A34B",
        "f-red-color":"#9B1515"
      }
    },
  },
  plugins: [],
}

