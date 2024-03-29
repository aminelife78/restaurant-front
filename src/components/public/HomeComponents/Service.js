import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import anniverssaire from "../../../images/anniverssaire.png";
import mariage from "../../../images/mariage.png";
import affaire from "../../../images/affaire.png";

const Service = () => {
  return (
    <Container className="text-center py-5 ">
      <Row className="mb-5">
        <h5 className="fw-bold fs-1 text-succes">Service de restauration</h5>
        <div className="separator m-auto mt-4"></div>
      </Row>
      <Row>
        <Col md={4}>
          <img width="40" height="40" src={anniverssaire} alt="anniverssaire" />
          <h6 className="my-4 fw-bold fs-5 text-secondary">
            Fête danniversaire
          </h6>
          <p className="text-muted">
            Venez profiter au restaurant Ahmed Kitchen d&apos;une cuisine raffiné et
            personnelle d&apos;exception et de locaux adaptés à vos besoins
            d&apos;organisation d&apos;événements festifs et professionnels !
          </p>
        </Col>
        <Col md={4}>
          <img width="40" height="40" src={affaire} alt="affaire" />
          <h6 className="my-4 fw-bold fs-5 text-secondary">
            Entretiens daffaires
          </h6>
          <p className="text-muted">
            Venez profiter au restaurant Ahmed Kitchen d&apos;une cuisine raffiné et
            personnelle d&apos;exception et de locaux adaptés à vos besoins
            d&apos;organisation d&apos;événements festifs et professionnels !
          </p>
        </Col>
        <Col md={4}>
          <img width="40" height="40" src={mariage} alt="mariage" />
          <h6 className="my-4 fw-bold fs-5 text-secondary">Mariage</h6>
          <p className="text-muted">
            Venez profiter au restaurant Ahmed Kitchen d&apos;une cuisine raffiné et
            personnelle d&apos;exception et de locaux adaptés à vos besoins
            d&apos;organisation d&apos;événements festifs et professionnels !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
