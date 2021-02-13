import React from "react";
import {
  GrGithub,
  GrLinkedin,
  GrTwitter,
  GrFacebook,
  GrInstagram,
} from "react-icons/gr";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/main-logo.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <Container fluid className="custom-padding">
      <Row>
        <Col className="footer-logo-container" xs={12} md={4}>
          <Link to="/">
            <img src={mainLogo} className="footer-logo" alt="main logo" />
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <div className="footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://github.com/PrathmeshSadake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GrGithub size="1.75rem" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/prathmeshsadake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GrLinkedin size="1.75rem" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/prathmeshsadake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GrTwitter size="1.75rem" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/prathamesh.sadake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GrFacebook size="1.75rem" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prxthmesh"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GrInstagram size="1.75rem" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
