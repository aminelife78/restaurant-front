import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { useState ,useEffect} from "react";
import { accountService } from "../../../_services/account_services";

const NavBar = () => {
  const [first, setfirst] = useState(accountService.isLogged());

  const logout = () => {
    accountService.logout();
    setfirst(accountService.isLogged());
  };

useEffect(()=>{

})

  return (
    <Navbar
      className="shadow-sm text-center  sticky-top "
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        
        <Navbar.Brand
          className="text-succes fw-bolder "
          as={NavLink}
          to="/"
        >
          <img className="w-75 h-25" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  ">
          <Nav className="ms-auto fw-400 fs-6">
            <Nav.Link
              className={(navInfo) =>
                navInfo.isActive ? "nav-link bg-primary" : "nav-link "
              }
              as={NavLink}
              to="/home"
            >
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carte">
              Carte
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            {!first ? (
              <Nav.Link as={NavLink} to="/auth/login">
                {" "}
                Connexion
              </Nav.Link>
            ) : (
              <NavDropdown title="Deconnexion" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout} as={Link} to="/">
                  Deconnexion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/auth/profil">Profil</NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav>
              <Nav.Link
                as={NavLink}
                className="btn btn-outline-succes"
                to="/reservation"
              >
                Reservation
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
