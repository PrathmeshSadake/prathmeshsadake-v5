import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/main-logo.svg";

import "./navbar.scss";

export default function NavigationBar() {
  return (
    <Navbar
      className="custom-padding"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      data-aos="zoom-out"
      data-aos-duration="300"
      data-aos-delay="300"
    >
      <Navbar.Brand href="#home">
        <Link to="/">
          <img src={mainLogo} className="main-logo" alt="main logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" defaultActiveKey="link-1" className="mr-auto">
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="#">
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="#projects">
              <Link to="/projects">projects</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" href="#contact">
              <Link to="/contact">contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
