import { Col, Row } from 'react-bootstrap';
import imgTitle1 from "../../../images/imgTitle1.jpg"
import "./Global.scss"
function Title({title}) {
  return (
    < >
      <Row className='pb-5'>
        <Col >
            <img 
            className="position-absolute img-fluid header_carte"
            src={imgTitle1}
            alt="myimg"
            />
            <div className='cover_dark'></div>
            <h1 className="text-white   fw-bold text-center titre_position">{title && title.charAt(0).toUpperCase() + title.slice(1)}</h1>
           
        </Col>
      </Row>      
            
  </>
  );
}

export default Title;