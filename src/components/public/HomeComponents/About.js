import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import histoire from "../../../images/histoire.WebP";

const About = () => {
  return (
    <Container className="py-5">
      <h5 className="fw-bold fs-1 text-succes text-center text-capitalize pt-1">
        Notre Histoire
      </h5>
      <div className="separator m-auto mt-4"></div>

      <Row className="pt-5 ">
        <Col className="mb-3  ">
          <Card as={Col} className="d-flex flex-lg-row  mb-3 border-0  ">
            <Card.Img
              variant="left"
              src={histoire}
              className="about-img mx-auto "
              alt=" about"
            />
            <Card.Body>
              <Card.Text className="  item-description py-2 fs-6 lh-base text-center mx-auto  text-muted w-75">
                Depuis plusieurs années nous navons cessé de créer de nouvelles
                recettes et daméliorer en permanence notre savoir-faire. Ahmed
                Kitchen vous offre des produits exclusifs comme lauthentique
                Napolitaine cuite au feu de bois.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
