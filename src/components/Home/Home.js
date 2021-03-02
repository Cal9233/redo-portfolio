import React from 'react';
import Particle from '../Particle';
import {Col, Container, Row} from 'react-bootstrap';
import "../../style.css";

const Home = () => {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
      </Container>
    </section>
  )
}

export default Home
