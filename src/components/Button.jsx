import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = ({
  children,
  onClick,
  downloadUrl,
  downloadName,
  className,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (downloadUrl) {
      // Se downloadUrl for fornecido, inicie o download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadName || "download";
      link.click();
    }
    // Execute a função passada por onClick, se houver
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        "rounded-lg p-3 transition ease-in-out delay-150 dark:bg-lightBg dark:text-lightText bg-darkBg text-darkText hover:-translate-y-1 hover:scale-110 hover:bg-color1 hover:text-lightText dark:hover:bg-color2 dark:hover:text-lightText duration-300"
      }
    >
      {children}
    </button>
  );
};

export default Button;
