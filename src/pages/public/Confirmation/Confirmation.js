import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <Container className="d-flex justify-content-center py-5 align-items-center  vh-100 ">
      <Row>
        <Col>
          <h2 className="text-succes text-center fw-bold">
            Réservation confirmer
          </h2>
          <p className="tex-center">
            Un messsage de confirmation est envoyé à votre adresse email
          </p>
          <Link className="btn btn-primary me-5" to="/">
            Vers la page d&apos;accueil
          </Link>
          <Link className="btn btn-succes text-white" to="/reservation">
            Vers la page de réservation
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmation;
