import React from "react";
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header>
      {/* Menu fixo no topo */}
      <nav className="bg-primary text-white fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-center items-center p-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                Início
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
