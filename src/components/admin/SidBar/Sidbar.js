import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./SidBar.scss";
import {
  BiRestaurant,
  BiCategory,
  BiMenu,
  BiMenuAltRight,
  BiPhotoAlbum,
  BiFoodMenu,
  BiCalendar,
  BiHourglass,
} from "react-icons/bi";
const Sidbar = () => {
  return (
    <Nav className=" flex-column  sidbar-style   p-0 ">
      <Nav.Link as={NavLink} className="link-style " to="/admin/tables">
        <BiRestaurant className="me-2 fs-5" />
        Table/Couverts
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style " to="/admin/reservation">
        <BiCalendar className="me-2 fs-5" />
        Réservation
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/categories">
        <BiCategory className="me-2 fs-5" /> Categories
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/carte">
        <BiFoodMenu className="me-2 fs-5" />
        Carte
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/galerie">
        <BiPhotoAlbum className="me-2 fs-5" />
        Galerie
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/horaires">
        <BiHourglass className="me-2 fs-5" />
        Horaires
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/menu">
        <BiMenu className="me-2 fs-5" /> Menu
      </Nav.Link>
      <Nav.Link as={NavLink} className="link-style" to="/admin/formule">
        <BiMenuAltRight className="me-2 fs-5" /> Formules
      </Nav.Link>
    </Nav>
  );
};

export default Sidbar;
