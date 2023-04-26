/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const libPreset = require('./src/tailwind')
export default {
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
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

