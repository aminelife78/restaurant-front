import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { accountService } from "../../../_services/account_services";

function Aheader() {
  const logout = () => {
    accountService.logout();
  };
  return (
    <Navbar  bg="secondary" expand="lg" variant="dark">
      <Container   >
        <Navbar.Brand className="fw-bold fs-3 " as={NavLink} to="/admin/reservation">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
         

          <Form className="d-flex ms-auto my-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5 pe-5"
              aria-label="Search"
              
            />
          </Form>
          <Nav.Link  className=" text-center border border-2-white px-3  py-2 rounded-2 text-white fw-bold" onClick={logout} as={NavLink} to="/">
          Deconnexion
        </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Aheader;
