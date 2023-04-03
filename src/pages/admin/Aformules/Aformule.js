import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

const Aformule = () => {
  return (
    <>
    <Nav  >
    <Nav.Item>
      <Nav.Link as={NavLink} to="/admin/formule/liste">Liste menus</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/admin/formule/add">Ajouter menu</Nav.Link>
    </Nav.Item>
    
</Nav>
<Outlet/>
    
    
    </>
  )
}

export default Aformule