/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary_color: '#FFE98A',
      bg_nav_footer: '#61105E',
      card : '#C84771',
      white_color: '#FFFFFF',
      secondary_color: '#280B45'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'babe': ['Bebas Neue', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}

