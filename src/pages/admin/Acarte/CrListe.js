import React, { useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { platservice } from "../../../_services/plats.services";
import { categoryContext } from "../../../store/categoryContext";
import Buttons from "../../../components/admin/admGlobal/Buttons";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Carte = () => {
  const navigate = useNavigate();
  const platsContext = useContext(categoryContext);

  // suprimer plat
  const deletePlat = (index) => {
    platservice
      .deletePlat(index)
      .then((res) => {
        platsContext.getPlats();
        navigate("/admin/carte/liste");
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  // modifier un plat
  const updatePlat = (index) => {
    navigate(`/admin/carte/update/${index}`);
  };

  return (
    <Container >
      <Row className="  m-2 ">
        <Col className="overflow-auto " xs="12">
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>categorie</th>
                <th>Titre</th>
                <th>Descreption</th>
                <th>Prix</th>
                <th>Image</th>
                <th>Modifier</th>
                <th>Suprimer</th>
              </tr>
            </thead>
            <tbody>
              {platsContext.loading ? (
                <tr>
                  <td>pas de données</td>
                </tr>
              ) : (
                platsContext.allPlats.map((plat, index) => {
                  return (
                    <tr key={index}>
                      <td>{plat.id}</td>
                      <td>{plat.name}</td>
                      <td>{plat.titre}</td>
                      <td>{plat.descreption}</td>
                      <td>{plat.prix} €</td>

                      <td>
                        <img
                          width="40"
                          height="40"
                          src={plat.image}
                          alt="img"
                        />
                      </td>

                      <td>
                        <Buttons
                          color="primary"
                          handleBtn={updatePlat}
                          idx={plat.id}
                        >
                          <BsPencilSquare />
                        </Buttons>
                      </td>
                      <td>
                        <Buttons
                          handleBtn={deletePlat}
                          idx={plat.id}
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

export default Carte;
