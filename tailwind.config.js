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
      scale: {
        200: "2",
        300: "100",
      },
      transformOrigin: {
        "top-right-8": "96% 10%",
      },
      borderRadius: {
        50: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
