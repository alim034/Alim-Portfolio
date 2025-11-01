/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b9d9ff',
          300: '#8fc0ff',
          400: '#63a1ff',
          500: '#3f7fff',
          600: '#2c5ff5',
          700: '#234ad9',
          800: '#1f3fb0',
          900: '#1e3a8a',
        },
      },
    },
    fontFamily: {
        // This makes 'Inter' the default font for your whole site
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        // This makes 'Lora' available as `font-serif`
        'serif': ['Lora', ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
}
