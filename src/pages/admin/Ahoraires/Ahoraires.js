import {  Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const Ahoraires = () => {
  return (
    <>
    <Nav variant="tabs" >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/horaires/liste">Liste horaire</Nav.Link>
        </Nav.Item>
       
    </Nav>
    <Outlet />

    </>
  )
}

export default Ahoraires
