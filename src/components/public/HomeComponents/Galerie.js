import React, { useContext } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./homeComponent.scss";
import { categoryContext } from "../../../store/categoryContext";

const Galerie = () => {
  const galerieContext = useContext(categoryContext);


  return (
    <Container>
      <CardGroup
        className=" py-5 flex-lg-row flex-column align-content-center"
        as={Row}
      >
        {galerieContext.loading &&
          galerieContext.photos.map((photo) => {
            return (
              <Card className="  border-0 bg-dark " as={Col} key={photo.id}>
                <div className="content-card  mb-3 ">
                  <Card.Img
                    className="w-100 h-100 opacity-75"
                    variant="top"
                    src={photo.image}
                  />
                  <Card.Title className="position-absolute top-50 start-50 translate-middle text-white text-center text-capitalize  fs-2 fw-bold w-100 card-image ">
                    {photo.title}
                  </Card.Title>
                </div>
              </Card>
            );
          })}
      </CardGroup>
    </Container>
  );
};

export default Galerie;
