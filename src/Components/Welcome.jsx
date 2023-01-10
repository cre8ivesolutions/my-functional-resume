import React from "react";
import logo from "../logo.svg"
import "../App.css";

export default function Welcome (){
    return (
            <div className="Welcome">
                <h2>Welcome</h2>
                <span>
                    <img src={logo} className="App-logo-welcome"
                        alt="react-logo"/> 
                    <img src={logo} className="App-logo-welcome"
                        alt="react-logo"/> 
                    <img src={logo} className="App-logo-welcome"
                        alt="react-logo"/> 
                </span>
                <h2>to Tammys React Playground</h2>
                <img src="./smiley-pic.png" className="App-logo-welcome" 
                alt="smiley face" 
                />
            </div>
    )
};