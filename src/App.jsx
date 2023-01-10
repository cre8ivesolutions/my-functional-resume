import React from "react";
// import logo from "./logo.svg";
import "./index.css";
import "./App.css";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext } from "react";

// import UseSetState from "./Components/UseState";
// import ThisContext from "./Components/Context";

const ThisContext = React.createContext("The default Context Value is this!");

function App() {
  const ContextInfo = useContext(ThisContext);
  return (
    <div className="App">
      <Navbar />

      {/* <div className="Context">
        <ThisContext.Provider value="default 3" />
        <UseSetState />
        <h3>{ContextInfo}</h3>
      </div> */}

      {/* <br />

      <div>
        <span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo " alt="logo" max-height="4vh" />

            <p>App created using React</p>
          </a>
        </span>
        <br />
        <br />
        <hr />
      </div> */}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
