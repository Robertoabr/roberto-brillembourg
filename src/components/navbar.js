import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends Component {
  state = {}

  render() {
    return (
      <Navbar id="rbnav" sticky="top" bg="dark" variant="dark" expand="sm">
        <Navbar.Brand id="RB" href="#top">
          RB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
