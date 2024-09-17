// import React from "react";


// const Start = () => {
    //   return (
        
    //   );
    // };
    
    // export default Start;
    import React from 'react'
    import img from "../img/2eae2481-a41a-463a-bca7-8aba2a32180e.png";

export default function start() {
  return (
    <div className="start">
    <div>
      <header>
        <h2>Ayah Al-Hillawi</h2>
      </header>
      <br />
      <br />
      <span className="q" id="aboutme">Full Stack Developer</span>
    </div>
    <img className="po" src={img} alt="Profile" />
  </div>
  )
}

