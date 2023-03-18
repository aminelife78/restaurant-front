import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { galerieservice } from "../../../_services/galerie.services";
import { categoryContext } from "../../../store/categoryContext";
import { Container } from "react-bootstrap";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const Gadd = () => {
  const navigate = useNavigate();
  const galerieContext = useContext(categoryContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [errs, setErrs] = useState("");

  const setdata = (e) => {
    if (!e.target.value) {
      setErrs("");
    }
    setTitle(e.target.value);
  };

  const setimgfile = (e) => {
    setImage(e.target.files[0]);
  };

  const addPhotos = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);

    galerieservice
      .addGalerie(formData)
      .then((response) => {
        galerieContext.getGaleries();
        navigate("/admin/galerie/liste");
      })
      .catch((error) => {
        setErrs(error.response.data.errors[0].msg);
      });
  };

  return (
    <Container className=" mt-3">
      {errs ? <ErrorFormValidation errs={errs} /> : ""}

      <Form onSubmit={addPhotos}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" name="title" onChange={setdata} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Your Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={setimgfile}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Gadd;
