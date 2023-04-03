import {  Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

// component pour naviguer sur la table carte

const Atables = () => {
  return (
    <>
    <Nav >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/tables/liste">Liste table</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/tables/add">Ajouter table</Nav.Link>
        </Nav.Item>
        
    </Nav>
    <Outlet />

    </>
  );
}

export default Atables
