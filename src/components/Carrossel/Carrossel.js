import React from "react";
import { IconButton } from "@material-ui/core";
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
      scrollMode="remainder"
      transitionMode="fade"
      slidesToScroll="auto"
      speed={1500}
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
          src="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/pexels-roberto-nickson-3082341.jpg?alt=media&token=5778ed8c-ae28-4232-81d6-ed6f3be37a42"
        />

        <h1 className="texto globalTitle">MODERNIZE SEU NEGÓCIO.</h1>
      </div>

      <div className="content">
        <img
          alt="imagem"
          className="capa-imagem"
          src="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/pexels-fauxels-3184338.jpg?alt=media&token=8a419771-da91-4c34-9b35-7e3405241464"
        />
        <h1 className="texto globalTitle">ENTRE NO MERCADO DIGITAL.</h1>
      </div>

      <div className="content">
        <img
          alt="imagem"
          className="capa-imagem"
          src="https://firebasestorage.googleapis.com/v0/b/sirium-55003.appspot.com/o/pexels-andrew-neel-2312369.jpg?alt=media&token=df4e2be2-ecf4-4438-a43d-d1fd2df3c93c"
        />
        <div className="terceiro">
          <h1 className="texto globalTitle">
            APROVEITE O MELHOR DA TECNOLOGIA.
          </h1>
        </div>
      </div>
    </Carousel>
  );
}

export default Carrossel;
