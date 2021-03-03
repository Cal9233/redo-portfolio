import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import avatar from "../../Assets/avatar.svg";

const Home2 = () => {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: '2.6em'}}>
                Allow me to <span className="blue"> Introduce </span> myself
              </h1>
              <p className="home-about-body">
                Programming has found a way for me to apply my creative side onto my logical side.
                <br />
                <br />I am fluent in classics like
              <i>
                <b className="blue"> Wordpress, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="blue">
                  Deep Learning and Natural Language Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="blue"> Modern Javascript Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="bluee"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Cal9233"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/calmalagon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul> 
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Home2
