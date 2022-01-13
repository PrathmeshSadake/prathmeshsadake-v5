import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      className="p-3"
      style={{
        maxWidth: "900px",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "300",
              marginBottom: "1rem",
            }}
          >
            Designed & Built by Prathmesh Sadake
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
