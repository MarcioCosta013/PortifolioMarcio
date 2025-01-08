import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="">
    <nav className='bg-gray-700 min-h-screen flex flex-col items-center p-9 m-8'>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;