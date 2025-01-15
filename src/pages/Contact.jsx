import React from "react";
import Popup from "../components/Popup";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => (
  <div className="container mx-auto p-9 m-11">
    <div className="grid justify-items-center gap-10 pt-20  bg-gray-600 min-h-screen items-center">
      <h2 className="text-4xl font-bold text-primary">Entre em Contato: </h2>
      <div className="w-[1143px] flex flex-wrap justify-center gap-6 max-w-[90%]">
        <Popup
          triggerContent={<SlSocialInstagram size={70} className="mx-3" />}
          popupTitle="Instagram"
          popupContent="Este popup foi aberto pelo ícone do Instagram!"
          popupLink="https://www.instagram.com/marcio_costa013"
        />
      </div>

      <div className="w-[1143px] flex flex-wrap justify-center gap-6 max-w-[90%]">
        <Popup
          triggerContent={<SlSocialLinkedin size={70} className="mx-3" />}
          popupTitle="Linkedin"
          popupContent="Este popup foi aberto pelo ícone do Linkedin!"
          popupLink="https://www.linkedin.com/in/marcio-jcosta/"
        />
      </div>
      <div className="flexw-[1143px] flex flex-wrap justify-center gap-6 max-w-[90%]">
        <Popup
          triggerContent={<TfiEmail size={70} className="mx-3" />}
          popupTitle="Email"
          popupContent="Este popup foi aberto pelo ícone do email!"
          popupLink="emailto:marcio-costa38@hotmail.com"
        />
      </div>
      <div className="w-[1143px] flex flex-wrap justify-center gap-6 max-w-[90%]">
        <Popup
          triggerContent={<BsWhatsapp size={70} className="mx-3" />}
          popupTitle="Whatsapp"
          popupContent="Este popup foi aberto pelo ícone do WhatsApp!"
          popupLink="https://wa.me/5581995368033"
        />
      </div>
    </div>
  </div>
);

export default Contact;
