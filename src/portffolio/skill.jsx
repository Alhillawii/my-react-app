import React from "react";
import img1 from "../img/download__14_-removebg-preview.png";
import img2 from "../img/css.png";
import img3 from "../img/images__4_-removebg-preview.png";
import img4 from "../img/images__5_-removebg-preview.png";
import img5 from "../img/githup.png";
import img6 from "../img/git.png";



export default function skill() {
  return (
    <div>
    <button type="button" className="ht" id="my-skills">
      <h1>My Skills:</h1>
    </button>
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner w-20" id="myskills">
        <div className="carousel-item active">
          <img src={img1} className="card1" alt="Skill 1" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="card3" alt="CSS" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="card2" alt="Skill 2" />
        </div>
        <div className="carousel-item">
          <img src={img4} className="card4" alt="Skill 3" />
        </div>
        <div className="carousel-item">
          <img src={img5} className="card5" alt="GitHub" />
        </div>
        <div className="carousel-item">
          <img src={img6} className="card6" alt="Git" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}
