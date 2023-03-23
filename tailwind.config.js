/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screens: {
    'sm': {'min': '320px', 'max': '767px'},
    'md': {'min': '768px', 'max': '991px'},
    'lg': {'min': '992px', 'max': '1199px'},
    'xl': {'min': '1200px'},
  },

  colors: {
    'transparent': 'transparent',
    'current': 'currentColor',
    'dark-slate-gray':'#274C5B',
    'dark-sea': '#7EB693',
    'arylide-yellow': '#EFD372',
    'light-gray': '#D4D4D4',
    'cultured': '#F9F8F8',
    'anti-flash-white': '#EFF6F1',
    'davys-gray': '#525C60',
  },

  plugins: [],
}