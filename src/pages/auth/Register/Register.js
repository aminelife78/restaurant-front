import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { accountService } from "../../../_services/account_services";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    username: "",
    email: "",
    password: "",
    nombre_convives: "",
    phone: "",
  });

  const handleValue = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  accountService.register(datas)
      .then((response) => {
        accountService.saveToken(response.data.token);
        navigate("/reservation");
        setDatas({
          username: "",
          email: "",
          password: "",
          nombre_convives: "",
          phone: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-primary">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Inscréption
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Nom</Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.username}
                          name="username"
                          type="text"
                          placeholder="Enter Name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Adresse Email
                        </Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.email}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.password}
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicConvives"
                      >
                        <Form.Label>Nombre convives</Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.nombre_convives}
                          name="nombre_convives"
                          type="text"
                          placeholder="Nombre convives"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Telephone">
                        <Form.Label className="text-center">
                          Telephone
                        </Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.phone}
                          name="phone"
                          type="tel"
                          placeholder="Numéro Telephone"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          S&apos;inscrire
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Vous avez déjà un compte?{" "}
                        <Link to="/auth/login" className="text-primary fw-bold">
                          Connexion
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
