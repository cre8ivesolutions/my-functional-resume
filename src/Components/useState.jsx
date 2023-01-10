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
        <h2>
          The current state is:</h2>
          <h3> <i>'{state}'</i> </h3>
        
        <h2>
          {" "}
          Use the variable <b>'setState'</b> to update the 'state'.
        </h2>
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
