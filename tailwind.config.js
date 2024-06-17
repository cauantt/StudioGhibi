/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'principal': "url('../public/assets/img/bg.png')",
      }),
      screens: {
       
        'sm': {'max': '677px'}, // máximo até 639px
        'md': {'max': '768px'}, // máximo até 767px
        'lg': {'max': '1074px'}, // máximo até 1023px
        'xl': {'max': '1279px'}, // máximo até 1279px
        '2xl': {'max': '1535px'}, // máximo até 1535px
      },
      
      colors: {
        customColor: {
          light: '#F1A5B1',
          
        },
      },

      blur: {
        'black-50': 'brightness(100%)',
      },
    },
  },
  plugins: [],
}
