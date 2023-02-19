import React, { useContext } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./homeComponent.scss";
import { categoryContext } from "../../../store/categoryContext";

const Galerie = () => {
  const galerieContext = useContext(categoryContext);

  return (
    <Container>
      <h2 className="fw-bold fs-2 text-succes text-center text-capitalize pt-5">notre galerie d&apos;images</h2>
      <div className="separator m-auto mt-4"></div>
      <Row
        className=" py-5 flex-lg-row flex-column align-content-center"

      >
        {galerieContext.photos &&
          galerieContext.photos.map((photo) => {
            return (
              <Col className=" rounded  p-0 m-4 card-galerie "  key={photo.id}>
                <img
                  className="rounded"
                  variant="top"
                  src={photo.image}
                  alt="galerie"
                />
                <h5 className="position-absolute top-50 start-50 translate-middle fw-bold text-dark text-center text-capitalize  fs-2  ">
                  {photo.title}
                </h5>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Galerie;
