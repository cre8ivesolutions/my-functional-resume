import React from "react";
import logo from "../logo.svg";
import githubicon from "../assets/github-mark-white.png";

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        <div className="icon-div">
          <a href="https://reactjs.org">
            <img className="icon" src={logo} alt="react-logo" />
          </a>
          <span className="icon-message">App made with React</span>
        </div>

        <div className="icon-div">
          <a href="https://github.com/cre8ivesolutions">
            <img className="icon" src={githubicon} alt="github icon" />
          </a>
          <span className="icon-message">Check out my Github</span>
        </div>


      </span>
    </div>
  );
}
