import React from "react";
import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap"

export default function Footer() {
  return (
    <div>
      <Card>
        <Card.Header>Footer Card Header</Card.Header>
        <Card.Body>
          <Card.Title>Footer Card Title</Card.Title>
          <Card.Text>
            Here is where you can add text into the footer!!!
          </Card.Text>
          <Card.Text>More Text</Card.Text>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEARN REACT
          </a>
          <br/>
        </Card.Body>
      </Card>
    </div>
  );
}
