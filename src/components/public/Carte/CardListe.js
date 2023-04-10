import {  Row, Col, Spinner, Container, Card } from "react-bootstrap";
import "./Carte.scss";

const CardListe = ({ datas, loading, err }) => {
  return (
    <Container >
    <Card className="content-cart border-0 mx-auto">
      
        {loading === false ? (
          datas ? (
            datas.map((data) => {
              return (

                <>
                <Row className="animate__animated animate__slideInUp  border mb-5  ">
                <Col md="4">
                    <img src={data.image} class="img-fluid rounded-start" alt="img" />
                </Col>
                <Col md="8">
                <Card.Body className=" ">
                    <Card.Title className="d-flex flex-row justify-content-between">
                      <div className="text-primary fw-bold fs-5 mb-2">{data.titre}</div>
                      <div className="text-succes fw-bold fs-5"> {data.prix} euros</div>
                    </Card.Title>
                
                    <Card.Text className="item-description py-2 fs-6">
                      {data.descreption}
                    </Card.Text>
                  </Card.Body>
              </Col>
              </Row>
              </>
              );
            })
          ) : (
            <h4 className="text-center py-5">{err}</h4>
          )
        ) : (
          <Spinner
            animation="border"
            className="mx-auto  my-5"
            variant="primary"
          />
        )}
    </Card>
    </Container>
  );
};

export default CardListe;



// <Col sm="12" className="   d-flex  flex-sm-row  mb-3" key={data.id}>
// <Card className=" mb-3" bg="light">
//   <Card.Img
//     variant="left"
//     src={data.image}
//     className="img-item h-25"
//   />

//   <Card.Body>
//     <Card.Title >
//       <div className="text-primary fw-bold fs-5 mb-2">{data.titre}</div>
//       <div className="text-succes fw-bold fs-5"> {data.prix} euros</div>
//     </Card.Title>

//     <Card.Text className="item-description py-2 fs-6">
//       {data.descreption}
//     </Card.Text>
//   </Card.Body>
// </Card>
// </Col>