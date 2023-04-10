import React from 'react'
import {  Col, Container,  Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./homeComponent.scss"


const ImageReservation = () => {
  return (
    <Container fluid>
      <Row className='mb-5 '>
        <Col className='px-0 imgReserve d-flex align-items-center justify-content-center text-center flex-column '>
        
        </Col>
      </Row>
      <Row className='py-5 text-center'>
            <Col className='pb-5'>
            <h5 className='text-primary fw-bold pb-2 '>Reservez dès maintenant</h5>
            <NavLink
            className="btn btn-outline-succes  "
            to="/reservation"
          >
            Reservation
          </NavLink>
            </Col>
      </Row>
    </Container>
  )
}

export default ImageReservation
