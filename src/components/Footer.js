import React from 'react';
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
   <>
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copyright">
          <h3>Desgined and Developed by Calvin Malagon</h3>
        </Col>
        <Col md={4} className="footer-copyright">
          <h3>Copyright @ {year}</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/Cal9233"
              style={{color: "white"}}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/calmalagon/"
              style={{color: "white"}}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default Footer