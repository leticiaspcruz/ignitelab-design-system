/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.tsx`],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: 'transparent',
        black: '#000000',
        gray: '#5E5E5E',
        white: '#FFFFFF',
        light: '#D4D4D4',
        green: '#64DD17',
        greenDark: '#1FAA00',
        greenLight: '#9CFF57', 
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};