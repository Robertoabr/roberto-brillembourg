import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const technologies = () => {
  return (
    <div>
      <h3>Current Favorite Tech Stack</h3>
      <Container id="architecture" className="border p-2">
        <Row>
          <Col
            className="d-flex flex-column align-items-center"
            sm={12}
            md={4}
            xl={2}
          >
            <h5>
              <u>State</u>
            </h5>
            <Image src="images/redux.png" rounded fluid />
          </Col>
          <Col
            className="d-flex flex-column align-items-center"
            sm={12}
            md={4}
            xl={2}
          >
            <h5>
              <u>Front End UI</u>
            </h5>
            <Image src="images/react2.png" rounded fluid />
          </Col>
          <Col
            className="d-flex flex-column align-items-center"
            sm={12}
            md={4}
            xl={2}
          >
            <h5>
              <u>Caching</u>
            </h5>
            <Image src="images/redis2.png" rounded fluid />
          </Col>
          <Col
            className="d-flex flex-column align-items-center"
            sm={12}
            md={4}
            xl={2}
          >
            <h5>
              <u>Server/Routing</u>
            </h5>
            <Image src="images/node-express.png" rounded fluid />
          </Col>
          <Col
            className="d-flex flex-column align-items-center"
            sm={12}
            md={4}
            xl={2}
          >
            <h5>
              <u>ORM</u>
            </h5>
            <Image src="images/sequelize.png" rounded fluid />
          </Col>
          <Col
            className="d-flex flex-column align-items-center"
            sm={12}
            md={4}
            xl={2}
          >
            <h5>
              <u>Storage</u>
            </h5>
            <Image src="images/postgresql.jpeg" rounded fluid />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default technologies
