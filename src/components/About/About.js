import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  SiFlutter,
  SiReact,
  SiCss3,
  SiDart,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import aboutBackground from "../../assets/bg-footer-squiggle.svg";
import illustration from "../../assets/illustration-hero-right.svg";

import "./about.scss";

const About = () => {
  return (
    <Container className="section-about">
      <Row>
        <Col
          xs={12}
          md={8}
          className="about-me"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div className="line"></div>
          <h3>About me</h3>
          <p>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Mumbai, India, but I’m happy working
            remotely. When I’m not coding, you’ll find me outdoors. I love being
            out in nature whether that’s going for a walk, run or cycling. I’d
            love you to check out my work.
          </p>
          <div className="skills-container">
            <div className="container-1">
              <SiFlutter size="1.5rem" />
              <SiDart size="1.5rem" />
              <SiCss3 size="1.5rem" />
            </div>
            <div className="container-2">
              <SiHtml5 size="1.5rem" />
              <SiJavascript size="1.5rem" />
              <SiReact size="1.5rem" />
            </div>
          </div>
          <Link to="/projects" className="btn-ghost"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="500">view projects</Link>
          <div className="line"></div>

          <Image fluid className="squiggle" src={aboutBackground} />
        </Col>
        <Col
          className="img-container"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <Image fluid src={illustration} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
