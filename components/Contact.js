import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Get In Touch</h3>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you! I’d love to combine my
            passion for learning and developing with my software development
            skills to continue building personalised products for people.
          </p>
          <Button variant="outline-primary">Say Hello</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
