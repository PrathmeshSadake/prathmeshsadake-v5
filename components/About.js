import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Lottie from "react-lottie";
import Lottie from "react-lottie-player";
import animationData from "../public/assets/developerAnimation.json";

const About = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1100px" }}>
      <Row className="gx-4">
        <Col sm={7}>
          <h3 className="title">About Me</h3>
          <p>
            I’m <span className="important">Prathmesh Sadake</span> a{" "}
            <span className="important">Full Stack Software Engineer</span>. As
            a Full Stack Engineer, I am able to create client-facing apps while
            also providing cutting-edge back-end support.
          </p>
          <p>
            I specialise in creating strong backends that handle all of the
            heavy lifting for your app or website. I'd like to continue building
            personalised products for people by combining my passion for
            learning with my software development skills.
          </p>
          <p>
            I mainly use <span className="important">MERN</span> stack. Because
            I am a quick learner, I can quickly adapt to whatever tools are
            required.
          </p>
          <p className="important">
            Here are a few technologies I've recently worked with:
          </p>
          <Row>
            <Col sm={5}>
              <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>React Native</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          {/* <Lottie options={defaultOptions} width={500} /> */}
          <Lottie loop animationData={animationData} play />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
