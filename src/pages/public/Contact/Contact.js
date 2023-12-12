import { useRef } from "react";
import { Container, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { accountService } from "../../../_services/account_services";
import { Helmet } from "react-helmet-async";

function Contact() {
  const prenom = useRef()
  const mail = useRef()
  const subject = useRef()
  const message = useRef()

  const addContact = (e) => {
    e.preventDefault();
    const myDatas = {
      prenom: prenom.current.value,
      mail: mail.current.value,
      subject: subject.current.value,
      message: message.current.value,
    }
    accountService
      .contact(myDatas)
      .then((response) => {
        prenom.current.value=""
        mail.current.value=""
        subject.current.value=""
        message.current.value=""


      })
      .catch((err) => console.log(err));
  };


  return (
    <Container className="mt-5  ">
    <Helmet>
    <title>Contact</title>
  
  </Helmet>
      <Form className="w-50 m-auto" onSubmit={addContact}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalLastname"
        >
          <Form.Label column sm={2}>
            Prenom
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={prenom}
              type="text"
              placeholder="Lastname"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            ref={mail}
              type="email"
              placeholder="Email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalObjet">
          <Form.Label column sm={2}>
            Objet
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            ref={subject}
              type="text"
              placeholder="Objet"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control
                as="textarea"
                ref={message}
                placeholder="Entrer votre message"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 text-center">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="succes" className="text-white" type="submit">
              Envoyer
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contact;
