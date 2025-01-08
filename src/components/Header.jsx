import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-500 text-white py-4">
    <nav className="container mx-auto flex justify-center items-center">
      <h1 className="text-2xl font-bold">Meu Portfólio</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Início</a></li>
        <li><a href="/about" className="hover:underline">Sobre</a></li>
        <li><a href="/projects" className="hover:underline">Projetos</a></li>
        <li><a href="/contact" className="hover:underline">Contato</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;