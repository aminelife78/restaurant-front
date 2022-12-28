import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import accueil from "../../../images/accueil.jpg"

const About = () => {
  return (
    <Container>
      <Row>
        <Col >
          <img className='w-50 h-auto' src={accueil} alt="about" />
        </Col>
        <Col >
          <p>je suis une paragraphe </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
