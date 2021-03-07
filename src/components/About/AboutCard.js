import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="red"> Calvin Malagon</span> 
            from <span className="blue">Florida, USA</span>
            <br /> I am a Junior FullStack Developer who's on the road to becoming one of the most memorable programmer <strong className="blue">EVER</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do are
          </p>

          <ul>
            <li className="about-activity">
              <i className="fas fa-angle-right"></i> Working Out
            </li>
            <li className="about-activity">
              <i className="fas fa-angle-right"></i> Playing Guitar
            </li>
            <li className="about-activity">
              <i className="fas fa-angle-right"></i> Dancing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#c08888"}}>
            "If something's important enough, you should try. Even if - the probable outcome is failure"{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;