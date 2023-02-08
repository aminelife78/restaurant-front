
// import React, { useState, useContext } from "react";
// import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
// import { Fragment } from "react";
// import vide from "../../../images/vide.jpg"; 
// import Category from "../../../components/public/Carte/Category";

// import { useNavigate } from "react-router-dom";
// import { platservice } from "../../../_services/plats.services";
// import { categoryContext } from "../../../store/categoryContext";

// const Carte = () => {
//   const navigate = useNavigate();
//   const categoriesContext = useContext(categoryContext);

//   const [datas, setDatas] = useState(categoriesContext.allPlats);
//   const [repa, setRepa] = useState("");

//   const showRepas = (repa) => {
//     const mesReapas =
//       categoriesContext.allPlats &&
//       categoriesContext.allPlats.filter((plat) => {
//         return plat.name === repa;
//       });
//     setDatas(mesReapas);
//     setRepa(repa);
//   };

//   const deletePlats = (index) => {
    
    
//     platservice
//       .deletePlat(index)
//       .then((res) => {
//         categoriesContext.getPlats()
//         navigate("/admin/categories/liste");
//       })
//       .catch((err) => {
//         console.log("il y a une erreur " + err);
//       });
//   };

//   return (
//     <Fragment>
//       <Container>
//         <Category showRepas={showRepas} />
//         <Row>
//           {categoriesContext.loading  ? (
//             <p>pas de données</p>
//           ) : ( 
//             datas.map((plat) => {
//               return (
//                 <Col xs="3" className="pb-2" key={plat.id}>
//                   <Card className="w-100 h-100">
//                     <Card.Img
//                       className="w-100 h-100"
//                       variant="top"
//                       src={ plat.image }
//                       alt="image"
//                     />
//                     <Card.Body>
//                       <Card.Title className="text-primary fw-bold">
//                         {plat.titre}
//                       </Card.Title>
//                       <Card.Text className="text-muted">
//                         {plat.descreption}
//                       </Card.Text>
//                     </Card.Body>

//                     <ListGroup.Item className="text-center text-succes fw-bold">
//                       {plat.prix} euros
//                     </ListGroup.Item>

//                     <Card.Body className="text-center">
//                       <Card.Link
//                         className="btn btn-secondary"
//                         onClick={() =>
//                           navigate(`/admin/carte/update/${plat.id}`)
//                         }
//                       >
//                         Modifier
//                       </Card.Link>
//                       <Card.Link
//                         className="btn btn-dark"
//                         onClick={() => deletePlats(plat.id)}
//                       >
//                         Suprimer
//                       </Card.Link>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               );
//             })
//           )}
//         </Row>
//       </Container>
//     </Fragment>
//   );
// };

// export default Carte;





import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { platservice } from "../../../_services/plats.services";
import { categoryContext } from "../../../store/categoryContext";

const Carte = () => {
  const navigate = useNavigate();
  const platsContext = useContext(categoryContext);
  

   const deletePlats = (index) => {
    
    
    platservice
      .deletePlat(index)
      .then((res) => {
        platsContext.getPlats()
        navigate("/admin/categories/liste");
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
        <th>image</th>
       
      </tr>
    </thead>
    <tbody>
      {platsContext.loading ? (
        <tr>
          <td>pas de données</td>
        </tr>
      ) : (
        platsContext.allPlats.map((plat) => {
          return (
            <tr key={plat.id}>

              <td>{plat.id}</td>
              <td>{plat.name}</td>
              <td>{plat.titre}</td>
              <td>{plat.descreption}</td>
              
              <td><img width="40" height="40" src={plat.image} alt="img" /></td>
              
              <td>
                <Button
                  variant="succes"
                  onClick={() =>
                    navigate(`/admin/carte/update/${plat.id}`)
                  }
                >
                  Modifier
                </Button>
              </td>
              <td>
                <Button
                  type="submit"
                  onClick={() => deletePlats(plat.id)}
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

export default Carte;
