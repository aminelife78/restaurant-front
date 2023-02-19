import Button from "react-bootstrap/Button";
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
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/admin">
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link className="text-white" onClick={logout} as={NavLink} to="/">
            Deconnexion
          </Nav.Link>

          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Aheader;
