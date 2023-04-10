import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { categoryContext } from "../../../store/categoryContext";
import { useNavigate } from "react-router-dom";
import { categorieService } from "../../../_services/categories.service";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const Add = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);

  const [categorie, setcategorie] = useState({ name: "" });
  const [errs, setErrs] = useState();
  const addcategorie = (e) => {
    if (!e.target.value) {
      setErrs("");
    }
    setcategorie({ name: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    categorieService
      .addCategory(categorie)
      .then((response) => {
        categoriesContext.getCategories();
        setcategorie({ name: "" });
        setErrs("");
        navigate("/admin/categories/liste");
      })
      .catch((error) => {
        setErrs(error.response.data.errors[0].msg);
      });
  };

  return (
    <Container className="w-50 mt-5">
      {errs ? <ErrorFormValidation errs={errs} /> : ""}
      <Form onSubmit={onsubmit}>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter categorie"
            onChange={addcategorie}
            value={categorie.name}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default Add;
