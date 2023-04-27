/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const classesSafeList = []
// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']
const variants = ['hover', 'focus']
const customs = ['primary', 'secondary', 'primaryHover', 'secondaryHover']
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
for (const colorName in colors) {
  if (deprecated.includes(colorName)) {
    continue
  }

  const palette = colors[colorName]

  if (typeof palette === 'object') {
    shades.forEach((shade) => {
      if (shade in palette) {
        classesSafeList.push(`text-${colorName}-${shade}`)
        classesSafeList.push(`bg-${colorName}-${shade}`)
        classesSafeList.push(`ring-${colorName}-${shade}`)
        classesSafeList.push(`border-${colorName}-${shade}`)
        variants.forEach((variant) => {
          classesSafeList.push(`${variant}:bg-${colorName}-${shade}`)
          classesSafeList.push(`${variant}:ring-${colorName}-${shade}`)
        })
      }
    })
  }
}

classesSafeList.push(`hover:!text-white`)
classesSafeList.push(`border-double`)
classesSafeList.push(`border-none`)
classesSafeList.push(`border-4`)
classesSafeList.push(`rounded-tr-2xl`)
classesSafeList.push(`animate-horizontalLoop-reverse`)
classesSafeList.push(`animate-horizontalLoop`)
classesSafeList.push(`horizontalLoop`)

customs.forEach((custom) => {
  classesSafeList.push(`bg-${custom}`)
  classesSafeList.push(`text-${custom}`)
})

variants.forEach((variant) => {
  customs.forEach((custom) => {
    classesSafeList.push(`${variant}:bg-${custom}`)
    classesSafeList.push(`${variant}:text-${custom}`)
  })
})



module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/thirdlib/brick/dist/brick.umd.js',
    './node_modules/thirdlib/brick/dist/brick.es.js'
  ],
  darkMode: 'class',
  safelist: classesSafeList,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: 'rgb(var(--color-primary))!important',
        primaryHover: 'rgba(var(--color-primary-hover))!important',
        secondary: 'rgb(var(--color-secondary))!important',
        secondaryHover: 'rgba(var(--color-secondary-hover))!important'
      }
    }
  }
}
