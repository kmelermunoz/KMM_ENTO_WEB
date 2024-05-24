import React from "react";
import "./hobbies.scss";
import gamingImage from "./gaming.png";
import gymImage from "./gym.png";
import sportsImage from "./sports.png";
import musicImage from "./music.png";
import readingImage from "./reading.png";
import cookingImage from "./cooking.png";

function Hobbies() {
  return (
    <div className="hobbies-container">
      <div className="hobby-item gaming">
        <img src={gamingImage} alt="Jugar a videojocs" />
        <div className="hobby-info">
          <h3 className="hobby-title">Jugar a videojocs</h3>
          <p className="hobby-description">
            M'apassiona explorar mons virtuals i viure emocionants aventures en
            els videojocs.
          </p>
        </div>
      </div>
      <div className="hobby-item gym">
        <img src={gymImage} alt="Anar al gimnàs" />
        <div className="hobby-info">
          <h3 className="hobby-title">Anar al gimnàs</h3>
          <p className="hobby-description">
            M'agrada mantenir-me actiu i saludable fent exercici al gimnàs.
          </p>
        </div>
      </div>
      <div className="hobby-item sports">
        <img
          src={sportsImage}
          alt="Practicar esports com el futbol i el bàsquet"
        />
        <div className="hobby-info">
          <h3 className="hobby-title">Practicar esports</h3>
          <p className="hobby-description">
            Disfruto jugant futbol i bàsquet amb amics, és una gran manera de
            passar el temps lliure.
          </p>
        </div>
      </div>
      <div className="hobby-item music">
        <img src={musicImage} alt="Escoltar música" />
        <div className="hobby-info">
          <h3 className="hobby-title">Escoltar música</h3>
          <p className="hobby-description">
            La música és una part important de la meva vida, m'encanta descobrir
            nous artistes i gèneres musicals.
          </p>
        </div>
      </div>
      <div className="hobby-item reading">
        <img src={readingImage} alt="Llegir llibres" />
        <div className="hobby-info">
          <h3 className="hobby-title">Llegir llibres</h3>
          <p className="hobby-description">
            La lectura és el meu passatemps preferit, m'agrada submergir-me en
            noves històries i aprendre coses noves.
          </p>
        </div>
      </div>
      <div className="hobby-item cooking">
        <img src={cookingImage} alt="Cuinar" />
        <div className="hobby-info">
          <h3 className="hobby-title">Cuinar</h3>
          <p className="hobby-description">
            M'encanta experimentar a la cuina i preparar plats deliciosos per a
            familiars i amics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
