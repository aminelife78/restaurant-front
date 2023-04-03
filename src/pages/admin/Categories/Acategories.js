import {  Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';


const Acategories = () => {

  return (
    <>
    <Nav >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/categories/liste">Liste categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/categories/add">Ajouter categories</Nav.Link>
        </Nav.Item>
    </Nav>
    <Outlet />

    </>
  );
}




export default Acategories
