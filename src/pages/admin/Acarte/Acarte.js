import {  Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

// component pour naviguer sur la table carte

const Acarte = () => {
  return (
    <>
    <Nav variant="tabs" >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/carte/liste">Liste carte</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/carte/add">Ajouter plats</Nav.Link>
        </Nav.Item>
        
    </Nav>
    <Outlet />

    </>
  );
}




export default Acarte
