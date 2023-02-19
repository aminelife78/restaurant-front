import React, { useState, useEffect,useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { categorieService } from "../../../_services/categories.service";
import { categoryContext } from "../../../store/categoryContext";

const Update = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);

  const params = useParams();
  const index = params.id;
  const [data, setData] = useState();
  const [err, setErr] = useState("");

  // recuperer une categorie par id
  useEffect(
    function () {
      categorieService.getOneCategory(index).then((response) => {
        const resultTab = response.data.data[0];
        setData(resultTab);
      });
    },
    [index]
  );

 
// modifier une categorie 
  const updateName = (e) => {
    setData({ name: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    categorieService
      .updateCategory(index, data)
      .then((response) => {
        categoriesContext.getCategories()
        setData({ name: "" });
        setErr("");
        navigate("/admin/categories/liste");
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));
  };

  return (
    <Container className="w-50 h-50 mt-5">
      <Form onSubmit={onsubmit}>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={updateName}
            type="text"
            placeholder="Enter categorie"
            value={data && data.name}
          />
          <Form.Text className="text-muted ">{err? err : ""}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Modifier
        </Button>
      </Form>
    </Container>
  );
};

export default Update;
