import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { categorieService } from "../../../_services/categories.service";
import { categoryContext } from "../../../store/categoryContext";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const Update = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);

  const params = useParams();
  const index = params.id;
  const [data, setData] = useState();
  const [errs, setErrs] = useState("");

  // recuperer une categorie par id
  useEffect(
    function () {
      categorieService
        .getOneCategory(index)
        .then((response) => {
          const resultTab = response.data.data[0];
          setData(resultTab);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [index]
  );

  // modifier une categorie
  const updateName = (e) => {
    if (!e.target.value) {
      setErrs("");
    }
    setData({ name: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    categorieService
      .updateCategory(index, data)
      .then((response) => {
        categoriesContext.getCategories();
        setData({ name: "" });
        setErrs("");
        navigate("/admin/categories/liste");
      })
      .catch((error) => setErrs(error.response.data.errors[0].msg));
  };

  return (
    <Container className="w-50 mt-5">
      {errs ? <ErrorFormValidation errs={errs} /> : ""}
      <Form onSubmit={onsubmit}>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={updateName}
            type="text"
            placeholder="Enter categorie"
            value={data && data.name}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Modifier
        </Button>
      </Form>
    </Container>
  );
};

export default Update;
