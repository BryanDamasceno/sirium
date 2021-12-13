import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import { white } from "material-ui/styles/colors";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="rodape">
        <div className="contatos">
          <div className="icon">
            <FaWhatsapp style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>(31)98939-9760/(31)4112-4080</h3>
          </div>
          <div className="icon">
            <MdEmail style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>contato@planextelecom.com.br</h3>
          </div>
        </div>
        <div className="redes"></div>
      </footer>
    </div>
  );
};

export default Footer;
