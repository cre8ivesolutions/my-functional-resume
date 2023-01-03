// import logo from "./logo.svg";
import React from "react";
import "../App.css";
import Welcome from "./Welcome";
// import UseSetState from "../components/useState";
// import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="homepage">
      <br />
      <header>
        <h2>Home Sweet Home! This is the header.</h2>
      </header>
      <Welcome />
      <br />
    </div>
  );
}
