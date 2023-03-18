import React, { useState,useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { platservice } from "../../../_services/plats.services";
import { categoryContext } from "../../../store/categoryContext";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const CrAdd = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext)
  


  const [titre, setTitre] = useState("");
  const [descreption, setDescreption] = useState("");
  const [prix, setPrix] = useState("");
  const [categories_id, setCategories_id] = useState("");
  const [image, setImage] = useState("");

  const [err, setErr] = useState("");

 

  const onsubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("image", image);
    formData.append("titre", titre);
    formData.append("descreption", descreption);
    formData.append("prix", prix);
    formData.append("categories_id", categories_id);

    platservice
      .addPlat(formData)
      .then((response) => {
        categoriesContext.getPlats()
        setErr("");
        navigate("/admin/carte/liste");
        
      })
      .catch((error) => {
        
          setErr(error.response.data.errors[0].msg)
        
        
      });
  };


  return (
    <Container className="w-50 h-50 mt-5">
    {err ? <ErrorFormValidation errs={err} /> : ""}

      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitre">
          <Form.Control
            type="text"
            placeholder="Enter Titre plat"
            name="titre"
            onChange={(e) => setTitre(e.target.value)}
            value={titre}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescreption">
          <Form.Control
            type="text"
            placeholder="Enter descreption plat"
            name="descreption"
            onChange={(e) => setDescreption(e.target.value)}
            value={descreption}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrix">
          <Form.Control
            type="text"
            placeholder="Enter prix plat"
            name="prix"
            onChange={(e) => setPrix(e.target.value)}
            value={prix}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </Form.Group>

        <Form.Select
          value={categories_id}
          onChange={(e) => setCategories_id(e.target.value)}
          aria-label="Default select example"
          required
        >
          <option>Choisi une categorie</option>
          {categoriesContext.allCategories &&
            categoriesContext.allCategories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
        </Form.Select>

        <Button variant="primary" type="submit" className="my-4">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default CrAdd;


