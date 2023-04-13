/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      body: ['Vazir']
    },
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ipadair':'820px',
      // => @media (min-width: 820px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      animation: {
        'spin-slow': 'spin 3s black',
      }
    },
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
