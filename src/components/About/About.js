import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Github from "./Github"
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: "center", padding: '10px'}}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
              Know Who <strong className="blue"> I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px"}} className="about-img">
           IMPORT IMAGE
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
         IMPORT TECHSTACK
        </Row>
        <h1 className="project-heading">
          <strong className="blue">Tools</strong>I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
          IMPORT TECHSTACK
        </Row>
        <Github />
      </Container>
    </Container>
  )
}

export default About