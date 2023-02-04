// import React, { useState, useEffect,useContext } from "react";
// import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
// import { platservice } from "../../../_services/plats.services";
// import { categoryContext } from "../../../store/categoryContext";
// import { useNavigate } from "react-router-dom";

// const CrListe = () => {
//   const navigate = useNavigate()
//   const categoriesContext = useContext(categoryContext)

//   const [allPlats, setAllPlats] = useState();
//   const [nameCategory, setNameCategory] = useState();

//   // recuperer liste de categories
//   // useEffect(function () {
//   //   categorieService.getAllCategories().then((response) => {
//   //     const resultTab = response.data.data;
//   //     setAllCategories(resultTab);

//   //   }).catch((err) => {
//   //     console.log("il y a une erreur " + err);

//   //   });
//   // }, []);

//   // recuperer liste de plats (utilisation de parameter pour recuperer les plats selon la categorie)
//   useEffect(
//     function () {

//       platservice.getAllPlats(nameCategory)
//         .then((response) => {
//           const resultTab = response.data.data;
//           setAllPlats(resultTab);
//         });
//     },
//     [nameCategory]
//   );

//   // recuperer la categorie rechercher
//   const filterPlats = (e) => {
//     const titre = e.target.value
//     console.log(titre)
//     if(titre === "tous"){
//       setNameCategory("")
//     }else{
//       setNameCategory(titre)
//     }

//       };
//   // suprimer un plat
//   const deletePlats = (index) => {

//     platservice.deletePlat(index)
//       .then((res) => {
//         const datas = res.data.data;
//         setAllPlats(datas);
//       })
//       .catch((err) => {
//         console.log("il y a une erreur " + err);
//       });
//   };
//   return (
//     <>
//       <Row className="mb-3">
//         <Col>
//           <Form.Select
//              onChange={filterPlats}
//             aria-label="Default select example"
//           >
//             <option value="tous" >Toutes les plats</option>
//             {categoriesContext.allCategories &&
//               categoriesContext.allCategories.map((category) => {
//                 return (
//                   <option key={category.id} value={category.name}>
//                     {category.name}
//                   </option>
//                 );
//               })}
//           </Form.Select>
//         </Col>
//       </Row>
//       <Row >
//         {allPlats &&
//           allPlats.map((plat) => {
//             return (
//               <Col xs="3" className="pb-2" key={plat.id}>
//                 <Card  className="w-100 h-100">
//                   <Card.Img
//                   className="w-100 h-100"
//                     variant="top"
//                     src={plat.image}
//                     alt="image"
//                   />
//                   <Card.Body>
//                     <Card.Title className="text-primary fw-bold">
//                       {plat.titre}
//                     </Card.Title>
//                     <Card.Text className="text-muted">
//                       {plat.descreption}
//                     </Card.Text>
//                   </Card.Body>

//                   <ListGroup.Item className="text-center text-succes fw-bold">
//                     {plat.prix} euros
//                   </ListGroup.Item>

//                   <Card.Body className="text-center">
//                     <Card.Link className="btn btn-secondary" onClick={() =>
//                       navigate(`/admin/carte/update/${plat.id}`)
//                     }>
//                       Modifier
//                     </Card.Link>
//                     <Card.Link
//                       className="btn btn-dark"
//                       onClick={() => deletePlats(plat.id)}
//                     >
//                       Suprimer
//                     </Card.Link>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             );
//           })}
//       </Row>
//     </>
//   );
// };

// export default CrListe;

import React, { useState, useContext } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Fragment } from "react";

import Category from "../../../components/public/Carte/Category";

import { useNavigate } from "react-router-dom";
import { platservice } from "../../../_services/plats.services";
import { categoryContext } from "../../../store/categoryContext";

const Carte = () => {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);

  const [datas, setDatas] = useState(categoriesContext.allPlats);
  const [repa, setRepa] = useState("");

  const showRepas = (repa) => {
    const mesReapas =
      categoriesContext.allPlats &&
      categoriesContext.allPlats.filter((plat) => {
        return plat.name === repa;
      });
    setDatas(mesReapas);
    setRepa(repa);
  };

  const deletePlats = (index) => {
    platservice
      .deletePlat(index)
      .then((res) => {
        const data = res.data.data;
        categoriesContext.setAllPlats(data);
        navigate("/admin/categories/liste");
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  return (
    <Fragment>
      <Container>
        <Category showRepas={showRepas} />
        <Row>
          {categoriesContext.loading  ? (
            <p>pas de données</p>
          ) : ( 
            datas.map((plat) => {
              return (
                <Col xs="3" className="pb-2" key={plat.id}>
                  <Card className="w-100 h-100">
                    <Card.Img
                      className="w-100 h-100"
                      variant="top"
                      src={plat.image}
                      alt="image"
                    />
                    <Card.Body>
                      <Card.Title className="text-primary fw-bold">
                        {plat.titre}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {plat.descreption}
                      </Card.Text>
                    </Card.Body>

                    <ListGroup.Item className="text-center text-succes fw-bold">
                      {plat.prix} euros
                    </ListGroup.Item>

                    <Card.Body className="text-center">
                      <Card.Link
                        className="btn btn-secondary"
                        onClick={() =>
                          navigate(`/admin/carte/update/${plat.id}`)
                        }
                      >
                        Modifier
                      </Card.Link>
                      <Card.Link
                        className="btn btn-dark"
                        onClick={() => deletePlats(plat.id)}
                      >
                        Suprimer
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Carte;
