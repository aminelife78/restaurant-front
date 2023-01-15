import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrlProd from "../../../Api/baseUrl";
import { accountService } from "../../../_services/account_services";


const Liste = () => {
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState([]);
  
  // recuperer liste de categories
  useEffect(function () {
    axios.get(`${baseUrlProd}/api/v1/categories`).then((response) => {
      const resultTab = response.data.data;
      setAllCategories(resultTab);
    });
  }, []);

  // suprimer une categorie

  const deleteCategory = (index) => {
    axios
      .delete(`${baseUrlProd}/api/v1/categories/${index}`,{
        headers: { Authorization: `Bearer ${accountService.getToken()}` },
      })
      .then((res) => {
        const datas = res.data.data;
        setAllCategories(datas);
        
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
        {allCategories &&
          allCategories.map((category) => {
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
          })}
      </tbody>
    </Table>
   
  );
};

export default Liste;
