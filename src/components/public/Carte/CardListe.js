import { Card, Row, Col } from "react-bootstrap";
import "./Carte.scss";

const CardListe = ({ datas }) => {
  return (
    <>
    <Row>
      {datas &&
        datas.map((data) => {
          return (
            <Col sm="12" className="mb-3" key={data.id}>
              <Card className="d-flex flex-row mb-3" bg="light">
                <Card.Img
                  variant="left"
                  src={data.image}
                  className="img-item"
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="text-secondary">{data.titre}</div>
                    <div className="text-succes"> {data.prix} euros</div>
                  </Card.Title>

                  <Card.Text className="item-description py-2">
                    {data.descreption}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
    </>
  );
};

export default CardListe;
