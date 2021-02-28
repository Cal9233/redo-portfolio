import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [nav, setNav] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
    expanded={expand}
    fixed="top"
    expand='md'
    className={nav}>
      <Container>
        <Navbar.Brand href="/">

        </Navbar.Brand>
        <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          setExpand(expand ? false : "expanded");
        }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand}>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand}>
                <i className="fas fa-user"></i> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpand}>
                <i className="fas fa-codepen"></i> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand}>
                <i className="fas fa-file-alt"></i> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default NavBar
