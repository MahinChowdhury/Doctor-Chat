/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors : {
        'primary' : 'rgb(241, 243, 245)',
        'secondary' : 'rgb(0,45,50)',
        'user-light' : 'rgb(125, 215, 157)',
        'user-dark' : 'rgb(19, 62, 77);',
      }
    },
  },
  plugins: [],
}

