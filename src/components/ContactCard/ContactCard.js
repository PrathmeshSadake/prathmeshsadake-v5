import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./contact-card.scss";

export default function ContactCard({ description }) {
  return (
    <Container
      className="contact-card-container"
      data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      <div className="contact-card">
        <Row>
          <Col xs={12} md={8}>
            <h4 className="description">{description}</h4>
          </Col>
          <Col xs={12} md={4} className="btn-container">
            <Link to="/contact">Contact me</Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
