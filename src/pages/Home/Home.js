/*eslint-disable*/
import React, { useState } from "react";
import "../../global.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import "./Home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import CardReserva from "../../components/Grid/Grid";
import CardInternet from "../../components/Card/Card";
import Lottie from "react-lottie";
import animationDataDev from "../../animations/devAnimation.json";
import animationDataSocial from "../../animations/socialAnimation.json";

function Home() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptionsDev = {
    loop: true,
    autoplay: true,
    animationData: animationDataDev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsSocial = {
    loop: true,
    autoplay: true,
    animationData: animationDataSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container">
      <div>
        <Carrossel />
        <div className="animation">
          <Lottie
            options={defaultOptionsDev}
            height={760}
            width={760}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />

          <h1 className="subtitle">
            NOSSO OBJETIVO É LEVAR VOCÊ ATÉ SEUS CLIENTES NO MUNDO DIGITAL.
          </h1>
        </div>

        <div className="animation2">
          <Lottie
            options={defaultOptionsSocial}
            height={560}
            width={560}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />

          <h1 className="subtitle2">
            COLOQUE SUA IDEIA E SEU NEGÓCIO NA INTERNET.
          </h1>
        </div>

        <div className="apresentacao">
          <h1 className="title1">
            TENHA SEU SITE PERSONALIZADO <br /> PARA SEUS OBJETIVOS
          </h1>
        </div>
      </div>

      <div className="Grade">
        <CardReserva
          titulo="Vamos fazer um site que combina com você e com sua empresa"
          image="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/1card.png?alt=media&token=d76f4e69-fe77-4fc1-8aa7-baed6117c046"
        />

        <CardReserva
          titulo="Garantimos a melhor experiência de usuário ao conhecer seus serviços e produtos"
          image="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/2card.png?alt=media&token=e5f198d8-4ac1-43ed-ac4a-52122fe59006"
        />

        <CardReserva
          titulo="Buscamos tornar o mercado virtual acessível, vamos encontrar o melhor preço pra você"
          image="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/3.png?alt=media&token=7ee86718-1361-4acd-b014-ef4e3f50852e"
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
