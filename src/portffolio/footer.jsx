import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";



export default function footer() {
  return (
    <div>
    <section>
      <a href="https://www.facebook.com/ayah.hillawi.3" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
      <a href="https://www.linkedin.com/in/ayah-alhillawi-63a057309/" target="_blank" rel="noopener noreferrer">
        <CiLinkedin />
      </a>
      <a href="https://github.com/Alhillawii/protoflio" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </section>
  </div>
  )
}
