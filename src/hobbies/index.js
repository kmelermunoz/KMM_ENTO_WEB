import React from "react";
import "./hobbies.scss";
import gamingImage from "./gaming.png";
import gymImage from "./gym.png";
import sportsImage from "./sports.png";

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
    </div>
  );
}

export default Hobbies;
