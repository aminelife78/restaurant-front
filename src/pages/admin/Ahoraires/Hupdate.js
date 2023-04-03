import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";
import { heureservice } from "../../../_services/heure.services";

const Hupdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const index = params.id;
  const [jours, setJours] = useState();
  const [heure_matin, setHeure_matin] = useState();
  const [heure_soir, setHeure_soir] = useState();
  const [errs, setErrs] = useState("");

  // recuperer liste horaires
  useEffect(
    function () {
      heureservice.getOneheure(index).then((response) => {
        const resultTab = response.data.data;
        setJours(resultTab[0].jours);
        setHeure_matin(resultTab[0].heure_matin);
        setHeure_soir(resultTab[0].heure_soir);
      });
    },
    [index]
  );

  const onsubmit = (e) => {
    e.preventDefault();

    heureservice
      .updateheure(index, {
        jours: jours,
        heure_matin: heure_matin,
        heure_soir: heure_soir,
      })
      .then((response) => {
        setHeure_matin("");
        setHeure_soir("");
        setJours("");
        setErrs("");
        navigate("/admin/horaires/liste");
      })
      .catch((error) => setErrs(error.response.data.errors[0].msg));
  };

  return (
    <Container className="w-50 mt-5">
    {errs ? <ErrorFormValidation errs={errs} /> : ""}

      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Jour"
            name="jours"
            onChange={(e) => setJours(e.target.value)}
            value={jours}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter horaires matin"
            name="heure_matin"
            onChange={(e) => setHeure_matin(e.target.value)}
            value={heure_matin}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter horaires soir"
            name="heure_soir"
            onChange={(e) => setHeure_soir(e.target.value)}
            value={heure_soir}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default Hupdate;
