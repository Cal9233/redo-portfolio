import React from 'react';
import Particle from '../Particle';
import {Col, Container, Row} from 'react-bootstrap';
import homelogo from "../../Assets/home-svg.jpg";
import Home2 from "./Home2";
import Type from "./Type";
import "../../style.css";

const Home = () => {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className="home-content">
        <Row>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hello!
          </h1>

          <h1 className="heading-name">
            I'm
            <strong className="main-name"> Calvin Malagon</strong>
          </h1> 

          <div style={{ padding: 50, textAlign: "left"}}>
            <Type />
          </div>
        </Col>
        <Col md={5} style={{ paddingBottom: 20}}>
          <img src={homelogo} alt="home pic" className="img-fluid" />
        </Col>
      </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
}

export default Home
