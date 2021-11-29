import React from "react";
import { fade, IconButton } from "@material-ui/core";
import Carousel from "nuka-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import "./Carrossel.css";

function Carrossel() {
  return (
    <Carousel
      className="carousel"
      autoplay={true}
      wrapAround={true}
      transactionMode={fade}
      slidesToScroll="auto"
      disableEdgeSwiping="fatruelse"
      cellAlign="center"
      renderCenterLeftControls={({ previousSlide }) => (
        <IconContext.Provider value={{ color: "#ffff", size: "5vw" }}>
          <IconButton onClick={previousSlide}>
            <IoIosArrowBack />
          </IconButton>
        </IconContext.Provider>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <IconContext.Provider value={{ color: "#ffff", size: "5vw" }}>
          <IconButton onClick={nextSlide}>
            <IoIosArrowForward />
          </IconButton>
        </IconContext.Provider>
      )}
      defaultControlsConfig={{
        pagingDotsStyle: {
          fill: "white",
        },
      }}
    >
      <div className="content">
        <img
          className="capa-imagem"
          alt="imagem"
          src="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/team.png?alt=media&token=2ca78939-357d-4f2c-81e7-fba48736ef91"
        />

        <h1 className="texto globalTitle">Sempre perto de você.</h1>
      </div>

      <div className="content">
        <img
          alt="imagem"
          className="capa-imagem"
          src="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/server.png?alt=media&token=9a655e9f-36a5-4544-a908-8786b4d5ba2f"
        />
        <h1 className="texto globalTitle">Link dedicado e redundância.</h1>
      </div>

      <div className="content">
        <img
          alt="imagem"
          className="capa-imagem"
          src="https://firebasestorage.googleapis.com/v0/b/planex-telecom.appspot.com/o/kid.png?alt=media&token=e6a3e8a3-cb21-45b4-a561-4013194ea20e"
        />
        <div className="terceiro">
          <h1 className="texto globalTitle">Preço Acessível.</h1>
        </div>
      </div>
    </Carousel>
  );
}

export default Carrossel;
