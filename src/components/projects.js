import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GrungeCart from './grungeCart';
import ExplorAR from './explorAR';
import EyeTTT from './eyeTTT';
import FarFromHome from './farFromHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="container-fluid d-flex flex-column align-items-center m-1 mb-5">
          <div id="projectsHead">
            <h1 className=" m-8">PROJECTS</h1>
          </div>
          <Container>
            <Row>
              <Col lg={6} className="mb-4">
                <ExplorAR />
              </Col>
              <Col lg={6} className="mb-4">
                <GrungeCart />
              </Col>
              <Col lg={6} className="mb-4">
                <EyeTTT />
              </Col>
              <Col lg={6} className="mb-4">
                <FarFromHome />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="downArrow2">
          <Button variant="outline-light" href="#contact">
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        </div>
      </section>
    );
  }
}

export default Projects;
