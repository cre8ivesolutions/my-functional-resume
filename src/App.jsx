import React from "react";
// import logo from "./logo.svg";
import "./index.css";
import "./App.css";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import Contact from "./Components/Contact";

// import UseSetState from "./Components/UseState";
// import ThisContext from "./Components/Context";

const ThisContext = React.createContext("The default Context Value is this!");

function App() {
  const ContextInfo = useContext(ThisContext);
  return (
    <div className="App">
      <div className="navbar">
      <Navbar />
      </div>
      <Contact />
     
      {/* <div className="Context">
        <ThisContext.Provider value="default 3" />
        <UseSetState />
        <h3>{ContextInfo}</h3>
      </div> */}

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
