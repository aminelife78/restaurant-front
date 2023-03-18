import { Card, Row, Col, Spinner } from "react-bootstrap";
import "./Carte.scss";

const CardListe = ({ datas, loading, err }) => {
  return (
    <>
      <Row className="animate__animated animate__slideInUp">
        {loading === false ? (
          datas ? (
            datas.map((data) => {
              return (
                <Col sm="12" className="mb-3 " key={data.id}>
                  <Card className="d-flex  flex-row  mb-3" bg="light">
                    <Card.Img
                      variant="left"
                      src={data.image}
                      className="img-item"
                    />

                    <Card.Body>
                      <Card.Title className="d-sm-flex justify-content-between ">
                        <div className="text-primary fw-bold fs-5 mb-2">{data.titre}</div>
                        <div className="text-succes fw-bold fs-5"> {data.prix} euros</div>
                      </Card.Title>

                      <Card.Text className="item-description py-2 fs-6">
                        {data.descreption}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
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
      </Row>
    </>
  );
};

export default CardListe;
