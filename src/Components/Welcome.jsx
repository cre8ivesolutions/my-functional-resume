import React from "react";
import logo from "../logo.svg"
import "../App.css";

export default function Welcome (){
    return (
            <div className="Welcome">
                <br/>
                <h2> Welcome ✌️ </h2>
                    <h3>to Tammys React Playground</h3>
                {/* <span> */}
                    {/* <img src={logo} className="App-logo-welcome"
                        alt="react-logo"/>  */}
                    {/* <img src={logo} className="App-logo-welcome-2"
                        alt="react-logo"/>  */}
                    <img src={logo} className="App-logo-welcome"
                        alt="react-logo"/> 
                {/* </span> */}
                {/* <img src="./smiley-pic.png" className="App-logo-welcome-2" 
                alt="smiley face" 
                /> */}
            </div>
    )
};