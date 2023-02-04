import React, { useContext } from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { galerieservice } from "../../../_services/galerie.services";
import { categoryContext } from "../../../store/categoryContext";

const Gliste = () => {
  const navigate = useNavigate();
  const galerieContext = useContext(categoryContext);

  // suprimer une image de la galerie
  const deleteImage = (index) => {
    galerieservice
      .deleteGalerie(index)
      .then((response) => {
        const datas = response.data.data;
        galerieContext.setPhotos(datas);
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
        {galerieContext.loading ? (
          <p>pas de photos</p>
        ) : (
          galerieContext.photos.map((photo) => {
            return (
              <Card
                className="  border-0 bg-dark mx-2 p-0"
                as={Col}
                key={photo.id}
              >
                <Card.Title className="text-center text-white text-capitalize  fs-4 fw-bold ">
                  {photo.title}
                </Card.Title>
                <Card.Img
                  className="w-100 h-100 opacity-75 "
                  variant="top"
                  src={photo.image}
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
          })
        )}
      </CardGroup>
    </Container>
  );
};

export default Gliste;
