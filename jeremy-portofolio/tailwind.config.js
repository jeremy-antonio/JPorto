/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bg_primary: "#353543",
        bg_secondary: "#282833",
        bg_hero: "#2C2C38",
        bg_misc: "#3F3F50",
        gold: "#FFBA19",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
