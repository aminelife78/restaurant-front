import React,{useState} from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ErrorFormValidation from '../../../utils/ErrorFormValidation'
import { accountService } from '../../../_services/account_services'



const Forgotpassword = () => {
const navigate = useNavigate()
  const [forgot, setForgot] = useState({email:""})
  const [err, setErr] = useState("");

  const handleEmail = (e)=>{
    if (!e.target.value) {
      setErr("");
    }
    setForgot({email:e.target.value})
  }

  const onsubmit = (e)=>{
    e.preventDefault()
    accountService.forgot(forgot).then((response=>{
      navigate("/auth/verifyResetCode")
      setForgot({email:""})
    })).catch(error=>setErr(error.response.data.message))
  }


  return (
    <Container className="w-75">
    <Row className=" d-flex justify-content-center py-5 ">
    {err ? <ErrorFormValidation errs={err} /> : ""}


      <Col md={8} lg={6} xs={12}>
        <Card className="px-4">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-4 text-center text-uppercase ">
              Mot de passe oublié?
              </h2>
              <div className="mb-3">
                <Form onSubmit={onsubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-6">
                    Veuillez entrer votre adresse e-mail
                    </Form.Label>
                    <Form.Control
                      onChange={handleEmail}
                      value={forgot.email}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

             
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                     réinitialiser
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
  )
}

export default Forgotpassword
