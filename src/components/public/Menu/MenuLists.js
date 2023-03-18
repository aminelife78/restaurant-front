import React, { Fragment, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { formuleservice } from "../../../_services/formule.services";

const MenuLists = ({ menus }) => {
  const [formules, setFormules] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    formuleservice
      .getAllformules()
      .then((response) => {
        const resultTab = response.data.data;
        setFormules(resultTab);
        setLoading(false);
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
        setLoading(false);
      });
  }, []);

  const results =
    formules &&
    formules.filter((formule) => {
      return formule.name === menus;
    });

  return (
    <Fragment>
      {loading === false ? (
        results ? (
          results.map((result) => {
            return (
              <Fragment key={result.id}>
                <Card.Body>
                  <Card.Title className="text-primary fw-bold fs-5">
                    {result.title}
                  </Card.Title>
                  <Card.Text>
                    {result.descreption}{" "}
                    <span className="text-succes fw-bolder">
                      {result.prix} €
                    </span>
                  </Card.Text>
                </Card.Body>
              </Fragment>
            );
          })
        ) : (
          <h4 className="text-center text-danger">Désolé! formule vide</h4>
        )
      ) : (
        <Spinner
          animation="border"
          className="mx-auto  my-5"
          variant="primary"
        />
      )}
    </Fragment>
  );
};

export default MenuLists;
