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
        <p className="description">
          React uses features that they call Hook's. 'useState' is a Hook that
          lets you update the state of the app without having to use a class.{" "}
        </p>
        <p>Step 1: import {"{ useState }" } from 'react'</p>
        <p>Step 2: const [state, setState]= useState('This is the starting 'useState')</p>
        <p>Step 3: Use the variable 'setState' to update the current state.</p>

        <h2>Check it out!</h2>
        
        <div className="example">
          <h3 className="left">Example:</h3>
          <span><p>The current state is: 
            <i> '{state}'</i>{" "}
          </p></span>

          <p>
            {" "}
            Use the variable <b>'setState'</b> to update the 'state'.
          </p>
          <span>
            <label id="setState" type="text">
              Try it yourself! Enter the new <i>setState</i> here:
            </label>
            <br/>
            <br/>
            <input
              type="text"
              name="setState"
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </span>
        </div>
      </div>
      <br />
    </div>
  );
}
