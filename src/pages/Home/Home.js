/*eslint-disable*/
import React, { useState, useEffect } from "react";
import "../../global.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import "./Home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

import CardReserva from "../../components/Grid/Grid";
import CardInternet from "../../components/Card/Card";
import Lottie from "react-lottie";
import animationDataDev from "../../animations/devAnimation.json";
import animationDataSocial from "../../animations/socialAnimation.json";
import animationDataTech from "../../animations/techAnimation.json";
import animationDataAnalise from "../../animations/analiseAnimation.json";

function Home() {
  const [size, setSize] = useState(560);
  const [size2, setSize2] = useState(560);
  const [size3, setSize3] = useState(560);
  const [size4, setSize4] = useState(560);

  useEffect(() => {
    if (window.screen.width < 1500) {
      setSize(620);
      setSize3(620);
      setSize4(510);
    }
    if (window.screen.width < 500) {
      setSize(550);
      setSize2(430);
      setSize3(420);
      setSize4(610);
    }
    if (window.screen.width > 1500) {
      setSize(760);
      setSize3(760);
      setSize4(760);
    }
  });

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

  const defaultOptionsTech = {
    loop: true,
    autoplay: true,
    animationData: animationDataTech,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsAnalise = {
    loop: true,
    autoplay: true,
    animationData: animationDataAnalise,
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
            height={size}
            width={size}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />

          <h1 className="subtitle">
            NOSSO OBJETIVO ?? LEVAR VOC?? AT?? SEUS CLIENTES NO MUNDO DIGITAL.
          </h1>
        </div>

        <div className="animation2">
          <Lottie
            options={defaultOptionsSocial}
            height={size2}
            width={size2}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />

          <h1 className="subtitle2">
            COLOQUE SUA IDEIA E SEU NEG??CIO NA INTERNET.
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
          titulo="TENHA UM SITE QUE COMBINE COM A SUA EMPRESA"
          image="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/1card.png?alt=media&token=d76f4e69-fe77-4fc1-8aa7-baed6117c046"
        />

        <CardReserva
          titulo="GARANTIMOS A MELHOR EXPERI??NCIA DE USU??RIO AO CONHECER SEUS SERVI??OS E PRODUTOS"
          image="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/2card.png?alt=media&token=e5f198d8-4ac1-43ed-ac4a-52122fe59006"
        />

        <CardReserva
          titulo="QUEREMOS TORNAR O MERCADO DIGITAL ACESS??VEL, JUNTOS PODEMOS ENCONTRAR O MELHOR PRE??O PRA VOC?? "
          image="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/3.png?alt=media&token=7ee86718-1361-4acd-b014-ef4e3f50852e"
        />
      </div>

      <h1 className="title5">USAMOS AS TECNOLOGIAS MAIS MODERNAS DO MERCADO</h1>

      <div className="animation3">
        <Lottie
          options={defaultOptionsTech}
          height={size3}
          width={size3}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>

      <div className="animation4">
        <Lottie
          options={defaultOptionsAnalise}
          height={size4}
          width={size4}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />

        <h1 className="subtitle4">
          NOS CONTE SUA HIST??RIA E VAMOS ENCONTRAR A MELHOR SOLU????O PARA SEU
          PROBLEMA
        </h1>
      </div>
    </div>
  );
}

export default Home;
