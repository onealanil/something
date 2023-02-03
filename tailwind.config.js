/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green': '#4CAF50',
         'nav-bg': '#F0F0F0',
      }
    },
    fontFamily:{
      navFont: ['Plus Jakarta Sans', 'sans-serif'],
      frontTitleFont: ['Oswald', 'sans-serif'],
      sideFont: ['Roboto', 'sans-serif'],
      frontTextFont: ['Open Sans', 'sans-serif'],
      hotTopicsFont: ['Poppins', 'sans-serif'],
      subscribeFont: ['Sanchez', 'serif'],
      copyrightFont: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
};
