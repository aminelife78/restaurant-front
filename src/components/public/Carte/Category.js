import React, { Fragment, useState, useEffect } from "react";
import { Row, Button, Col, Spinner } from "react-bootstrap";
import "./Carte.scss";
import "animate.css";
import { categorieService } from "../../../_services/categories.service";

const Category = ({ showRepas }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");

  const getCategories = () => {
    categorieService
      .getAllCategories()
      .then((response) => {
        if (!response) {
          throw new Error("Désolé! Galerie vide");
        }
        const resultTab = response.data.data;
        setAllCategories(resultTab);
        setLoading(false);
      })
      .catch((err) => {
        seterror(err.message);
        setLoading(false);
      });
  };
  useEffect(function () {
    getCategories();
  }, []);

  return (
    <Row className="mt-3 mb-5 animate__animated animate__rotateIn ">
      <Col sm="12" className="d-flex justify-content-center  ">
        {loading === false ? (
          allCategories ? (
            allCategories.map((repa, id) => {
              return (
                <Fragment key={repa.id}>
                  <Button
                    onClick={() => showRepas(repa.name)}
                    className="mx-2 "
                    variant="outline-succes "
                    size="md"
                  >
                    {repa.name.charAt(0).toUpperCase() + repa.name.slice(1)}
                  </Button>
                </Fragment>
              );
            })
          ) : (
            <h4 className="text-center text-dark">{error}</h4>
          )
        ) : (
          <Spinner
            animation="border"
            className="mx-auto  my-5"
            variant="primary"
          />
        )}
      </Col>
    </Row>
  );
};

export default Category;
