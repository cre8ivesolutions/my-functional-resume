// import { Form } from "react-bootstrap";
import { useState } from "react";
import "../index.css";
import { Navigate } from "react-router-dom";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    //this is working to submit data to the database
    e.preventDefault();
    const newContact = { name, email, message };
    try {
      fetch(`http://localhost:5001/contact`, {
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      }).then(() => {
        console.log(`Message submitted from Contact Form`);
        <Navigate to="/Home" />;
      });
      // console.log(newContact)
    } catch (err) {
      console.log(err + `error submitting message from Contact Form`);
    }
  };

  return (
    <div>
      <h3>Contact me</h3>
      <div className="ContactForm">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label>Your Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Message:</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            maxLength="500"
            rows={6}
          ></textarea>

          <label>Choose one:</label>
          <select>
            <option value="Hiring Manager">I am a hiring manager</option>
            <option value="Recruiter">I am a recruiter</option>
            <option value="Other">Other: </option>
          </select>
          <button className="submit-btn">Submit</button>
          <p>{name}</p>
          <p>{email}</p>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
