import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import { white } from "material-ui/styles/colors";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="rodape">
        <div className="contatos">
          <div className="icon">
            <FaWhatsapp style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>(31)99440-0616/(33)8857-5818</h3>
          </div>
          <div className="icon">
            <MdEmail style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>bryan42damasceno@gmail.com</h3>
          </div>
        </div>
        <h1
          className="title1"
          style={{
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          &copy;SIRIUM ALL RIGHTS RESERVED.
        </h1>
        <a
          style={{
            textDecoration: "none",
          }}
          href="https://github.com/BryanDamasceno"
        >
          <p
            className="title1"
            style={{
              fontSize: "1.17rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <GoMarkGithub />
            BryanDamasceno
          </p>
        </a>
        <div className="redes"></div>
      </footer>
    </div>
  );
};

export default Footer;
