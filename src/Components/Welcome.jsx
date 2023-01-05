import React from "react";
import logo from "../logo.svg"
import "../App.css";

const Welcome = () => {
    return (
            <div className="position-absolute top-50 start-50 translate-middle w-75 h-75">
                <span>
                    <img src={logo} className="App-logo-welcome"
                        alt="logo2"/> 
                    <img src={logo} className="App-logo-welcome"
                        alt="logo2"/> 
                    <img src={logo} className="App-logo-welcome"
                        alt="logo2"/> 
                </span>
                <h1>Welcome to Tammys React Playground</h1>
                <br />
                <img src="./logo192.png" className="App-logo-welcome" 
                alt="smiley face" 
                />
            </div>
    )
}

export default Welcome