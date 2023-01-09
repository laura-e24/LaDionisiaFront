/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'initial-color': '#360404',
        'final-color': '#980404',
        'btn-color': '#900404',
        'star-color': '#2596be',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
