import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { categoryContext } from "../../../store/categoryContext";
import Buttons from "../../../components/admin/admGlobal/Buttons";
import { BsTrashFill } from "react-icons/bs";
import { Tableservice } from "../../../_services/tables.services";

const Tiste = () => {

  const tableContext = useContext(categoryContext);



  // suprimer une categorie
  const tableDelete = (index) => {
    Tableservice.deleteTable(index)
      .then((res) => {
        tableContext.getTables();
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
          <th>nbr_convive</th>
          <th>time</th>
          <th>temps</th>
          <th>Suprimer</th>
        </tr>
      </thead>
      <tbody>
        {tableContext.loading ? (
          <tr>
            <td>pas de données</td>
          </tr>
        ) : (
          tableContext.allTables.map((table) => {
            return (
              <tr key={table.id}>
                <td>{table.id}</td>
                <td>{table.nbr_convive}</td>
                <td>{table.time}</td>
                <td>{table.temps}</td>
                
                <td>
                  <Buttons
                    handleBtn={tableDelete}
                    idx={table.id}
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
  );
};

export default Tiste;
