import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { menuservice } from "../../../_services/menu.services";
import { categoryContext } from "../../../store/categoryContext";

const Mliste = () => {
  const menuContext = useContext(categoryContext);
  const navigate = useNavigate();

  // suprimer un menu
  const deleteMenu = (index) => {
    menuservice
      .deleteMenu(index)
      .then((res) => {
        menuContext.getMenu()
        navigate(`/admin/menu/liste`)
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
          <th>menu</th>
        </tr>
      </thead>
      <tbody>
        {menuContext.loading ? (
          <tr><td>pas de données</td></tr>
        ) : (
          menuContext.allMenus.map((menu) => {
            return (
              <tr key={menu.id}>
                <td>{menu.id}</td>
                <td>{menu.name}</td>
                <td>
                  <Button
                    variant="succes"
                    onClick={() => navigate(`/admin/menu/update/${menu.id}`)}
                  >
                    Modifier
                  </Button>
                </td>
                <td>
                  <Button type="submit" onClick={() => deleteMenu(menu.id)}>
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

export default Mliste;
