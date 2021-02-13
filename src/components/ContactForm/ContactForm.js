import React from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";

import "./contact-form.scss";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "prathmeshsadake",
        "devfolio",
        e.target,
        "user_fEbxvhJz6eR6PZeVmKu5z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container
      data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay="2000"
    >
      <Row>
        <Col sm={4}>
          <h3>Contact me</h3>
        </Col>
        <Col sm={8}>
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              placeholder="First and Last, please!"
              name="name"
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="How can I contact you ?"
              name="email"
            />
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="subject" />
            <label>Message</label>
            <textarea
              type="text"
              placeholder="How can I help ?"
              name="message"
            />
            <div>
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
