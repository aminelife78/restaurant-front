import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { categoryContext } from "../../../store/categoryContext";
import { useNavigate } from "react-router-dom";
import { menuservice } from "../../../_services/menu.services";

const Madd = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);

  const [menu, setMenu] = useState({ name: "" });
  const [err, setErr] = useState("");
  const addMenu = (e) => {
    setMenu({ name: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    menuservice
      .addMenus(menu)
      .then((response) => {
        const menus = response.data.data;
        categoriesContext.setAllMenus(menus);
        setMenu({ name: "" });
        setErr("");
        navigate("/admin/menu/liste");
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));
  };

  return (
    <Container className="w-50 h-50 mt-5">
      <Form onSubmit={onsubmit}>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter menu"
            onChange={addMenu}
            value={menu.name}
          />
          <Form.Text className="text-muted text-secondary">{err}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default Madd;
