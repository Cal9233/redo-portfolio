import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import image from "../../Assets/image.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="red">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={image} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="red">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-flutter-plain" />
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-javascript-plain" />
          <Techstack iconName="devicon-nodejs-plain-wordmark" />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-typescript-plain" />
          <Techstack iconName="devicon-wordpress-plain" />
        </Row>
        <h1 className="project-heading">
          <strong className="red">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-firebase-plain" />
          <Techstack iconName="devicon-github-original" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-npm-original-wordmark" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-yarn-plain" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="cib-heroku" />
          <Techstack iconName="devicon-git-plain-wordmark" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;