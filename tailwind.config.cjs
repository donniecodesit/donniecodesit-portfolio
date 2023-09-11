module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'page-light': "url('../assets/bg_light.png')",
        'page-dark': "url('../assets/bg_dark.png')",
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
