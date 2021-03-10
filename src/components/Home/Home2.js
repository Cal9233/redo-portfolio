import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Contact from "../Contact/Contact";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             I am a junior-level <span className="red"> Fullstack Engineer </span> looking to excel and become an asset to a 
            company that is fast-paced giving opportunity for growth.
            </h1>
            <p className="home-about-body">
            A creative developer ​
            dedicated to building and optimizing the performance of user-centric, development 
            operations, high-impact websites for nationwide, and global companies.
              <br />
              <br />Leverage technical,
              <i>
                <b className="red"> analytical and problem-solving skills </b>
              </i>
              <br />
              <br />
              to create dynamic apps and  &nbsp;
              <i>
                <b className="red">
                platforms fueling competitive 
             advantage and revenue growth.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      <Contact />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>These are my socials</h1>
            <p>
              Feel free to <span className="red">connect </span>with me
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
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/joel8_10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;