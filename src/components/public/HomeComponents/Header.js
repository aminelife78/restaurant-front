import { Col, Container, Row } from "react-bootstrap";
import "./homeComponent.scss"



const Header = () => {
  
  return (
    <Container fluid>
      <Row className="min-vw-100">
             
        <Col sm="12"  className=" text-header img-header">
            <h1 className="w-100 ">Bienvenue<br /> Restaurant Ahmed</h1>
            <div className="separator mx-auto my-4"></div>
            <p className="w-100">

            <small
              >Une cuisine riche en gôuts et saveurs de la méditéranée</small
            >
          </p>
        </Col>
      
      
      </Row>
      </Container>
  )
};

export default Header;
