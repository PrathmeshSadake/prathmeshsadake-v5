import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <Container
      style={{
        maxWidth: "1200px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col sm={12} style={{ textAlign: "center" }}>
          <h1 className="hero__heading">Prathmesh Sadake</h1>
          <p className="hero__description">
            I specialize in building beautiful client-facing apps and develop
            them with cutting-edge back-end support.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
