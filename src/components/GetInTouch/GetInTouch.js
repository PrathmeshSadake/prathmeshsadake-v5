import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./getintouch.scss";

export default function GetInTouch() {
  return (
    <Container
      className="section-touch"
      
    >
      <div className="above-line"></div>
      <Row>
        <Col lg={4} data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay="500">
          <h3>Get in Touch</h3>
        </Col>
        <Col lg={8} data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay="1000">
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. I’m a hard-working and positive person who will
            always approach each task with a sense of purpose and attention to
            detail. Please do feel free to check out my online profiles below
            and get in touch using the form.
          </p>
          <p>
            Email me at{" "}
            <a className="mail-link" href="mailto:prathmeshsadake@gmail.com">
              prathmeshsadake@gmail.com
            </a>
          </p>
        </Col>
      </Row>
      <div className="below-line"></div>
    </Container>
  );
}
