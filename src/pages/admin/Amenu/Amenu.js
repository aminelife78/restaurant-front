import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

const Amenu = () => {
  return (
    <>
    <Nav variant="tabs" >
    <Nav.Item>
      <Nav.Link as={NavLink} to="/admin/menu/liste">Liste menus</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/admin/menu/add">Ajouter menu</Nav.Link>
    </Nav.Item>
    
</Nav>
<Outlet/>
    
    
    </>
  )
}

export default Amenu