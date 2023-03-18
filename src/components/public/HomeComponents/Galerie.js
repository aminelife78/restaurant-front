import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./homeComponent.scss";
import { galerieservice } from "../../../_services/galerie.services";

const Galerie = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);


  const getGalerie = () => {
    galerieservice
      .getAllGaleries()
      .then((response) => {
      
        const resultTab = response.data.data;
        setPhotos(resultTab);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  };
  useEffect(() => {
    getGalerie();
  }, []);

  return (
    <Container fluid className="bg-dark px-0">
      <h5 className="fw-bold fs-1 text-succes text-center text-capitalize pt-5">
        notre galerie d&apos;images
      </h5>
      <div className="separator m-auto mt-4"></div>
      <Row className=" galerie-content">
        {loading === false ? (
          photos ? (
            photos.map((photo) => {
              return (
                <Col sm="3" className="card-galerie  " key={photo.id}>

                  <img src={photo.image} alt="galerie" />
                  <h5 >{photo.title}</h5>
                </Col>
              );
            })
          ) : (
            <h4 className="text-center text-dark">Désolé! Galerie vide</h4>
          )
        ) : (
          <Spinner
            animation="border"
            className="mx-auto  my-5"
            variant="primary"
          />
        )}
      </Row>
    </Container>
  );
};

export default Galerie;

