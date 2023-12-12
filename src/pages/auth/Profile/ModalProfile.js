
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Userservice } from "../../../_services/user.services";
import { Form } from "react-bootstrap";

const ModalProfile = ({handleShow,user,id,getUserData}) => {

  const [datas, setDatas] = useState({
    username: user[0].username,
    email: user[0].email,
    nombre_convives: user[0].nombre_convives,
    phone: user[0].phone,
    allergies: user[0].allergies,
    role:user[0].role
  });

  const handleValue = (e) => {
  
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Userservice.updateUser(id, datas)
      .then((response) => {
        
        getUserData(id)
        handleShow()
        setDatas({
          username: "",
          email: "",
          role: "",
          nombre_convives: "",
          phone: "",
          allergies: "",
        });  
      
      


      })
    
  };
  return (
    <div className="modal show" style={{ display: "block" }}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleShow}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form  onSubmit={handleSubmit}>
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
              <Form.Label className="text-center">Adresse Email</Form.Label>
              <Form.Control
                onChange={handleValue}
                value={datas.email}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Telephone">
              <Form.Label className="text-center">Telephone</Form.Label>
              <Form.Control
                onChange={handleValue}
                value={datas.phone}
                name="phone"
                type="tel"
                placeholder="Numéro Telephone"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConvives">
              <Form.Label>
                Nombre convives <span className="text-muted">(facultatif)</span>
              </Form.Label>
              <Form.Control
                onChange={handleValue}
                value={datas.nombre_convives}
                name="nombre_convives"
                type="number"
                placeholder="Nombre convives"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label className="text-center">
                allergies <span className="text-muted">(facultatif)</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                onChange={handleValue}
                value={datas.allergies}
                name="allergies"
                type="textarea"
                placeholder="Enter allergies"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button type="submit" variant="primary" >
            Modifier
          </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
  
}

export default ModalProfile






