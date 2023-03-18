import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { categoryContext } from "../../../store/categoryContext";
import { useNavigate } from "react-router-dom";
import { menuservice } from "../../../_services/menu.services";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const Madd = () => {
  const navigate = useNavigate();
  const menuContext = useContext(categoryContext);
 


  const [menu, setMenu] = useState({ name: "" });
  const [errs, setErrs] = useState();
  const addMenu = (e) => {
    if (!e.target.value) {
      setErrs("");
    }
    setMenu({ name: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    menuservice
      .addMenus(menu)
      .then((response) => {
        menuContext.getMenu()
        setMenu({ name: "" });
        setErrs("");
        navigate("/admin/menu/liste");
      })
      .catch((error) =>setErrs(error.response.data.errors[0].msg));
      
  };

  return (
    <Container className="w-50 h-50 mt-5">
    {errs ? <ErrorFormValidation errs={errs} /> : ""}

      <Form onSubmit={onsubmit}>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter menu"
            onChange={addMenu}
            value={menu.name}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default Madd;
