import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { menuservice } from "../../../_services/menu.services";
import { categoryContext } from "../../../store/categoryContext";
import Buttons from "../../../components/admin/admGlobal/Buttons";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

const Mliste = () => {
  const menuContext = useContext(categoryContext);
  const navigate = useNavigate();

  // suprimer un menu
  const deleteMenu = (index) => {
    menuservice
      .deleteMenu(index)
      .then((res) => {
        menuContext.getMenu();
        navigate(`/admin/menu/liste`);
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  // modifier une menu
  const updateMenu = (index) => {
    navigate(`/admin/menu/update/${index}`);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>menu</th>
          <th>Modifier</th>
          <th>Suprimer</th>
        </tr>
      </thead>
      <tbody>
        {menuContext.loading ? (
          <tr>
            <td>pas de données</td>
          </tr>
        ) : (
          menuContext.allMenus.map((menu) => {
            return (
              <tr key={menu.id}>
                <td>{menu.id}</td>
                <td>{menu.name}</td>
                <td>
                  <Buttons color="primary" handleBtn={updateMenu} idx={menu.id}>
                    <BsPencilSquare />
                  </Buttons>
                </td>
                <td>
                  <Buttons handleBtn={deleteMenu} idx={menu.id} color="dark">
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

export default Mliste;
