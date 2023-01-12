import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
// import Context from "./Context";
import UseState from "./UseState";

export default function Navbar() {
  return (
    <div className="navbar">
      <Router>
        <p></p>
        <Link className="nav" to="/home">
          Home{ " "}
        </Link>
        <Link className="nav" to="/contact">
          Contact{" "}
        </Link>
        <Link className="nav" to="/UseState">
          useState {" "}
        </Link>
        <p></p>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/UseState" element={<UseState />} />
        </Routes>
      </Router>
    </div>
  );
}
