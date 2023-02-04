import React, { Fragment, useContext } from "react";
import { Row, Button, Col } from "react-bootstrap";
import "./Carte.scss";
import { categoryContext } from "../../../store/categoryContext";

const Category = ({ showRepas }) => {
  const categoriesContext = useContext(categoryContext);

  return (
    <Row className="mt-3 mb-5">
      <Col sm="12" className="d-flex justify-content-center ">
        {categoriesContext.allCategories &&
          categoriesContext.allCategories.map((repa, id) => {
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
          })}
      </Col>
    </Row>
  );
};

export default Category;
