import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <Container className='mt-5  '>
        <Form className='w-50 m-auto'>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstname">
            <Form.Label column sm={2}>
              Firstename
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Firstname" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastname">
            <Form.Label column sm={2}>
              Lastname
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Lastname" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalTelephone">
            <Form.Label column sm={2}>
            Téléphone
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" placeholder="Telephone" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalObjet">
            <Form.Label column sm={2}>
            Objet
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Objet" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
            <Form.Label column sm={2}>
              Message
            </Form.Label>
            <Col sm={10}>
            <FloatingLabel controlId="floatingTextarea2" >
            <Form.Control
              as="textarea"
              placeholder="Entrer votre message"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
            </Col>
          </Form.Group>
      
            

          <Form.Group as={Row} className="mb-3 text-center">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant='succes' className='text-white' type="submit">Envoyer</Button>
            </Col>
          </Form.Group>
        </Form>
    </Container>
  );
}

export default Contact;