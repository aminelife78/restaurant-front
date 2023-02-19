import { Col, Row } from "react-bootstrap";
import header from "../../../images/header.WebP";
import "./homeComponent.scss"



const Header = () => {
  
  return (
      <Row>
        <Col>
          <img
            className="img-fluid w-100 vh-100  d-block "
            src={header}
            alt="header"
          />
        </Col>
      
        <Col className=" position_text">
            <h1 className="text-white fs-1 fw-bold text-center">Ahmed Kitchen</h1>
            <p className="text-white fs-4 text-center">Venez comme vous êtes</p>
        </Col>
      
      
      </Row>
  )
};

export default Header;
