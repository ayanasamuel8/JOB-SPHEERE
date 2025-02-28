/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./css/index.html", // Include index.html if you have one
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        customBlue : '#0034d1',
      }
    },
  },
  plugins: [],
}

