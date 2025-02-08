/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#262626',
        secondary:'rgba(255,255,255)',
        color:"#f7f7f7"
      },
      fontFamily: {
        roman: ["Gideon Roman", 'serif'],
        poppins:["Poppins", 'serif']
      },
      screens:{
        xs:"25rem",
      }
    },
  },
  plugins: [],
}