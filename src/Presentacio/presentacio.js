import React from "react";
import "./presentacio.scss";
import foto from "./FOTO CURRÍCULUM VITAE.jpeg";

function Presentacio() {
  return (
    <div className="Presentacio">
      <h2>Presentació</h2>
      <p>
        Sóc una persona constant i sempre cerco objectius clars. Quan les coses
        es posen difícils, sé mantenir la calma i abordar els reptes amb
        determinació, aportant valor en diferents situacions.
      </p>
      <img src={foto} alt="Currículum Vitae" />
      <a
        href="https://www.linkedin.com/in/kevin-meler-muñoz-2b10192b6"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        Visita el meu LinkedIn
      </a>
    </div>
  );
}

export default Presentacio;
