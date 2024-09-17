import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom"; // Fixed spelling


export default function nav() {
  return (
    <div>
    <nav> 
       <ul>
        <li><a className="left" href="#top"><img src={logo} alt="Logo" /></a></li>
        <li><a className="h" href="#home">Home</a></li>
        <li><a className="h" href="#aboutme">About Me</a></li>
        <li><a className="h" href="#myproject">My Project</a></li>
        <li><a className="h" href="#myskills">My Skills</a></li>
        <li><a className="h" href="#softskills">Soft Skills</a></li>
      </ul>
    </nav>
    
    {/* Navigation Links */}
    {/* <Link to="/" className="active">Nav</Link>
    <Link to="/start">Start</Link>
    <Link to="/about">About</Link>
    <Link to="/skill">Skill</Link>
    <Link to="/soft">Soft</Link> 
    <Link to="/footer">Footer</Link> */}
  </div>
  )
}

