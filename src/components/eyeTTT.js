import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import computerVision from '../images/computerVision.png';
import eyeTTTscreen2 from '../images/EyeTTTscreen2.png';

export default class EyeTTT extends Component {
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
              <Card.Img
                className="frontImage"
                variant="top"
                src={computerVision}
              />
              <Card.Body className="rbflipbody">
                <Card.Title>EyeTicTacToe</Card.Title>
                <Card.Text>
                  An experiment in computer vision for Javascript. A site
                  designed to recognize the board state of TicTacToe.
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
              <Card.Img
                className="backImage"
                variant="top"
                src={eyeTTTscreen2}
                style={{ borderBottom: '.05rem solid rgba(94, 94, 94, .2)' }}
              />
              <Card.Body className="rbflipbody">
                <div className="d-flex flex-row justify-content-center">
                  <Card.Title className="mobile-title">EyeTicTacToe</Card.Title>
                </div>
                <div className="card-text">
                  <ul>
                    <li>
                      <b>Features:</b> Object Detection, Front-end Image
                      Processing
                    </li>
                    <li>
                      <b>Key Challenge:</b> Learning OpenCV image processing
                      techniques in Python and porting them to javascript to
                      test OpenCV.js.
                    </li>
                    <li>
                      <b>Technologies:</b> OpenCV.js, Python, Javascript,
                      HTML5,CSS3,
                    </li>
                  </ul>
                </div>
                <Card.Footer
                  bsPrefix="custom-footer"
                  className="d-flex flex-row justify-content-between"
                >
                  <div className="d-flex flex-row">
                    <Button
                      variant="outline-secondary"
                      className="githubButton"
                      href="https://github.com/Robertoabr/eyeTicTacToe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
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
