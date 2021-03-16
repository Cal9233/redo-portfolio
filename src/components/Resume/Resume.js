import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/New New resume.pdf";
import cv from "../../Assets/New CV.pdf";
import Progress from './Progress';


function Resume() {
  const languages = [
    {
      icon: "devicon-html5-plain",
      name: "HTML",
      level: '80'
    },
    {
      icon: "devicon-css3-plain",
      name: "CSS",
      level: '60'
    },
    {
      icon: "devicon-react-original-wordmark",
      name: "React",
      level: '90'
    },
    {
      icon: "devicon-nodejs-plain-wordmark",
      name: "Node.js",
      level: '70'
    },
    {
      icon: "devicon-flutter-plain",
      name: "Flutter.io",
      level: '50'
    },
    {
      icon: "devicon-javascript-plain",
      name: "Javascript",
      level: '80'
    },
    {
      icon: "devicon-express-original-wordmark",
      name: "Express.js",
      level: '70'
    },
    {
      icon: "devicon-typescript-plain",
      name: "Typescript",
      level: '30'
    },
    {
      icon: "devicon-wordpress-plain",
      name: "Wordpress",
      level: '70'
    }
  ]

  const tools = [
    {
      icon: "devicon-bootstrap-plain-wordmark",
      name: "Bootstrap",
      level: '80'
    },
    {
      icon: "devicon-mongodb-plain-wordmark",
      name: "MongoDB",
      level: '80'
    },
    {
      icon: "devicon-firebase-plain",
      name: "Firebase",
      level: '60'
    },
    {
      icon: "cib-heroku",
      name: "Heroku",
      level: '80'
    },
    {
      icon: "devicon-yarn-plain",
      name: "Yarn",
      level: '100'
    },
    {
      icon: "devicon-github-original",
      name: "Github",
      level: '90'
    },
    {
      icon: "cib-visual-studio-code",
      name: "VSC",
      level: '100'
    },
    {
      icon: "devicon-npm-original-wordmark",
      name: "NPM",
      level: '100'
    },
    {
      icon: "cib-postman",
      name: "Postman",
      level: '70'
    },
    {
      icon: "devicon-git-plain-wordmark",
      name: "Git",
      level: '90'
    }
  ]

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
        <Row className="row">
        <Col className="col-lg-6 resume-languages">
            <h5 className="reume-language__heading">
                Language and Framework
            </h5>
            <div className="resume-language__body mt-3">
                {
                    languages.map(language =>
                        <Progress value={language} />
                    )
                }
            </div>
        </Col>
        <Col className="col-lg-6 resume-languages">
            <h5 className="reume-language__heading">
                Tools and Softwares
            </h5>
            <div className="resume-language__body mt-3">
                {
                    tools.map(tool => <Progress value={tool} />)
                }
            </div>
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