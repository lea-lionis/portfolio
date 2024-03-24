/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        sign: ["sign", "sans-serif"]
      }
    },
  },
  plugins: [],
  
}

