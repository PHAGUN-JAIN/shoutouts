import "./styles.css";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

export default function NAVBAR() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="test" href="#home">
          United Club of Developers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Shoutouts</Nav.Link>
            <Nav.Link href="/stars">Star Performers</Nav.Link>
            <Nav.Link href="/rickroll">Rick Roll Champs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <ul>
        <li>
          <a href="/">Shoutouts</a>
        </li>
        <li>
          <a href="/stars">Star Performers</a>
        </li>
        <li>
          <a href="/rickroll">Rick Roll Champions</a>
        </li>
      </ul> */}
    </>
  );
}
