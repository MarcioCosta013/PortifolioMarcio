import React from "react";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../assets/imagens/logo.jpeg";

const Footer = () => (
  <footer className="bg-primary justify-center text-white py-4 text-center w-full">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-2xl font-bold">
        <a href="/">
          <img src={logo} alt="Logo" className="w-80 h-80 rounded-full" />
        </a>
      </div>
      <diV className="flex space-x-2 mt-4 md:mt-0">
        <p>Entre em Contato:</p>
        <a
          href="https://github.com/MarcioCosta013"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialGithub size={24} className="mx-3" />
        </a>
        <a
          href="https://instagram.com/marcio_costa013"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram size={24} className="mx-3" />
        </a>
        <a
          href="https://linkedin.com/in/marcio-jcosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin size={24} className="mx-3" />
        </a>
        <a href="mailto:marcio-costa38@hotmail.com">
          <TfiEmail size={24} className="mx-3" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5581995368033"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp size={24} className="mx-3" />
        </a>
      </diV>
      
    </div>
    <p>© 2025 Marcio Costa Dev. Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
