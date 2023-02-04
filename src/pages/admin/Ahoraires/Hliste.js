import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { heureservice } from "../../../_services/heure.services";




const Hliste = () => {
  const navigate = useNavigate();
  const [horaires, setHoraires] = useState();
  
  // recuperer liste horaires
  useEffect(function () {
    heureservice.getAllHeures().then((response) => {
      const resultTab = response.data.data;
      setHoraires(resultTab);
    });
  }, []);

  

  return (
    
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Jour</th>
          <th>Horaires Matin</th>
          <th>Horaires Soir</th>
        </tr>
      </thead>
      <tbody>
        {horaires &&
          horaires.map((horaire) => {
            return (
              
              <tr key={horaire.id}>
                <td>{horaire.id}</td>
                <td>{horaire.jours}</td>
                <td>{horaire.heure_matin}</td>
                <td>{horaire.heure_soir}</td>
                <td>
                  <Button
                    variant="succes"
                    onClick={() =>
                      navigate(`/admin/horaires/update/${horaire.id}`)
                    }
                  >
                    Modifier
                  </Button>
                </td>
              
              </tr>
          

            );
          })}
      </tbody>
    </Table>
   
  );
};

export default Hliste;
