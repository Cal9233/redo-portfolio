import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue"> Works</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            IMPORT PROJECT CARD
          </Col>
          <Col md={4} className="project-card">
            IMPORT PROJECT CARD
          </Col>
          <Col md={4} className="project-card">
            IMPORT PROJECT CARD
          </Col>
          <Col md={4} className="project-card">
            IMPORT PROJECT CARD
          </Col>
          <Col md={4} className="project-card">
            IMPORT PROJECT CARD
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Project
