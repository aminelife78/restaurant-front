import { Col, Row } from "react-bootstrap";
import "./homeComponent.scss"



const Header = () => {
  
  return (
      <Row className=" img-header">
             
        <Col  className=" text-header">
            <h1>Bienvenue<br /> Restaurant Ahmed</h1>
            <div className="separator mx-auto my-4"></div>
            <p>

            <small
              >Une cuisine riche en gôuts et saveurs de la méditéranée</small
            >
          </p>
        </Col>
      
      
      </Row>
  )
};

export default Header;
