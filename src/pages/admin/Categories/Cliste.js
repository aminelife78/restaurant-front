import React, { useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { categorieService } from "../../../_services/categories.service";
import { categoryContext } from "../../../store/categoryContext";
import Buttons from "../../../components/admin/admGlobal/Buttons";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Liste = () => {
  const navigate = useNavigate();

  const categoriesContext = useContext(categoryContext);

  // suprimer une categorie
  const deleteCategory = (index) => {
    categorieService
      .deleteCategory(index)
      .then((res) => {
        categoriesContext.getCategories();
        categoriesContext.getPlats();
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  // modifier une categorie
  const updateCategory = (index) => {
    navigate(`/admin/categories/update/${index}`);
  };

  return (
    <Container>
      <Row className=" m-2 ">
        <Col className="overflow-auto " xs="12">
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Categorie</th>
                <th>Modifier</th>
                <th>Suprimer</th>
              </tr>
            </thead>
            <tbody>
              {categoriesContext.loading ? (
                <tr>
                  <td>pas de données</td>
                </tr>
              ) : (
                categoriesContext.allCategories.map((category) => {
                  return (
                    <tr key={category.id}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td>
                        <Buttons
                          color="primary"
                          handleBtn={updateCategory}
                          idx={category.id}
                        >
                          <BsPencilSquare />
                        </Buttons>
                      </td>
                      <td>
                        <Buttons
                          handleBtn={deleteCategory}
                          idx={category.id}
                          color="dark"
                        >
                          <BsTrashFill />
                        </Buttons>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Liste;
