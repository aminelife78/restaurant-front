import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formuleservice } from "../../../_services/formule.services";
import { categoryContext } from "../../../store/categoryContext";

const Fliste = () => {
  const navigate = useNavigate();

  const formuleContext = useContext(categoryContext);

  // suprimer une categorie
  const deleteFormule = (index) => {
    formuleservice
      .deleteFormule(index)
      .then((res) => {
        formuleContext.getFormules()
        navigate("/admin/formule/liste")
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Titre</th>
          <th>Descreption</th>
          <th>Prix</th>
          <th>Nom_menu</th>
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
                  <Button
                    variant="succes"
                    onClick={() =>
                      navigate(`/admin/formule/update/${formule.id}`)
                    }
                  >
                    Modifier
                  </Button>
                </td>
                <td>
                  <Button
                    type="submit"
                    onClick={() => deleteFormule(formule.id)}
                  >
                    Suprimer
                  </Button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
};

export default Fliste;
