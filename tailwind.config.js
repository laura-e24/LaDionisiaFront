/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Poppins', 'Nunito'],
      'poppins': ["Poppins", "sans-serif"],
      'nunito': ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        'initial': '#F4EDE2',
        'final-color': '#980404',
        'btn-color': '#900404',
        'star-color': '#2596be',
        'font-color': '#2A2824',
        'bg-body': '#EBE9E9',
        'price-color': '#B1AA95',
        'pagination-color': '#E0D7C9',
      },
      backgroundImage: {
        'footer': "url('/src/assets/img/footer.png')",
      }
    },
  },
  plugins: [],
  // darkMode: 'class',
}
