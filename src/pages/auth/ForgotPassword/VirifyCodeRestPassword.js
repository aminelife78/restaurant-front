import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { accountService } from "../../../_services/account_services";
import { useNavigate } from "react-router-dom";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const VirifyCodeRestPassword = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState({ resetCode: "" });
  const [err, setErr] = useState("");

  const handleCode = (e) => {
    if (!e.target.value) {
      setErr("");
    }
    setCode({ ...code, resetCode: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    accountService
      .verifyPassResetCode(code)
      .then((response) => {
        navigate("/auth/resetPassword");
        setCode("");
      })
      .catch((error) => {
        setErr(error.response.data.message);
      });
  };

  return (
    <Container className="w-75 ">
      <Row className=" d-flex justify-content-center py-5  ">
        {err ? <ErrorFormValidation errs={err} /> : ""}

        <Col md={8} lg={6} xs={12}>
          <Card className="px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-4 fs-5 text-center text-uppercase ">
                  Nous envoyons un code à votre email
                </h2>
                <div className="mb-3">
                  <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fs-6">
                        Entrez le code de vérification à 6 chiffres envoyé à
                        votre email{" "}
                      </Form.Label>
                      <Form.Control
                        onChange={handleCode}
                        value={code.resetCode}
                        type="text"
                        placeholder="Entrez le code "
                      />
                    </Form.Group>

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
  );
};

export default VirifyCodeRestPassword;
