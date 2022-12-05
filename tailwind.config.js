/** @type {import('tailwindcss').Config} */
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
      colors: {
        colorPrimary: "#002855",
        colorSecondary: "#00346F",
        searchBg: "#CACFEA",
        popUpBg: "#15172AF7",
        navTextColor: "#F1F3F6",
        textSecondary: "#00346F",
        btnSecondary: "#534D9F",
        blackSecondary: "#151518",
        black3: "#1C1B1B",
        whiteGray: "#D4D4D4",
        btn2: "#6B5EFF",
        blurDark: "#151330",
        blurDark1: "#1F1B41",
      },
    },
  },
  plugins: [],
};
