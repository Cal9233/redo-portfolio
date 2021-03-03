import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Github from "./Github"
import Techstack from "./Techstack";
import "../../style.css";
import about from "../../Assets/about.png";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: "center", padding: '10px'}}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
              Get To Know <strong className="blue"> ME</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px"}} className="about-img">
           <img src={about} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
        <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="cib-pytorch" />
          <Techstack iconName="cib-tensorflow" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
        <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-anaconda" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-zeit" />
          <Techstack iconName="cib-heroku" />
        </Row>
        <Github />
      </Container>
    </Container>
  )
}

export default About
