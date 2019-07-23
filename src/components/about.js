import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <Container
        fluid
        id="aboutSection"
        className="d-flex flex-column align-items-center"
        style={{ backgroundImage: "url('./images/whitePattern.jpg')" }}
      >
        <div>
          <h1 id="aboutHeader" className="m-8">
            ABOUT
          </h1>
        </div>
        <div className="m-3">
          <Card id="rbcard" className="mb-3" style={{ maxWidth: '140vmin' }}>
            <div className="row no-gutters">
              <div className="col-lg-4">
                <img
                  src="images/roberto2.png"
                  alt=""
                  className="card-img"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body" id="aboutCard">
                  <h4 className="card-title">
                    <b>My Journey</b>
                  </h4>
                  <Card.Text className="text-justify">
                    I’ve always sought out challenges that are meaningful to me.
                    My professional path has shifted from analyzing consumer
                    behavior to building useful and accessible software for
                    consumers, but I've always had a laser focus on the end
                    user.
                  </Card.Text>
                  <Card.Text className="text-justify">
                    As a web developer, I enjoy using my attention to detail,
                    need to constantly learn, and love of making things, to
                    create the innovation that drives forward progress in the
                    world.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="downArrow">
          <Button variant="outline-light" href="#projects">
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
