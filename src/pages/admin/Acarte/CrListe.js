import React, { useState, useEffect } from "react";
import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import axios from "axios";
import baseUrlProd from "../../../Api/baseUrl";
import { accountService } from "../../../_services/account_services";

const CrListe = () => {
  const [allPlats, setAllPlats] = useState();
  const [allCategories, setAllCategories] = useState();
  const [nameCategory, setNameCategory] = useState();

  // recuperer liste de categories
  useEffect(function () {
    axios.get(`${baseUrlProd}/api/v1/categories`).then((response) => {
      const resultTab = response.data.data;
      setAllCategories(resultTab);
    });
  }, []);

  // recuperer liste de carte (utilisation de parameter pour recuperer les plats selon la categorie)
  useEffect(
    function () {
      axios
        .get(`${baseUrlProd}/api/v1/plats?categoryName=${nameCategory}`)
        .then((response) => {
          const resultTab = response.data.data;
          setAllPlats(resultTab);
        });
    },
    [nameCategory]
  );

  // recuperer la categorie rechercher
  const filterPlats = (titre) => {
    setNameCategory(titre);
  };

  // suprimer un plat
  const deletePlats = (index) => {
    axios
      .delete(`${baseUrlProd}/api/v1/plats/${index}`,{
        headers: { Authorization: `Bearer ${accountService.getToken()}` }
      })
      .then((res) => {
        const datas = res.data.data;
        setAllPlats(datas);
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };
  return (
    <>
      <Row className="mb-3">
        <Col>
          <Form.Select
            onChange={(e) => filterPlats(e.target.value)}
            aria-label="Default select example"
          >
            <option>Choisi une categorie</option>
            {allCategories &&
              allCategories.map((category) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
          </Form.Select>
        </Col>
      </Row>
      <Row >
        {allPlats &&
          allPlats.map((plat) => {
            return (
              <Col className="pb-2" key={plat.id}>
                <Card style={{ width: '18rem' }}   key={plat.id}>
                  <Card.Img
                    
                    variant="top"
                    src={baseUrlProd + "/plats/" + plat.image}
                    alt="image"
                  />
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">
                      {plat.titre}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {plat.descreption}
                    </Card.Text>
                  </Card.Body>

                  <ListGroup.Item className="text-center text-succes fw-bold">
                    {plat.prix} euros
                  </ListGroup.Item>

                  <Card.Body className="text-center">
                    <Card.Link className="btn btn-secondary">
                      Modifier
                    </Card.Link>
                    <Card.Link
                      className="btn btn-dark"
                      onClick={() => deletePlats(plat.id)}
                    >
                      Suprimer
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default CrListe;
