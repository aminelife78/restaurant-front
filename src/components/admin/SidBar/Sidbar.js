import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./SidBar.scss";

const Sidbar = () => {
  return (
    <Nav className="flex-column vh-100 overflow-hidden p-0  ">
      <Nav.Link as={NavLink} className="link-style" to="/admin/reservation">
        Réservation
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/categories">
        Categories
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/carte">
        Carte
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/galerie">
        Galerie
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/horaires">
        Horaires
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/menu">
        Menu
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/formule">
        Formules
      </Nav.Link>
    </Nav>
  );
};

export default Sidbar;
