module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { a400: "#ffc700" },
        black: { 900: "#000000" },
        blue_gray: { 50: "#f1f1f1", 100: "#d3d3d3", 200: "#a9b7cd" },
        deep_purple: { a200: "#755ffb", a400: "#5135ff" },
        gray: {
          50: "#f9f9f9",
          100: "#f4f4f4",
          200: "#eeeeee",
          300: "#e2e2e2",
          400: "#c4c4c4",
          500: "#a8a8a8",
          600: "#797979",
          800: "#505050",
          900: "#242331",
          "200_01": "#e8e8e8",
          "300_01": "#dbdbdb",
          "300_02": "#e3e3e3",
          "400_01": "#cacaca",
          "400_02": "#bbd2bb",
          "400_03": "#c5c5c5",
          "400_3f": "#b2b2b23f",
          "50_01": "#f9f9fb",
<<<<<<< HEAD
=======
          "50_02": "#f4fff4",
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
          "50_19": "#f9f9f919",
        },
        green: {
          300: "#8ada88",
          500: "#44c541",
          800: "#05a302",
          "300_01": "#89dd8c",
          "300_02": "#8ade8c",
          "500_01": "#30c55a",
          "500_02": "#4caf4f",
          "800_01": "#05a402",
        },
        indigo: { 50: "#e0dbff", 100: "#c1b9f5" },
        lime: { 800: "#c58914" },
        orange: { 400: "#ffb422" },
        pink: { a200: "#ff3589" },
        purple: { 50: "#fae1ff", a200: "#d94ce5", a700: "#8f00f8" },
        red: { 300: "#ff6868" },
        white: { a700: "#ffffff", a700_19: "#ffffff19" },
        yellow: { 100: "#ffedcc" },
<<<<<<< HEAD
        colors: "#000000ff",
=======
        colors: "#19971c",
        colors1: "4CAF4F",
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
      },
      boxShadow: { xs: "5px 10px 21px 0 #b2b2b23f" },
      fontFamily: { nunito: "Nunito", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
