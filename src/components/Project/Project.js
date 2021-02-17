import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import Technology from "../Technology/Technology";
import "./project.scss";

export default function Project({ project }) {
  return (
    <Container
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      <Row className="project">
        <Col md={12} lg={6} className="project-img">
          <Image src={project.imageUrl} width="100%" />
        </Col>
        <Col md={12} lg={6} className="project-desc">
          <div className="line above"></div>
          <h4 className="project-title">{project.title} | {project.subtitle}</h4>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((technology) => (
              <Technology name={technology} />
            ))}
          </div>
          <a
            className="btn-project"
            href={project.githubUrl}
            target="_blank"
            rel="noopener norefferer"
          >
            View project
          </a>

          <div className="line below"></div>
        </Col>
      </Row>
    </Container>
  );
}
