import React from "react";
import soft from "../img/softskills.png";
import Soft from "../img/softskills2.png";

export default function SoftSkills() {
  return (
    <div id="softskills">
      <button type="button" className="ht">
        <h1>Soft Skills:</h1>
      </button>
      
      <img className="tnt" src={soft} alt="Soft Skills 1" />
      <img className="tnt" src={Soft} alt="Soft Skills 2" />
    </div>
  );
}
