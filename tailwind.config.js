/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/assets/background.png')",
        'hero': "url('/assets/hero.png')",
      },
      colors: {
        emerald: {
          DEFAULT: "#04CCC0",
          light: "#00C1B8",
          dark: "#05b3a7",
        },
        royal: "#211A6C",
        powderBlue: "#A8CBF3",
      },
      minHeight: {
        80: '82.1vh',
      },
    },
  },
  plugins: [],
});
