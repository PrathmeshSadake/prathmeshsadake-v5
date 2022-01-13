import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container
      className="p-5 my-5"
      style={{
        backgroundColor: "#233554",
        maxWidth: "1100px",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <h3
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Get In Touch 👋
          </h3>
          <p style={{ width: "50%", margin: "auto", marginBottom: "2rem" }}>
            My mailbox is always open. If you have any questions or would like
            to say hello, I will do our best to answer them!
          </p>
          <Button variant="outline-primary">Say Hello</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
