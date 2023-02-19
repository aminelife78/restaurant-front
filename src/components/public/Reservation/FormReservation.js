import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { accountService } from "../../../_services/account_services";
import { reservationservice } from "../../../_services/reservation.services";

const FormReservation = () => {
  const navigate = useNavigate();
  const heures_midi = [
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
  ];
  const heures_soir = [
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
  ];

  const [datas, setDatas] = useState({
    nombre_couverts: "",
    date: "",
    heure: "",
    allergies: "",
  });
  const handleDatas = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let { userId } = accountService.getTokenInfo();
    datas.clients_id = userId;
    reservationservice
      .addReservation(datas)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Select
              onChange={handleDatas}
              name="nombre_couverts"
              value={datas.nombre_couverts}
              aria-label="Default select example"
            >
              <option>Nombre de couverts</option>
              <option value="1 ">1 couverts</option>
              <option value="2 ">2 couverts</option>
              <option value="3 ">3 couverts</option>
              <option value="4 ">4 couverts</option>
              <option value="5 ">5 couverts</option>
              <option value="6 ">6 couverts</option>
              <option value="7 ">7 couverts</option>
              <option value="8 ">8 couverts</option>
            </Form.Select>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              onChange={handleDatas}
              name="date"
              value={datas.date}
              type="date"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="pt-5 ">
        <p>Midi</p>
        <Col>
          {heures_midi.map((heure, idx) => {
            return (
              <Button
                key={idx}
                onClick={handleDatas}
                name="heure"
                value={heure}
                type="button"
                className="bg-succes me-2"
              >
                {heure}
              </Button>
            );
          })}
        </Col>
      </Row>
      <Row className="py-5 ">
        <p>Soir</p>
        <Col>
          {heures_soir.map((heure, idx) => {
            return (
              <Button
                key={idx}
                onClick={handleDatas}
                name="heure"
                value={heure}
                type="button"
                className="bg-succes me-2"
              >
                {heure}
              </Button>
            );
          })}
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <FloatingLabel className="text-muted fs-6"
            controlId="floatingTextarea2"
            label="Commentaires, allergies et  habitudes alimentaires (facultatif)"
          >
            <Form.Control
              as="textarea"
              onChange={handleDatas}
              name="allergies"
              value={datas.allergies}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Button type="submit">Réserver</Button>
    </Form>
  );
};

export default FormReservation;
