import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { accountService } from "../../../_services/account_services";

function Aheader() {
  const logout = () => {
    accountService.logout();
  };
  return (
    <Navbar  bg="secondary" expand="lg" variant="dark">
      <Container  fluid  >
        <Navbar.Brand className="fw-bold fs-3 " as={NavLink} to="/admin/dashboard">
        Tableau de bord
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="d-flex justify-content-end"  id="navbarScroll">
         

     
          <Nav.Link  className=" text-center border border-2-white px-3  py-2 rounded-2 text-white fw-bold" onClick={logout} as={NavLink} to="/">
          Deconnexion
        </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Aheader;
