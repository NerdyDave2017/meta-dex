/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    

    extend: {
      colors: {
        bgLight: "#FFFFFF",
        bgDark: "#080A0C",
        textLight: "#080A0C",
        textDark: "#FFFFFF",
        mutedLight: "#6D7F9C",
        mutedDark: "#637592",
        cardLight: "#F3F4F7",
        cardDark: "#111318",
        primary: "#3D6EFF",
        gray: "#191D24"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
