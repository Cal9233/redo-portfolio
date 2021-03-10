import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import virus from "../../Assets/Projects/virus.jpg";
import timer from "../../Assets/Projects/timer.png";
import h2h from "../../Assets/Projects/h2h.png";
import gen from "../../Assets/Projects/gen.png";
import GotTech from "../../Assets/Projects/GotTech.jpg";
import voice from "../../Assets/Projects/voice.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virus}
              title="COVID-19"
              description="Covid-19 is a live global case that fetches information using API displaying Confirmed cases of Uninfected, infected, and Deaths. The information is displayed in a bar graph & line graph. You can also select other countries aside from global cases."
              link="https://github.com/Cal9233/COVID-19"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={h2h}
              title="heart2heart"
              description="Heart 2 Heart is a social platform for bone marrow donors and those who have received those donations to share their stories. Our aim is to demystify the donation process and share the impact that donations have on those who need them.
              This app was coded for the Palm Beach Tech Hackathon 2020 to benefit Gift of Life, specifically to fill the need to encourage donations of bone marrow."
              link="https://github.com/Cal9233/heart2heart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timer}
              title="WynIt Productivity Timer"
              description="Welcome to WynIt! A timer with the intention of increasing producitivty towards completing tasks. The App functions as a Timer and a Scheduler to help users stay on task and accomplish goals."
              link="https://github.com/Cal9233/Timer-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GotTech}
              title="GotTech"
              description='This is a Job Search engine focusing on SoftWare Development. A search term, such as "ruby" or "java". This parameter is aliased to search. location — A city name, zip code, or other location search term. lat — A specific latitude. If used, you must also send long and must not send location. long — A specific longitude. If used, you must also send lat and must not send location. full_time — If you want to limit results to full time positions set this parameter to "true".'
              link="https://github.com/Cal9233/GotTech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gen}
              title="GenThrust"
              description="Website created for client using wordpress with plugin connected for database"
              link="https://genthrust.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              title="Discord Voice Recognition Music Bot"
              description="Music Discord Bot program created using Node.js, using Wit api it can convert speech to text commands allows discord music bot to play music via voice."
              link="https://github.com/Cal9233/discord-voice-recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
