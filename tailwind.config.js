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
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        'rotate-3d': 'rotate-3d 1.5s ease-in-out'
      },
      keyframes: {
        'rotate-3d': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      }
    },
  },
  plugins: [],
};
