module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bgColor': '#0A0C1C',
        'bgCard': '#1B1937',
        'text': '#AB5CDB'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
