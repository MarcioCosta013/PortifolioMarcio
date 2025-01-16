import React from "react";
import logo from "../assets/imagens/logoMcdev.png";
import logo2 from "../assets/imagens/logo22.png";

const Home = () => (
  <div className="">
    <nav className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText  w-full z-10 flex justify-center items-center p-4 space-x-4">
      <img src={logo2} alt="Logo" className="block dark:hidden" />
      <img src={logo} alt="Logo" className="hidden dark:block" />
    </nav>
    <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText container mx-auto min-h-screen flex flex-col items-center p-9 m-11 border-double border-4 border-darkBg dark:border-lightBg  ">
      <h1 className="text-4xl font-bold text-lightText dark:text-darkText">
        Bem-vindo!
      </h1>
      <p className="mt-4 text-lg text-lightText dark:text-darkText">
        Sou Márcio Costa, desenvolvedor Back-end Java.
      </p>
      
    </div>
  </div>
);

export default Home;
