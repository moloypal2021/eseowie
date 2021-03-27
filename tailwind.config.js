module.exports = {
  purge: {
    enabled: false,
    content: ["./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#4D0ADB",
        purple2: "#3C06B0",
        yellow: "#C0E914",
        "paragraph-alt": "#A6A6A6",
        paragraph: "#656565",
        blue: "#173EFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
