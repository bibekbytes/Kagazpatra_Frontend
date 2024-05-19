/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cPurple: "#6361DC",
        cWhite: "#F7F8FE",
        cRed: "#F3536F",
        cBlue: "#4542EB",
        tBlue: "#30455E",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
