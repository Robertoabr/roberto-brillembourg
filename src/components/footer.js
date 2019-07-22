import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section id="contact">
      <div style={{ height: '15vh' }}>
        <div id="svg-container" style={{ width: '100%', height: '100%' }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ backgroundColor: 'rgba(200, 200, 200, 1)' }}
          >
            <polygon points="0,0 50,100 100,0" fill="rgba(36, 36, 36, 1)" />
          </svg>
        </div>
      </div>
      <div className="mt-5">
        <Container className="d-flex flex-column align-items-center">
          <div>
            <h1 id="contactHeader">CONTACT</h1>
          </div>
          <Form
            id="contactform"
            action="//formspree.io/58wfb@boun.cr"
            method="POST"
          >
            <Form.Group controlId="formName">
              <Form.Control
                required
                type="text"
                placeholder="Your Name"
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                required
                type="email"
                placeholder="Your Email Address"
                name="_replyto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                as="textarea"
                rows="5"
                placeholder="Your Message"
                name="message"
                id="message"
              />
            </Form.Group>
            <div className="d-flex flex-row justify-content-center">
              <Button
                variant="outline-primary"
                type="submit"
                size="lg"
                style={{ borderWidth: '0.15rem' }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <div id="toTopArrow" className="d-flex flex-row justify-content-center">
        <Button variant="outline-light" href="#top">
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </Button>
      </div>
      <div id="footerLinks" className="d-flex justify-content-center">
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/robertobrillembourg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com/Robertoabr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
