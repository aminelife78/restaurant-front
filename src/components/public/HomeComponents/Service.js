import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import anniverssaire from "../../../images/anniverssaire.png"
import mariage from "../../../images/mariage.png"
import affaire from "../../../images/affaire.png"


const Service = () => {
  return (
   <div className="bg-light py-5">
    <Container  className="text-center ">
      <Row className="mb-5">
        <h2 className="fw-bold fs-2 text-succes">Service de restauration</h2>
        <div className="separator m-auto mt-4"></div>
      </Row>
      <Row>
        <Col>
          <img width="40" height="40" src={anniverssaire} alt="anniverssaire" />
          <h4 className="my-4 fw-bold text-secondary">Fête danniversaire</h4>
          <p className="text-muted">
            Même le tout-puissant Pointing n'a aucun contrôle sur les textes
            aveugles, c'est un texte presque non orthographique.
          </p>
        </Col>
        <Col>
        <img width="40" height="40" src={affaire} alt="affaire" />
          <h4 className="my-4 fw-bold text-secondary">Entretiens daffaires</h4>
          <p className="text-muted">
            Même le tout-puissant Pointing n'a aucun contrôle sur les textes
            aveugles, c'est un texte presque non orthographique.
          </p>
        </Col>
        <Col>
        <img width="40" height="40" src={mariage} alt="mariage" />
          <h4 className="my-4 fw-bold text-secondary">Mariage</h4>
          <p className="text-muted">
            Même le tout-puissant Pointing n'a aucun contrôle sur les textes
            aveugles, c'est un texte presque non orthographique.
          </p>
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default Service;
