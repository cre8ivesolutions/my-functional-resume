import React from "react";
import githubicon from "../assets/github-mark-white.png";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>December 2022 Grad!</h2>
      <ContactForm />
      
      <a href="https://github.com/cre8ivesolutions">
        <img className="icon" src={githubicon} alt="github icon" />
      </a>
      
    </div>
  );
}
