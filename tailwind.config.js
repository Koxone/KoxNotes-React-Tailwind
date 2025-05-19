/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        media320: "320px",
        media375: "375px",
        media425: "425px",
        media600: "600px",
        media768: "768px",
        media900: "900px",
        media1024: "1024px",
        media1200: "1200px",
        media1440: "1440px",
        media1536: "1536px",
        media1920: "1920px",
        media2560: "2560px",
      },
    },
  },
  plugins: [],
};