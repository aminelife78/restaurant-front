import React from 'react'
import { Col, Row,Form } from 'react-bootstrap'

const ReservationUsers = ({datas,handleDatas}) => {
  return (
    <>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridNom">
        <Form.Control
          onChange={handleDatas}
          name="nom"
          value={datas.nom}
          type="text"
          placeholder="Enter Nom"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Control
          onChange={handleDatas}
          name="email"
          value={datas.email}
          type="email"
          placeholder="email"
        />
      </Form.Group>
    </Row>
    <Row>
      <Form.Group as={Col} controlId="formGridPhone">
        <Form.Control
          onChange={handleDatas}
          name="phone"
          value={datas.phone}
          type="text"
          placeholder="Enter Phone"
        />
      </Form.Group>
    </Row>

   

</>

  )
}

export default ReservationUsers













