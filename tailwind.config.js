/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const libPreset = require('./src/tailwind')
module.exports = {
  jit: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [libPreset],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
      },
      keyframes: {
        horizontalLoop: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'horizontalLoop': 'horizontalLoop 1s linear infinite',
        'horizontalLoop-reverse': 'horizontalLoop 1s linear infinite reverse',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    animation: false,
  },
}
