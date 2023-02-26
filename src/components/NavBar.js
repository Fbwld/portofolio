/* eslint-disable import/prefer-default-export */
import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import "../css/NavBar.css"
import logo from "../assets/img/febi.png"

export function NavBar() {
  return (
    <Navbar className="n-wrapper" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="n-left"><img src={logo} alt="" style={{
          width:'15%'
        }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="n-right">
            <Nav.Link className="n-p" href="#home">Home</Nav.Link>
            <Nav.Link className="n-p" href="#skills">Skills</Nav.Link>
            <Nav.Link className="n-p" href="#project">Protofolio</Nav.Link>
            <Button 
            id="button-n" variant="outline-success">Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
