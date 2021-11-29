import React from "react";

import "../../global.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import "./Home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import CardReserva from "../../components/Grid/Grid";
import CardInternet from "../../components/Card/Card";

function Home() {
  return (
    <div className="container">
      <div>
        <Carrossel />

        <div className="Case">
          <div className="Box">
            <h2 className="title2">Modernize seu negócio</h2>
          </div>

          <div className="boxTopico">
            <div className="Topicos">
              <p>
                <FaAngleDoubleRight /> IP Válido
                <FaCheckSquare className="Check" />
              </p>
              <p>
                <FaAngleDoubleRight /> Garantia de Banda
                <FaCheckSquare className="Check" />
              </p>
              <p>
                <FaAngleDoubleRight /> Velocidade Contratada
                <FaCheckSquare className="Check" />
              </p>
              <p>
                <FaAngleDoubleRight /> SLA 4 horas
                <FaCheckSquare className="Check" />
              </p>
            </div>
          </div>
        </div>

        <div className="apresentacao">
          <h1 className="title1">
            Por que somos o melhor <br /> provedor da região?
          </h1>
        </div>
      </div>

      <div className="Grade">
        <CardReserva
          titulo="Suporte técnico diferenciado,
              com profissionais qualificados
              para um melhor atendimento."
          image="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/prof.jpg?alt=media&token=88f3374b-edef-42b7-9f61-2c33fb7aa7a9"
        />

        <CardReserva
          titulo="Oferecemos uma conexão segura
            e com qualidade 24h por dia.
            Temos redundância com links diretamente do PTT de SP, RJ e MG."
          image="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/casal.jpg?alt=media&token=022cf031-6728-4100-8588-2b34c41cf459"
        />

        <CardReserva
          titulo="Planos alternativos com
            valores que cabem no seu bolso,
            taxa de instalação dividida no cartão ou boleto, sem burocracia."
          image="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/money2.jpg?alt=media&token=5bd94650-86d0-4de0-b2f5-dd3b07a3d2a8"
        />
      </div>

      <div className="stream">
        <div className="apresentacao">
          <h3 className="title3">Assista tudo, com qualidade e velocidade.</h3>
        </div>
      </div>
      <img
        alt="imagem"
        className="netflix"
        src="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/sream.jpg?alt=media&token=31da8cac-ff26-48d2-a066-24f6ceb6c7e8"
      />
      <div className="jogos">
        <div className="apresentacao">
          <h3 className="title3">Não perca um frame dos seus jogos.</h3>
        </div>
      </div>
      <img
        alt="imagem"
        className="netflix"
        src="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/game.jpg?alt=media&token=ddd3ab2c-4d45-405d-b35c-b9c168d23a9f"
      />
      <div className="apresentacao">
        <h4 className="title4">Nossos Planos</h4>
      </div>
      <div className="Grade2">
        <a href="https://api.whatsapp.com/send/?phone=553141124080&text&app_absent=0">
          <CardInternet
            titulo="Contrate agora 100 mega de download, sem limite de uso. "
            data="*Planos sujeito a viabilidade técnica."
            image="/images/icons/100Mega.png"
          />
        </a>

        <a href="https://api.whatsapp.com/send/?phone=553141124080&text&app_absent=0">
          <CardInternet
            titulo="Contrate agora 200 mega de download, sem limite de uso."
            data="*Planos sujeito a viabilidade técnica."
            image="/images/icons/200Mega.png"
          />
        </a>

        <a href="https://api.whatsapp.com/send/?phone=553141124080&text&app_absent=0">
          <CardInternet
            titulo="Contrate agora 300 mega, sem limite de uso."
            data="*Planos sujeito a viabilidade técnica."
            image="/images/icons/300Mega.png"
          />
        </a>

        <a href="https://api.whatsapp.com/send/?phone=553141124080&text&app_absent=0">
          <CardInternet
            titulo="Contrate agora 500 mega, sem limite de uso."
            data="*Planos sujeito a viabilidade técnica."
            image="/images/icons/500Mega.png"
          />
        </a>
      </div>
      <h1
        className="title1"
        style={{
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        &copy;PlanexTelecom
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
            color: "black",
            paddingLeft: "1rem",
          }}
        >
          Made by{" "}
          <GoMarkGithub style={{ marginRight: "2px", marginLeft: "8px" }} />
          BryanDamasceno
        </p>
      </a>
    </div>
  );
}

export default Home;
