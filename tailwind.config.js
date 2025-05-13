// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B6795",
        /*#27608A
          #2B6795
          #24577A
          #3076A6*/
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'], // ✅ agregada
      },
       animation: {
          'bounce-slow': 'bounce 3s infinite',
        },
    },
  },
  plugins: [],
};
