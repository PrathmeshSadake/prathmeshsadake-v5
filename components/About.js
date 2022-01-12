import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1100px" }}>
      <Row className="gx-4">
        <Col sm={7}>
          <h3 className="title">About Me</h3>
          <p>
            I’m a <span className="important">Full Stack Developer</span>. Being
            a full-stack allows me to develop client-facing apps and develop
            them with cutting-edge back-end support.
          </p>
          <p>
            I specialize in building robust backends that do all the heavy
            lifting for your app or website. I love designing systems that are
            light yet powerful, distributed yet synchronized and beautiful yet
            effective. I’d love to combine my passion for learning with my
            software development skills to continue building personalized
            products for people.
          </p>
          <p>
            I mainly use <span className="important">MERN</span> stack. As i am
            a fast learner i can adapt to whatever tools requried
          </p>
          <p className="important">
            Here are a few technologies I’ve been working with recently:
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
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  );
};

export default About;
