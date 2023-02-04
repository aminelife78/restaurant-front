import React, { useState, useContext,useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { categoryContext } from "../../../store/categoryContext";
import { useNavigate,useParams } from "react-router-dom";
import { menuservice } from "../../../_services/menu.services";

const Mupdate = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);
  const params = useParams();
  const index = params.id;
  
  const [menu, setMenu] = useState({ name: "" });
  const [err, setErr] = useState("");

  // recuperer un menu par id
  useEffect(
    function () {
      menuservice.getOneMenu(index).then((response) => {
        const resultTab = response.data.data[0];
        setMenu(resultTab);
      });
    },
    [index]
  );

  


// modifier un menu 

  const updateMenu = (e) => {
    setMenu({ name: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    menuservice
      .updateMenu(index,menu)
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
            onChange={updateMenu}
            value={menu.name}
          />
          <Form.Text className="text-muted text-secondary">{err}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Modifier
        </Button>
      </Form>
    </Container>
  );
};

export default Mupdate;
