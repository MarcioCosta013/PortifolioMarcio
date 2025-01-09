import React from "react";
import logo from "../assets/imagens/logo.jpeg";

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/">
            <img src={logo} alt="Logo" className="w-60 h-60 rounded-full" />
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-400">
              Projetos
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
