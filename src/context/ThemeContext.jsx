import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Salvar o tema no localStorage
  );

  useEffect(() => {
    const root = document.documentElement;

    // Atualize a classe do tema
    root.classList.toggle("dark", theme === "dark");

    // Atualize as variáveis CSS
    root.style.setProperty(
      "--scrollbar-track-color",
      theme === "dark" ? "#232E33" : "#E5E7EB"
    );
    root.style.setProperty(
      "--scrollbar-thumb-color",
      theme === "dark" ? "#6BAF8D" : "#042c34"
    );

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Atualiza o tema no localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
