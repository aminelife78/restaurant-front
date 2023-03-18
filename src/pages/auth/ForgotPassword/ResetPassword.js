import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { accountService } from "../../../_services/account_services";
import { useNavigate } from "react-router-dom";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPass, setNewPass] = useState({ email: "", newPassword: "" });
  const [err, setErr] = useState("");

  const addnewPass = (e) => {
    if (!e.target.value) {
      setErr("");
    }
    setNewPass({ ...newPass, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .resetPassword(newPass)
      .then((response) => {
        console.log(response);
        accountService.saveToken(response.data.token);
        if (accountService.getTokenInfo().userRole === "admin") {
          navigate("/admin/reservation");
        } else {
          navigate("/reservation");
        }
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));
    setNewPass({ email: "", newPassword: "" });
  };

  return (
    <div className="bg-primary ">
      <Container className="w-75">
        <Row className=" d-flex justify-content-center py-5 ">
          {err ? <ErrorFormValidation errs={err} /> : ""}

          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 fs-5 text-center text-uppercase ">
                    Choisi nouveau mot de passe
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={onSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Adresse Email
                        </Form.Label>
                        <Form.Control
                          onChange={addnewPass}
                          value={newPass.email}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicnewpassword"
                      >
                        <Form.Label>Nouveau mot de passe</Form.Label>
                        <Form.Control
                          onChange={addnewPass}
                          value={newPass.newPassword}
                          name="newPassword"
                          type="password"
                          placeholder="entrer un nouveau mot de passe"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Envoyer
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
