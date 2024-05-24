import React from "react";
import "./presentacio.scss";
import foto from "./FOTO CURRÍCULUM VITAE.jpeg";
import linkedinIcon from "./Linkedin.png";
import githubIcon from "./github.png";

function Presentacio() {
  return (
    <div className="Presentacio">
      <div className="content">
        <h2>Presentació</h2>
        <p>
          Sóc una persona constant i sempre cerco objectius clars. Quan les
          coses es posen difícils, sé mantenir la calma i abordar els reptes amb
          determinació, aportant valor en diferents situacions.
        </p>
      </div>
      <img src={foto} alt="Currículum Vitae" className="profile-picture" />
      <div className="buttons">
        <a
          href="https://www.linkedin.com/in/kevin-meler-muñoz-2b10192b6"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/kmelermunoz?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Presentacio;
