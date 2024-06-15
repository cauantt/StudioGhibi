/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'principal': "url('../public/assets/img/bg.png')",
      }),
      blur: {
        'black-50': 'brightness(100%)',
      },
    },
  },
  plugins: [],
}
