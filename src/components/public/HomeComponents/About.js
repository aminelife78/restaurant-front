import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import histoire from "../../../images/histoire.jpg";

const About = () => {
  return (
    <Container className="py-5">
      <Row className="pt-5 ">
        <Col sm="12" className="mb-3 ">
          <Card className="d-flex flex-lg-row mb-3  " bg="light">
            <Card.Img  variant="left" src={histoire} className="histoire " />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center pt-5 ">
                <div className="text-succes text-center w-50 fs-1 ">
                   Notre Histoire
                </div>
              </Card.Title>

              <Card.Text className="item-description py-2 fs-4 lh-base text-center text-dark">
                Depuis plusieurs années nous navons cessé de créer de nouvelles
                recettes et daméliorer en permanence notre savoir-faire.
                Italian Kitchen vous offre des produits exclusifs comme
                lauthentique Napolitaine cuite au feu de bois.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
