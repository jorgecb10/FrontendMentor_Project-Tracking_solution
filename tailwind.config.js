/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'red-hsl': 'hsl(0, 100%, 68%)',
        'veryDarkBlue': 'hsl(230, 29%, 20%)',
        'DarkGrayishBlue': 'hsl(230, 11%, 40%)',
        'GrayishBlue': 'hsl(231, 7%, 65%)',
        'LightGrayishBlue': 'hsl(207, 33%, 95%)',
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed ', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}