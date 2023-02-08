import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { categorieService } from "../../../_services/categories.service";
import { categoryContext } from "../../../store/categoryContext";

const Liste = () => {
  const navigate = useNavigate();

  const categoriesContext = useContext(categoryContext)
 
  // suprimer une categorie
  const deleteCategory = (index) => {
    categorieService
      .deleteCategory(index)
      .then((res) => {
        categoriesContext.getCategories()
       
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
          <th>Categorie</th>
        </tr>
      </thead>
      <tbody>
        {categoriesContext.loading ? (
          <tr><td>pas de données</td></tr>
        ) : (
          categoriesContext.allCategories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <Button
                    variant="succes"
                    onClick={() =>
                      navigate(`/admin/categories/update/${category.id}`)
                    }
                  >
                    Modifier
                  </Button>
                </td>
                <td>
                  <Button
                    type="submit"
                    onClick={() => deleteCategory(category.id)}
                  >
                    suprimer
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

export default Liste;
