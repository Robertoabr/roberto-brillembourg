import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ARtajmahal from '../images/ARtajmahal.jpg';

export default class ExplorAR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
    this.onClickFlipCard = this.onClickFlipCard.bind(this);
  }

  onClickFlipCard(id) {
    let newState = {};
    newState[id] = !this.state[id];
    this.setState(newState);
    var frame = document.getElementsByClassName('explorARvideo')[0];
    frame.src = '';
    frame.src = 'https://www.youtube.com/embed/iLDaRyiGrh8?start=98';
  }

  render() {
    return (
      <div className="card-container">
        <div
          className={`card-flip ${
            this.state.flipped ? 'card-flip-manual' : ''
          }`}
        >
          <div className="front">
            <Card className="projCard">
              <Card.Img className="frontImage" variant="top" src={ARtajmahal} />
              <Card.Body className="rbflipbody">
                <Card.Title>ExplorAR</Card.Title>
                <Card.Text>
                  Mobile prototype app which helps tourists discover new places,
                  and quickly find the best sightseeing in real-time.
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  onClick={() => this.onClickFlipCard('flipped')}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="back">
            <Card className="projCard">
              <div
                className="embed-responsive embed-responsive-16by9 backVideo"
                variant="top"
              >
                <iframe
                  className="embed-responsive-item explorARvideo"
                  src="https://www.youtube.com/embed/iLDaRyiGrh8?start=98"
                  allowFullScreen
                  title="explorARiframe"
                />
              </div>
              <Card.Body className="rbflipbody explorARbackbody">
                <div className="d-flex flex-row justify-content-center">
                  <Card.Title className="mobile-title">ExplorAR</Card.Title>
                </div>
                <div className="card-text explorARbackText">
                  <ul id="explorARul">
                    <li>
                      <b>Features:</b> Location-based Augmented Reality, React
                      Native Mobile UI, NYSE/Yelp API integrations
                    </li>
                    <li>
                      <b>Key Challenge:</b> Converting GPS coordinates into
                      local AR space and integrating React Native with Viro AR
                    </li>
                    <li>
                      <b>Technologies:</b> React Native, Redux, ViroReact,
                      ARKit/Core, Express, Yelp API, Sequelize, PostgreSQL
                    </li>
                  </ul>
                </div>
                <Card.Footer
                  className="d-flex flex-row justify-content-between"
                  bsPrefix="custom-footer"
                >
                  <div className="d-flex flex-row">
                    <Button
                      variant="outline-secondary"
                      className="githubButton"
                      href="https://github.com/explorAR-group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href="https://www.youtube.com/embed/iLDaRyiGrh8?start=98"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="demoButton"
                    >
                      Video Demo
                    </Button>
                  </div>
                  <Button
                    className="close mb-1 ml-3"
                    aria-label="Close"
                    variant="outline-secondary"
                    onClick={() => this.onClickFlipCard('flipped')}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
