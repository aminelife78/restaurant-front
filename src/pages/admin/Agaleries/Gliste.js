import React, { useEffect, useState } from "react";
import baseUrlProd from "../../../Api/baseUrl";
import axios from "axios";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../../_services/account_services";
const Gliste = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState();

  // afficher la galerie des images
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

  // suprimer une image de la galerie
  const deleteImage = (index) => {
    axios
      .delete(`${baseUrlProd}/api/v1/galerie/${index}`, {
        headers: { "Content-Type": "application/json",Authorization: `Bearer ${accountService.getToken()}` },
      })
      .then((response) => {
        const datas = response.data.data;
        setPhotos(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <CardGroup
        className="  flex-lg-row flex-column align-content-center"
        as={Row}
      >
        {photos &&
          photos.map((photo) => {
            return (
              <Card
                className="  border-0 bg-dark mx-2 p-0 "
                as={Col}
                key={photo.id}
              >
                <Card.Title className="text-center text-white text-capitalize  fs-4 fw-bold ">
                  {photo.title}
                </Card.Title>
                <Card.Img
                  className="w-100 h-100 opacity-75"
                  variant="top"
                  src={baseUrlProd + "/galerie/" + photo.image}
                />

                <div className="d-flex">
                  <Button
                    onClick={() => deleteImage(photo.id)}
                    variant="dark"
                    className="w-100"
                  >
                    Suprimer
                  </Button>
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={() =>
                      navigate(`/admin/galerie/update/${photo.id}`)
                    }
                  >
                    Modifier
                  </Button>
                </div>
              </Card>
            );
          })}
      </CardGroup>
    </Container>
  );
};

export default Gliste;
