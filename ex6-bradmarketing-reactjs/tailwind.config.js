/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        GREEN: {
          500: "#3F6745",
          800: "#1E3322"
        },
        ORANGE: "#FD661F"
      },

      boxShadow: {
        'bx': '-60px 160px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
