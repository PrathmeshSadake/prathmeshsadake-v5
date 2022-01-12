import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Prathmesh Sadake</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Experience</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#memes">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
