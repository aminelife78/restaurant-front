import React, { useState, useEffect } from "react";
import {  Table } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Buttons from "../../../components/admin/admGlobal/Buttons";
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

  
  // modifier horaires
 
   const updateImage = (index) => {
    navigate(`/admin/horaires/update/${index}`);
  };

  return (
    
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Jour</th>
          <th>Horaires Matin</th>
          <th>Horaires Soir</th>
          <th>Modifier</th>
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
                <Buttons color="primary" handleBtn={updateImage} idx={horaire.id}>
                  <BsPencilSquare />
                </Buttons>
              </td>
              
              </tr>
          

            );
          })}
      </tbody>
    </Table>
   
  );
};

export default Hliste;
