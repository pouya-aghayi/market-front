/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {},
  },
variants: {
  extend: {
    display: ['group-focus'],
    display: ['group-hover'],
    opacity: ['group-focus'],
    inset: ['group-focus']

  },
},

  plugins: [],
}
