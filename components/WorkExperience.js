import React from "react";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";

const experiences = [
  {
    company: "Arca Innovation",
    designation: "Web Software Developer Intern",
    startDate: "March 2021",
    endDate: "April 2021",
    tasks: [
      "Worked on the UI/UX design enhancing user journey and creative elements.",
      "Assisted with writing content for the descriptive elements of the website.",
      "Improved existing UI of Web Application.",
      "Implemented Form validation using Javascript and jQuery.",
    ],
  },
  {
    company: "The Tann Mann Gaadi",
    designation: "ReactJS Developement Intern",
    startDate: "August 2021",
    endDate: "September 2021",
    tasks: [
      "Developed new user-facing features using React.js.",
      "Created reusable components and front-end libraries for future use.",
      "Translated UI/UX design wireframes into high-quality code that will produce visual elements of the application.",
    ],
  },
  {
    company: "Techsnap",
    designation: "Frontend Development Intern",
    startDate: "January 2022",
    endDate: "January 2022",
    tasks: [
      "Translated UI/UX design wireframes into high-quality code that will produce visual elements of the application.",
      "Improved existing UI of Techsnap's Website.",
    ],
  },
  {
    company: "Docsup Private Limited",
    designation: "MERN Stack Development Intern",
    startDate: "January 2022",
    endDate: "March 2022",
    tasks: [],
  },
  {
    company: "FINT",
    designation: "Full Stack Development Intern",
    startDate: "January 2022",
    endDate: "March 2022",
    tasks: [],
  },
];
experiences.reverse();
const WorkExperience = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1100px" }}>
      <h3 className="title">Work Experience</h3>

      {experiences.map((experience) => {
        return (
          <Row
            className="gx-3 my-3 p-2"
            style={{ border: "1px dashed #ccd6f6" }}
          >
            <Col sm={4} style={{ borderRight: "1px solid #64ffda" }}>
              <h6 style={{ color: "#64ffda" }}>{experience.designation}</h6>
              <h5 style={{ fontSize: "15px", color: "#ccd6f6" }}>
                {experience.company}
              </h5>
              <p style={{ fontSize: "14px", color: "#a8b2d1" }}>
                {experience.startDate} - {experience.endDate}
              </p>
            </Col>
            <Col sm={8}>
              <ul>
                {experience.tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default WorkExperience;
