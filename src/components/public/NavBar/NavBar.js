import React from 'react'
import {Navbar,Container, Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import logo from "../../../images/logo.svg"

const NavBar = () => {
  return (
    <Navbar className='shadow-sm p-3  sticky-top'   expand="lg" bg="dark"  variant="dark">
    <Container>
      <Navbar.Brand className='text-succes fw-bolder fs-3' as={NavLink} to="/home"><img className='w-75 h-75' src={logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fw-400 fs-6">
          <Nav.Link className={navInfo => navInfo.isActive? "nav-link bg-primary" : "nav-link " } as={NavLink}  to="/home">Accueil</Nav.Link>
          <Nav.Link as={NavLink} to="/carte">Carte</Nav.Link>
          <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          
        <Nav >
            <Nav.Link  as={NavLink} className="btn btn-outline-succes" to="/reservation">Reservation</Nav.Link>
        </Nav>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default NavBar
