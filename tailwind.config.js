/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyText: "#928888",
      },
      fontFamily: {
        sans: ["Poppins", "Poppins Placeholder", "sans-serif"], // Default sans-serif
      },
      animation: {
        float: "float 10s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
