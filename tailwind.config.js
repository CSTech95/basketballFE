/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //colors: {},
    extend: {
      colors: {
        blue: "#1fb6ff",
        orange: "#ff7849",
        green: "#13ce66",
      },
    },
  },
  plugins: [],
}
