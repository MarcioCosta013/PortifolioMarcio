/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Habilita o suporte a temas escuros
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#b9c5c7",
        darkBg: "#072A30",
        lightText: "#042c34",
        darkText: "#54a49c",
        color1: "#74c4ac",
        color2: "#72beb4",
        scrollbar: {
          track: {
            light: "#042c34", // Cor do track no modo claro
            dark: "#232E33", // Cor do track no modo escuro
          },
          thumb: {
            light: "#042c34", // Cor do thumb no modo claro
            dark: "#6BAF8D", // Cor do thumb no modo escuro
          },
        },
      },
    },
  },
  plugins: [],
};
