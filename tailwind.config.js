/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#151518",
        colorPrimary: "#002855",
        colorSecondary: "#00346F",
        colorGray1: "#7A7A7A",
        colorAccent: "#61CE70",
        colorWhite: "#F4F4F4",
        blackPrimary: "#030304",
        colorText: "#8176FF",
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
