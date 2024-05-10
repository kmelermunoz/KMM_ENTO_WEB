import React from "react";
import "./curriculum.css";
import CVImage from "./image CV.png";
import CVFile from "./CV.pdf";

function Curriculum() {
  return (
    <div className="curriculum-container">
      <p className="developer-text">
        Sóc Kevin Meler Muñoz, un desenvolupador de videojocs. He dedicat els
        últims anys a la creació de mons virtuals i experiències interactives.
        Amb una passió profundament arrelada per la narrativa i la jugabilitat,
        busco sempre crear experiències úniques i envolvent. La meva experiència
        en el desenvolupament de videojocs m'ha dotat de les habilitats
        tècniques i creatives necessàries per dur a terme projectes innovadors i
        emocionants.Si esteu interessats en el meu perfil, podeu descarregar el
        meu currículum..
      </p>
      <img src={CVImage} alt="Curriculum" className="cv-image" />
      <div className="download-container">
        <a href={CVFile} download="cv.pdf" className="download-button">
          Descarregar CV
        </a>
      </div>
    </div>
  );
}

export default Curriculum;
