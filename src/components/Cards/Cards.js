import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import code from "../../assets/icons/code.svg";
import collab from "../../assets/icons/collab.svg";
import design from "../../assets/icons/design.svg";
import clean from "../../assets/icons/clean.svg";

import "./cards.scss";

export default function Cards() {
  return (
    <Container className="section-cards">
      <Row>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="custom-card"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="custom-card-image-container">
            {" "}
            <Image fluid src={clean} />
          </div>
          <div className="card-text">
            <h5>Clean code</h5>
            <p>
              I focus on writing accessible and clean code, using modern coding
              practices.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="custom-card down"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div className="custom-card-image-container">
            {" "}
            <Image fluid src={collab} />
          </div>
          <div className="card-text">
            <h5>Collaborative</h5>
            <p>
              I’m a team player who will always approach each task with a sense
              of purpose and attention to detail.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="custom-card"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <div className="custom-card-image-container">
            {" "}
            <Image fluid src={design} />
          </div>
          <div className="card-text">
            <h5>Design minded</h5>
            <p>
              I'm a design minded frontend developer focusing on developing
              beautiful User Interfaces.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="custom-card down"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="2000"
        >
          <div className="custom-card-image-container">
            {" "}
            <Image fluid src={code} />
          </div>
          <div className="card-text">
            <h5>Development</h5>
            <p>
              Apart from developing things for Web, I also develop mobile apps
              using Flutter.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
