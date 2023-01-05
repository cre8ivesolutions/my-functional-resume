import { Navbar } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/home">HOME</Link>

        <Link to="/contact">CONTACT</Link>
      </Navbar>
    </div>
  );
}
