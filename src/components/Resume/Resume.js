import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/New New resume.pdf";
import cv from "../../Assets/New CV.pdf";

function Resume() {
 

    return (
      <Container fluid className="resume-section">
      <Container>
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
              title="Web Developer [PalmBeach Hack-a-thon 2020]"
              content={[
                "Worked on creating the frontend and backend of a website using Bootstrap, Javascript, React, Node JS, as well as MongoDB.",
              ]}
            />
            <Resumecontent
              title="Project Manager [PalmBeach Hack-a-thon 2020]"
              content={[
                "Managed a team of 6 relaying their roles in the competition as well as scouting information from our competitors",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelors of Science Interdisciplinary Studies [Orlando, Florida, UCF] "
              date="2017 - 2020"
              content={["GPA: 3.4"]}
            />
            <Resumecontent
              title="Fullstack Web Developer"
              date="July 2020 - September 2020"
              content={["Certification"]}
            />
            <h3 className="resume-title">Certifications and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Certified CPR",
                "Competed in a code-hackathon landing in top 10 out of 100 competitors",
                "Participant in Hack-A-Bit 2020",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary mr-4" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
          <Button variant="outline-primary ml-4" href={cv} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
    )
}

export default Resume;