import React, { useEffect, useState } from "react";
import baseUrlProd from "../../../Api/baseUrl";
import axios from "axios";
import { Container, Row, Col,Card,CardGroup } from "react-bootstrap";
import "./homeComponent.scss"

const Galerie = () => {
  const [photos, setPhotos] = useState();

  useEffect(function () {
    axios
      .get(`${baseUrlProd}/api/v1/galerie`)
      .then((response) => {
        const resultTab = response.data.data;
        setPhotos(resultTab);
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  }, []);


  return (
    <Container>
      <CardGroup className=" py-5 flex-lg-row flex-column align-content-center" as={Row}>
        {photos &&
          photos.map((photo) => {
            return (
              <Card className="  border-0 bg-dark  "  as={Col} key={photo.id}>
                <Card.Img className="w-100 h-100 opacity-50" variant="top" src={photo.image} />
                
                <Card.Title className="position-absolute top-50 start-50 translate-middle text-white  fs-2 fw-bold card-image">{photo.title}</Card.Title>
               
              </Card>
            );
          })}
      </CardGroup>
    </Container>
  );
};

export default Galerie;
