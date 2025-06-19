/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode:'class',
  theme: {
    darkMode:'class',
    extend: {
      colors: {
        primary: "#4300FF",
        secondary: "#0065F8",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem"
      }
    }
  },
  plugins: [],
}