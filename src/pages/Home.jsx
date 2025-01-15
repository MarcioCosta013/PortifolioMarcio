import React from "react";
import logo from "../assets/imagens/logo.jpeg";

const Home = () => (
  <div className="">
    <nav className="bg-primary w-full z-10 flex justify-center items-center p-4 space-x-4">
      <img src={logo} alt="Logo" />
    </nav>
    <div className="bg-gray-600 container mx-auto min-h-screen flex flex-col items-center p-9 m-11">
      <h1 className="text-4xl font-bold text-primary">Bem-vindo!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sou Márcio Costa, desenvolvedor Back-end Java.
      </p>
    </div>
  </div>
);

export default Home;
