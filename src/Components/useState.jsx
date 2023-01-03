import { useState } from "react";
import React from "react";

// useState allows Inverse Data Flow to allow data to be sent from the child to the parent.
export default function UseSetState() {
  const [state, setState] = useState("This is the starting 'useState'");
  return (
    <div className="box">
      <hr />
      <h1> This is the useState section! </h1>
      <h2>The current state is '{state}'</h2>
      <h3> Use the variable 'setState' to update the 'state'</h3>
      <label type="text">Try it yourself! Enter the new setState here: </label>
      <br/>
      <br/>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit" text="you dont really need to submit this info">
        NOT ACTUALLY A SUBMIT BUTTON
      </button>
      <br />
      <br />
      <hr />
    </div>
  );
}
