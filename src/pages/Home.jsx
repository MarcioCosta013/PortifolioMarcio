import React from "react";
import logo from "../assets/imagens/logo.jpeg";

const Home = () => (
  <div>
    < nav className="bg-primary justify-center w-full flex space-x-4">
      <a href="/">
        <img
          src={logo}
          alt="Logo"
          className="w-50 h-50 shadow-lg"
        />
      </a>
    </nav>
    <div className="bg-gray-600 min-h-screen flex flex-col items-center p-9 m-11">
      <h1 className="text-4xl font-bold text-primary">Bem-vindo!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sou Márcio Costa, desenvolvedor Back-end Java.
      </p>
      
    </div>
  </div>
);

export default Home;
