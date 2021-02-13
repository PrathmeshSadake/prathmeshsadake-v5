import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./header.scss";
import iconScroll from "../../assets/icon-scroll.svg";

import leftSvg from "../../assets/illustration-hero-left.svg";
import rightSvg from "../../assets/illustration-hero-right.svg";

import waveSvg from "../../assets/bg-hero-squiggle.svg";

export default function Header() {
  return (
    <Container
      fluid
      className="section-header"
      data-aos="zoom-out"
      data-aos-duration="500"
    >
      <Row className="section-header__row">
        <Col className="picture1">
          <Image fluid src={leftSvg} />
        </Col>
        <Col sm={12} lg={6} className="hero__text">
          <div
            className="hero__text_box"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h2>
              Hey, I’m Prathmesh Sadake and I love building beautiful websites.
            </h2>
            <h2>
              I'm a multi-disciplinary and a design-minded frontend web and
              mobile app developer.
            </h2>
            <Image fluid className="wave" src={waveSvg} />
          </div>
          <div className="icon-scroll">
            <img src={iconScroll} />
          </div>
        </Col>
        <Col className="picture2">
          <Image fluid src={rightSvg} />
        </Col>
      </Row>
    </Container>
  );
}
