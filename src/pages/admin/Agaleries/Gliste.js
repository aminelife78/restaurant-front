// import React, { useContext } from "react";
// import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { galerieservice } from "../../../_services/galerie.services";
// import { categoryContext } from "../../../store/categoryContext";

// const Gliste = () => {
//   const navigate = useNavigate();
//   const galerieContext = useContext(categoryContext);

//   // suprimer une image de la galerie
//   const deleteImage = (index) => {
//     const photos  = galerieContext.photos.filter(photo=>photo.id !== index)
//     galerieservice
//       .deleteGalerie(index)
//       .then((response) => {
//         galerieContext.getGaleries()
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <Container>
//       <CardGroup
//         className="  flex-lg-row flex-column align-content-center"
//         as={Row}
//       >
//         {galerieContext.loading ? (
//           <p>pas de photos</p>
//         ) : (
//           galerieContext.photos.map((photo) => {
//             return (
//               <Card
//                 className="  border-0 bg-dark mx-2 p-0"
//                 as={Col}
//                 key={photo.id}
//               >
//                 <Card.Title className="text-center text-white text-capitalize  fs-4 fw-bold ">
//                   {photo.title}
//                 </Card.Title>
//                 <Card.Img
//                   className="w-100 h-100 opacity-75 "
//                   variant="top"
//                   src={photo.image}
//                 />

//                 <div className="d-flex">
//                   <Button
//                     onClick={() => deleteImage(photo.id)}
//                     variant="dark"
//                     className="w-100"
//                   >
//                     Suprimer
//                   </Button>
//                   <Button
//                     variant="primary"
//                     className="w-100"
//                     onClick={() =>
//                       navigate(`/admin/galerie/update/${photo.id}`)
//                     }
//                   >
//                     Modifier
//                   </Button>
//                 </div>
//               </Card>
//             );
//           })
//         )}
//       </CardGroup>
//     </Container>
//   );
// };

// export default Gliste;

// methode 2

import React, { useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { galerieservice } from "../../../_services/galerie.services";
import { categoryContext } from "../../../store/categoryContext";
import Buttons from "../../../components/admin/admGlobal/Buttons";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Gliste = () => {
  const navigate = useNavigate();
  const galerieContext = useContext(categoryContext);

  // suprimer une image de la galerie
  const deleteImage = (index) => {
    galerieservice
      .deleteGalerie(index)
      .then((response) => {
        galerieContext.getGaleries();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // modifier une image
  const updateImage = (index) => {
    navigate(`/admin/galerie/update/${index}`);
  };

  return (
    <Container>
      <Row className="m-2">
        <Col className="overflow-auto " xs="12">
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Titre</th>
                <th>image</th>
                <th>Modifier</th>
                <th>Suprimer</th>
              </tr>
            </thead>
            <tbody>
              {galerieContext.loading ? (
                <tr>
                  <td>pas de données</td>
                </tr>
              ) : (
                galerieContext.photos.map((photo) => {
                  return (
                    <tr key={photo.id}>
                      <td>{photo.id}</td>
                      <td>{photo.title}</td>

                      <td>
                        <img
                          width="40"
                          height="40"
                          src={photo.image}
                          alt="img"
                        />
                      </td>

                      <td>
                        <Buttons
                          color="primary"
                          handleBtn={updateImage}
                          idx={photo.id}
                        >
                          <BsPencilSquare />
                        </Buttons>
                      </td>
                      <td>
                        <Buttons
                          handleBtn={deleteImage}
                          idx={photo.id}
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
        </Col>
      </Row>
    </Container>
  );
};

export default Gliste;
