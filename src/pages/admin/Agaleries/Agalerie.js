import {  Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';


const Agaleries = () => {

  return (
    <>
    <Nav variant="tabs" >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/galerie/liste">Liste categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/galerie/add">Ajouter categories</Nav.Link>
        </Nav.Item>
    </Nav>
    <Outlet />

    </>
  );
}




export default Agaleries
