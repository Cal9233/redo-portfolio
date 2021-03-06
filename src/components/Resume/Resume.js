import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from '../../Assets/New New resume.pdf';

const Resume = () => {
  return (
    <Container fluid className="resume-section">
    <Particle />
    <Container>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank">
          <i className="fas fa-download">&nbsp;</i>Download Resume
        </Button>
      </Row>
      <Row className="resume">
        <Col md={6} className="resume-left">
          <h3 className="resume-title">Experience</h3>
          <Resumecontent
            title="Freelancer at Upwork"
            date="October 2020 - December 2020"
            content={[
              "Created a live website using wordpress connected to a backend database",
              " Efficient communication and negotiations with client",
            ]}
          />
          <Resumecontent
            title="Coding Tutor at Upwork"
            date="January 2021 - February 2021"
            content={[
              "Approached concepts from different perspectives in order to teach",
              " Experienced in completing tasks undertime certain time constraints from clients",
            ]}
          />
          <Resumecontent
            title="Intern for TREC, LLC"
            date="January 2021 - Up to Date"
            content={[
              "Experienced in working with others as well as helping unexperienced students work amongst each other",
              " Time dates assigned in completing tasks",
            ]}
          />
          <Resumecontent
            title="Intern for TMCell"
            date="February 2021 - Up to Date"
            content={[
              "Building out an intranet and connecting to local databases to Wordpress",
              " Experienced in completing tasks undertime certain time constraints from clients",
            ]}
          />
          <h3 className="resume-title">Extracurricular Activities</h3>
          <Resumecontent
            title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
            content={[
              "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
            ]}
          />
          <Resumecontent
            title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
            content={[
              "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
            ]}
          />
        </Col>
        <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
          <Resumecontent
            title="Bachelors of Science Interdisciplinary Studies [Orlando, Florida, UCF] "
            date="2017 - 2020"
            content="GPA: 3.4"
          />
          <Resumecontent
            title="Fullstack Web Developer"
            date="July 2020 - September 2020"
            content="Certification"
          />
          <h3 className="resume-title">Certifications and Achivements</h3>
          <Resumecontent
            title=""
            content={[
              "Certified CPR",
              "Competed in a code-hackathon landing in top 10 out of 100 competitors",
              "Participant in Hack-A-Bit 2019",
            ]}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank">
          <i className="fas fa-download">&nbsp;</i>Download Resume
        </Button>
      </Row>
    </Container>
  </Container>
  )
}

export default Resume
