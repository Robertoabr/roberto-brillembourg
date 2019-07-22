import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class FarFromHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
    this.onClickFlipCard = this.onClickFlipCard.bind(this)
  }

  onClickFlipCard(id) {
    let newState = {}
    newState[id] = !this.state[id]
    this.setState(newState)
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
                src="images/earth2.png"
              />
              <Card.Body className="rbflipbody">
                <Card.Title>Far From Home</Card.Title>
                <Card.Text>
                  Hand-drawn space platformer game with realistic gravity
                  effects for windows. Global Game Jam 2019 submission.
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
                src="images/farFromHomeAnim.gif"
              />
              <Card.Body className="rbflipbody">
                <div className="d-flex flex-row justify-content-center">
                  <Card.Title className="mobile-title">
                    Far From Home
                  </Card.Title>
                </div>
                <div className="card-text">
                  <ul>
                    <li>
                      <b>Features:</b> Custom physics, hand-drawn art, original
                      soundtrack, particle effects
                    </li>
                    <li>
                      <b>Key Challenge:</b> Creating realistic but playable
                      planetary physics. Creating a complete product in a little
                      over 48 hours.
                    </li>
                    <li>
                      <b>Technologies:</b> C#, Unity, Autodesk Maya, Adobe
                      Illustrator
                    </li>
                  </ul>
                </div>
                <Card.Footer
                  className="d-flex flex-row justify-content-between"
                  style={{backgroundColor: 'none'}}
                  bsPrefix="custom-footer"
                >
                  <div className="d-flex flex-row">
                    <Button
                      variant="outline-secondary"
                      className="githubButton"
                      href="https://ggj.s3.amazonaws.com/games/2019/01/247774/src/wHwzU/FFH%20FF.zip"
                      rel="noopener noreferrer"
                    >
                      PC Download
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href="https://globalgamejam.org/2019/games/far-home-4
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GGJ Site
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
    )
  }
}
