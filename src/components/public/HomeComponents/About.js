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
              <Card.Text className="  item-description py-2 fs-6 lh-base  mx-auto  text-muted w-75">
                Bienvenue sur le site de notre restaurant ! Nous sommes ravis de
                partager notre passion pour la cuisine délicieuse et une
                excellente expérience culinaire avec vous. Voici un peu sur nous
                et ce que nous proposons. <br/><br/>
                Notre restaurant est situé au coeur du
                centre-ville et sert une variété de plats pour tous les goûts.
                Nous sommes spécialisés dans la cuisine de la ferme à la table,
                en utilisant autant que possible des ingrédients frais et
                locaux. Notre menu change selon les saisons pour refléter les
                produits les plus frais disponibles. <br/><br/>
                Nous offrons des options de
                sièges à l'intérieur et à l'extérieur, avec une atmosphère
                chaleureuse et intime, parfaite pour un dîner romantique ou une
                soirée entre amis. Notre équipe de serveurs sympathiques et
                attentionnés veillera à ce que vous viviez une expérience
                culinaire confortable et agréable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
