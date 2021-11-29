import React from "react";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
        <div className="redes">
          <div className="icon">
            <a
              style={{
                textDecoration: "none",
                font: " font: normal 40pt Roboto",
              }}
              href="https://www.facebook.com/planextelecom/"
            >
              <FaFacebook style={{ fontSize: 35, color: white, margin: 10 }} />
            </a>

            <h3> Planex Telecom</h3>
          </div>
          <div className="icon">
            <a
              style={{
                textDecoration: "none",
              }}
              href="https://www.instagram.com/planextelecom/"
            >
              <FaInstagram style={{ fontSize: 35, color: white, margin: 10 }} />
            </a>
            <h3>@planextelecom</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
