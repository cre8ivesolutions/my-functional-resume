import { useState } from "react";
import React from "react";
import "../index.css";

// useState allows Inverse Data Flow to allow data to be sent from the child to the parent.
export default function UseSetState() {
  const [state, setState] = useState("This is the starting 'useState'");
  return (
    <div>
      <div className="UseState">
        <h1> This is the useState section! </h1>
        <p className="description">React uses features that they call Hook's. 'useState' is a Hook that lets you update the state of the app without having to use a class. </p>
        <h2>Check it out!</h2>
        <h3 className="left">Example:</h3>
        <h3>The current state is:</h3>
          <h4> <i>'{state}'</i> </h4>
        
        <h3>
          {" "}
          Use the variable <b>'setState'</b> to update the 'state'.
        </h3>
        <span>
          <label type="text">
            Try it yourself! Enter the new <i>setState</i> here:{" "}
          </label>
          <br/>
          <br/>
          <input
            type="text"
            onChange={(e) => {
              setState(e.target.value);
            }}
            />
        </span>
            <br/>
            <br/>
      </div>
            <br/>
    </div>
  );
}
