import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import baseUrlProd from "../../../Api/baseUrl";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { accountService } from "../../../_services/account_services";

const Hupdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const index = params.id;
  const [jours, setJours] = useState();
  const [heure_matin, setHeure_matin] = useState();
  const [heure_soir, setHeure_soir] = useState();
  const [err, setErr] = useState("");

  // recuperer liste horaires
  useEffect(
    function () {
      axios.get(`${baseUrlProd}/api/v1/horaires/${index}`).then((response) => {
        const resultTab = response.data.data;
        setJours(resultTab[0].jours)
        setHeure_matin(resultTab[0].heure_matin);
        setHeure_soir(resultTab[0].heure_soir)
      });
    },
    [index]
  );

 

  const onsubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${baseUrlProd}/api/v1/horaires/${index}`, {jours:jours,heure_matin:heure_matin,heure_soir:heure_soir}, {
        headers: { "Content-Type": "application/json",Authorization: `Bearer ${accountService.getToken()}` },
      })
      .then((response) => {
        setHeure_matin("")
        setHeure_soir("")
        setJours("")
        setErr("");
        navigate("/admin/horaires/liste");
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));
  };

  return (
    <Container className="w-50 h-50 mt-5">
      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Jour"
            name="jours"
            onChange={(e)=>setJours(e.target.value)}
            value={jours}
            disabled
          />
          <Form.Text className="text-muted text-secondary">{err}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter horaires matin"
            name="heure_matin"
            onChange={(e)=>setHeure_matin(e.target.value)}
            value={heure_matin}
          />
          <Form.Text className="text-muted text-secondary">{err}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter horaires soir"
            name="heure_soir"
            onChange={(e)=>setHeure_soir(e.target.value)}
            value={heure_soir}
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

export default Hupdate;
