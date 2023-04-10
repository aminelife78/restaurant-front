import React, { useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formuleservice } from "../../../_services/formule.services";
import { categoryContext } from "../../../store/categoryContext";
import Buttons from "../../../components/admin/admGlobal/Buttons";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

const Fliste = () => {
  const navigate = useNavigate();

  const formuleContext = useContext(categoryContext);

  // suprimer une categorie
  const deleteFormule = (index) => {
    formuleservice
      .deleteFormule(index)
      .then((res) => {
        formuleContext.getFormules();
        navigate("/admin/formule/liste");
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  // modifier formule
  const updateFormule = (index) => {
    navigate(`/admin/formule/update/${index}`);
  };

  return (
    <Container>
      <Row className="  m-2 ">
        <Col className="overflow-auto "  xs="12">
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Titre</th>
                <th>Descreption</th>
                <th>Prix</th>
                <th>Nom_menu</th>
                <th>Modifier</th>
                <th>Suprimer</th>
              </tr>
            </thead>
            <tbody>
              {formuleContext.loading ? (
                <tr>
                  <td>pas de données</td>
                </tr>
              ) : (
                formuleContext.allFormules.map((formule) => {
                  return (
                    <tr key={formule.id}>
                      <td>{formule.id}</td>
                      <td>{formule.title}</td>
                      <td>{formule.descreption}</td>
                      <td>{formule.prix}</td>
                      <td>{formule.name}</td>
                      <td>
                        <Buttons
                          color="primary"
                          handleBtn={updateFormule}
                          idx={formule.id}
                        >
                          <BsPencilSquare />
                        </Buttons>
                      </td>
                      <td>
                        <Buttons
                          handleBtn={deleteFormule}
                          idx={formule.id}
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

export default Fliste;
