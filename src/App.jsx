import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import styled from "styled-components";
// import ThisContext from "./Components/Context";
import React from "react";
import Contact from "./Components/Contact";
import UseSetState from "./Components/useState";
import Footer from "./Components/Footer";
import { useContext } from "react";
import { Navbar } from "react-bootstrap";
// import Navbar from "./Components/Navbar"

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 0.75em;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  background: white;
  color: black;
  font-weight: bold;
  border: none;
`;
const ThisContext = React.createContext("The default Context Value is this!");

function App() {
  const ContextInfo = useContext(ThisContext);
  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark">
          <Router>
            <StyledButton>
              <Link to="/home">HOME</Link>
            </StyledButton>
            <StyledButton>
              <Link to="/contact">CONTACT</Link>
            </StyledButton>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Navbar>
        <br/>

      </div>
      <header className="App-header">
        <p>Why is this one dark?</p>
        <Home />
        <p>This one is dark because it is located in the header of the main App.jsx file.</p>
      </header>
      <br />
      <div>
        <ThisContext.Provider value="default 3" />
        <UseSetState />
        <h3>{ContextInfo}</h3>
      </div>

      <br />
      <img src={logo} className="App-logo" alt="logo" 
        max-height="7vh"
      />
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
