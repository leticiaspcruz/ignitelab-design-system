/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/.src/**/*.tsx',
  ],
  theme: {
    colors: {
      'gray': '#5E5E5E',
      'white': '#FFFFFF',
      'light': '#D4D4D4',
      'green': '#64DD17',
      'green-dark': '#1FAA00',
      'green-light': '#9CFF57', 
    },
    extend: {
      fontFamily: { 
        sans: 'Yeseva One, sans-serif'
      },
    },
  },
  plugins: [],
}
