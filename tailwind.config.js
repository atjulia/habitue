const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      gray: colors.gray,
      green: colors.green,
      orange: colors.orange,
      blue: colors.blue,
      red: colors.red,
      'background': '#FFFEFC',
      'background-dark': '#111827',
      'button': '#17E8B0',
      'text': '#111111',
      'caption': '#6E6E6D',
      'caption-dark': '#979797',
      'buttonHover': '#14D7A2',
    },
    fontSize: {
      'tiny': '.75rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontFamily: {
        'font': ["Inter", 'sans-serif']
      },
      gridTemplateRows: {
        'pattern': '72px 1fr 28px'
      },
      gridTemplateColumns: {
        'pattern': 'repeat(12, 72px)'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}