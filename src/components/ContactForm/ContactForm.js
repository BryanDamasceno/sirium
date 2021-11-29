import emailjs from "emailjs-com";
import React from "react";
import { init } from "emailjs-com";
import "./ContactForm.css";
import "../FloatButton/FloatButton";

init("user_6JORM5qnYIl6B5aXaZ1qy");

function alerta() {
  return window.alert(
    "Seu email foi enviado! Responderemos o mais rápido possível :)"
  );
}

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hk41a9",
        "template_lelh0dx",
        e.target,
        "user_UiY4RewuCgNK8TujIbO5v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="fundo2">
      <div className="blocoContato">
        <h1>Entre em contato conosco!</h1>
        <div className="forms">
          <form onSubmit={sendEmail}>
            <div className="row">
              <div className="input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Seu nome"
                  name="name"
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Seu endereço de email"
                  name="email"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Assunto"
                  name="subject"
                />
              </div>
              <div className="input" style={{ font: "Arial" }}>
                <textarea
                  style={{ font: "Arial" }}
                  className="form-control"
                  cols="30"
                  rows="8"
                  placeholder="Conte pra nós como podemos te ajudar!"
                ></textarea>
              </div>
              <div className="col2">
                <input
                  type="submit"
                  className="btn"
                  value="Enviar"
                  onClick={alerta}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
