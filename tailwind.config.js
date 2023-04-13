/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dominant: "#B7A2D7", 
        greyl: "#B0A8B9",
        greyd: "#7C7484",
        violetl: "#9A89B4",
        redl: "#FA0000",
        redd: "#B70000",
        bluel: "#80B2C9",
        light: "#FDF7FF",
        dark: "#1E1926",
        hover: "#362B48",
        
        blue: "#0A1828",
        turquoise: "#178582",
        gold: "#BFA181",
        white: "#FDF7FF",
        black: "#000000",
        color1: "#005351",
        color2: "#003B3A",
        color3: "#002524",


      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #BFA181 7.21%, #487269 45.05%, #2F4858 78.07%)",

        "gradient-rainblue":
          "linear-gradient(81.66deg, #BFA181 7.21%, #487269 45.05%, #2F4858 78.07%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
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

