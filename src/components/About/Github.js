import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row } from 'react-bootstrap';
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Github = () => {
  
  const colorTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px"}}>
        Days I've been <strong className="blue">Coding</strong>
      </h1>
      <GitHubCalendar
      username="Cal9233"
      blockSize={15}
      blockMargin={5}
      theme={colorTheme}
      fontSize={16}
      />
    </Row>
  )
}

export default Github;