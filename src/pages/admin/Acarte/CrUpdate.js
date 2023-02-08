import React, { useState, useContext,useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { categoryContext } from "../../../store/categoryContext";
import { platservice } from "../../../_services/plats.services";

const CrAdd = () => {
  const navigate = useNavigate();
  const platsContext = useContext(categoryContext);
  const params = useParams();
  const index = params.id;




  const [titre, setTitre] = useState("");
  const [descreption, setDescreption] = useState("");
  const [prix, setPrix] = useState("");
  const [categories_id, setCategories_id] = useState("");
  const [image, setImage] = useState("");

  const [err, setErr] = useState("");

    // recuperer un plat par id
    useEffect(
      function () {
        platservice.getOnePlat(index).then((response) => {
          const resultTab = response.data.data[0];
          setTitre(resultTab.titre)
          setDescreption(resultTab.descreption) 
          setPrix(resultTab.prix)
          setCategories_id(resultTab.categories_id)
          setImage(resultTab.image)
                  
        });
      },
      [index]
    );

  



  const onsubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("image", image);
    formData.append("titre", titre);
    formData.append("descreption", descreption);
    formData.append("prix", prix);
    formData.append("categories_id", categories_id);
    platservice
      .updatePlat(index, formData)
      .then((response) => {
        platsContext.getPlats()
        navigate("/admin/carte/liste");

        setErr("");
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));
  };

  return (
    <Container className="w-50 h-50 mt-5">
      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitre">
          <Form.Control
            type="text"
            placeholder="Enter Titre plat"
            name="titre"
            onChange={(e) => setTitre(e.target.value)}
            value={titre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescreption">
          <Form.Control
            type="text"
            placeholder="Enter descreption plat"
            name="descreption"
            onChange={(e) => setDescreption(e.target.value)}
            value={descreption}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrix">
          <Form.Control
            type="text"
            placeholder="Enter prix plat"
            name="prix"
            onChange={(e) => setPrix(e.target.value)}
            value={prix}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>

        <Form.Select
          value={categories_id}
          onChange={(e) => setCategories_id(e.target.value)}
          aria-label="Default select example"
        >
          <option>Choisi une categorie</option>
          {platsContext.allCategories &&
            platsContext.allCategories.map((category) => {
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
