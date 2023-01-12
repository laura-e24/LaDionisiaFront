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
        'font-color': '#2A2824',
        'bg-body': '#EBE9E9',
        'price-color': '#B1AA95',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      backgroundImage: {
        'footer': "url('/src/assets/img/footer.png')",
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat',]
    },

  },
  plugins: [],
  darkMode: 'class',
}
