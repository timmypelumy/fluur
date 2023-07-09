/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1652F0",
        textColor: "#2C3E50",
        bg1: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
