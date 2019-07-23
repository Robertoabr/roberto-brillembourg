import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import guitar from '../images/guitar.jpg';
import grungeCart1 from '../images/GrungeCart1.png';

export default class GrungeCart extends Component {
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
              <Card.Img className="frontImage" variant="top" src={guitar} />
              <Card.Body className="rbflipbody">
                <Card.Title>GrungeCart</Card.Title>
                <Card.Text>
                  Fully functional e-commerce web app with persistent guest cart
                  that helps sell retro music to aspiring hipsters.
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
              <Card.Img className="backImage" variant="top" src={grungeCart1} />
              <Card.Body className="rbflipbody">
                <div className="d-flex flex-row justify-content-center">
                  <Card.Title className="mobile-title">GrungeCart</Card.Title>
                </div>
                <div id="grungeBackText">
                  <ul>
                    <li>
                      <b>Features:</b> Stripe Integration, Auth/O-Auth,
                      Persistent Guest Cart, Backend Data Validations, Full
                      Testing Suite
                    </li>
                    <li>
                      <b>Key Challenge:</b> Database and auth token setup to
                      allow cart history, checkout and order history for logged
                      + anonymous users
                    </li>
                    <li>
                      <b>Technologies:</b> React, Redux, Express, Sequelize,
                      PostgreSQL, Mocha Chai Enzyme
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
                      href="https://github.com/white-toucan/grace-shopper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href="https://grunge-cart.herokuapp.com/Products"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Site Link
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
