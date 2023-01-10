import React from "react";
import logo from "../logo.svg";
import githubicon from "../assets/github-mark-white.png";

export default function Footer() {
  return (
    <div className="Footer">

      <div className="icon-text">
        <span>
          <a href="https://github.com/cre8ivesolutions">
            <p>Check out my Github</p>
            <img className="icon App-logo-welcome" src={githubicon} alt="github icon" />
          </a>
        </span>
      </div>

      {/* <div>
<b><p>✌️</p></b>
      </div> */}
      
      <div className="icon-text">
        <a href="https://reactjs.org">
          <p>App created using React</p>
          <img src={logo} className="icon App-logo-welcome" alt="logo" max-height="4vh" />
        </a>
      </div>
      
    </div>
  );
}
