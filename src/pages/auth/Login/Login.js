import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { accountService } from "../../../_services/account_services";
import { useNavigate } from "react-router-dom";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const addLogin = (e) => {
    if (!e.target.value) {
      setErr("");
    }
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    accountService
      .login(login)
      .then((response) => {
        accountService.saveToken(response.data.token);
        if (accountService.getTokenInfo().userRole === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/reservation");
        }
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));
    setLogin({ email: "", password: "" });
  };

  return (
    <div className="bg-primary ">
      <Container>
        <Row className=" d-flex justify-content-center py-5 ">
          {err ? <ErrorFormValidation errs={err} /> : ""}

          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Connexion
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={onSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Adresse Email
                        </Form.Label>
                        <Form.Control
                          onChange={addLogin}
                          value={login.email}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={addLogin}
                          value={login.password}
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Se connecter
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        <Link
                          to="/auth/forgotPassword"
                          className="text-primary fw-bold"
                        >
                          Mot de passe oublier
                        </Link>
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center fs-6">
                        Vous n&apos;avez pas de compte?{" "}
                        <Link
                          to="/auth/register"
                          className="text-primary fw-bold fs-6"
                        >
                          Inscrivez-vous ici
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
};

export default Login;

// import React,{ useState } from "react";
// import axios from "axios"
// import {Form,Button} from "react-bootstrap"

// const Login = () => {
//   const [login, setLogin] = useState({email:"",password:"",role:""})
//   const addLogin = (e)=>{

//     setLogin({...login,[e.target.name]:e.target.value})
//   }

//   const onSubmit = (e)=>{
//     e.preventDefault()

//     axios.post("http://localhost:5000/api/v1/auth/login",login,{ headers: { "Content-Type": "application/json" } })
//     .then(response=>console.log(response))
//     .catch(error=>console.log(error))
//     setLogin({email:"",password:"",role:""})

//   }

//   return (
//     <div>
//         <Form onSubmit={onSubmit}>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Email address</Form.Label>
//       <Form.Control onChange={addLogin} type="email" name="email" placeholder="Enter email" value={login.email} />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicPassword">
//       <Form.Label>Password</Form.Label>
//       <Form.Control onChange={addLogin} type="password" name="password" placeholder="Password" value={login.password} />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicRole">
//     <Form.Label>Role</Form.Label>
//     <Form.Control onChange={addLogin} type="text" name="role" placeholder="Role" value={login.role} />
//   </Form.Group>

//     <Button variant="primary" type="submit">
//       Submit
//     </Button>
//   </Form>

//     </div>
//   )
// }

// export default Login
