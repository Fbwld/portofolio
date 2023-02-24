/* eslint-disable import/prefer-default-export */
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import "../css/NavBar.css"

export function NavBar() {
  return (
    <Navbar className="n-wrapper" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="n-left">FEBI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="n-right">
            <Nav.Link className="n-p" href="#home">Home</Nav.Link>
            <Nav.Link className="n-p" href="#link">Skills</Nav.Link>
            <Nav.Link className="n-p" href="#link">Protofolio</Nav.Link>
            <Button 
            id="button-n" variant="outline-success">Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
