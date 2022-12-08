/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-0": {
      transform: "rotateX(0deg)",
    },
    ".rotate-x-180": {
      transform: "rotateX(180deg)",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        RadHatText: ["Red Hat Text", "sans-serif"],
      },
      transformOrigin: {
        "top-left-1/2-full": "50% 100%",
      },
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgb(0 0 0 / 10%)",
      },
      colors: {
        colorPrimary: "#002855",
        colorSecondary: "#00346F",
        searchBg: "#CACFEA",
        popUpBg: "#15172AF7",
        mobileNavBg: "#F7FAFF",
        navTextColor: "#F1F3F6",
        smallText: "#CCD0D5",
        textSecondary: "#00346F",
        textGray: "#A6ADB6",
        btnSecondary: "#534D9F",
        blackSecondary: "#151518",
        black3: "#1C1B1B",
        whiteGray: "#D4D4D4",
        btn2: "#6B5EFF",
        blurDark: "#151330",
        blurDark1: "#1F1B41",
      },
      animation: {
        backDrop: "backDrop 0.6s ease-out forwards",
        showText: "showText 2.2s",
        hideText: "hideText 2.2s",
      },
      keyframes: {
        backDrop: {
          "0%": { transform: "scale(0.04) translateY(300%)" },
          "39.99%": {
            transform: "scale(0.04) translateY(0)",
            transition: "ease-out",
          },
          "40%": { transform: "scale(0.04) translateY(0)" },
          "60%": { opacity: "1", transform: "scale(0.02) translateY(0)" },
          "61%": { opacity: "1", transform: "scale(0.04) translateY(0)" },
          "99.9%": {
            opacity: "1",
            height: "0",
            paddingBottom: "100%",
            borderRadius: "100%",
          },
          "100%": {
            opacity: "1",
            transform: "scale(2) translateY(0)",
            height: "100%",
            paddingBottom: "0",
            borderRadius: "0",
          },
        },
        showText: {
          "0%": { transform: "rotateX(180deg)", opacity: "0" },
          "35%": { transform: "rotateX(120deg)", opacity: "0" },
          "65%": { opacity: "0" },
          "100%": { transform: "rotateX(360deg)", opacity: "1" },
        },
        hideText: {
          "0%": { transform: "rotateX(0deg)", opacity: "1" },
          "35%": { transform: "rotateX(-40deg)", opacity: "0" },
          "65%": { opacity: "0" },
          "100%": { transform: "rotateX(180deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [rotateX],
};
