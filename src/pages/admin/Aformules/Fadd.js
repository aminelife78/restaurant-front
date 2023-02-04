import React, { useState,useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { categoryContext } from "../../../store/categoryContext";
import { formuleservice } from "../../../_services/formule.services";

function Fadd() {
  const navigate = useNavigate();
  const categoriesContext = useContext(categoryContext);
  

  const [datas, setDatas] = useState({
    title: "",
    descreption: "",
    prix: "",
    menus_id: "",
    
  });

  const handleValue = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  formuleservice.addFormule(datas)
      .then((response) => {
        const data = response.data.data
        categoriesContext.setAllFormules(data)
        navigate("/admin/formule/liste")
          setDatas({
            title: "",
            descreption: "",
            prix: "",
            menus_id: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col >
            <Card className="px-4">
              <Card.Body>
                
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label className="text-center">Titre</Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.title}
                          name="title"
                          type="text"
                          placeholder="Enter Titre"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicDescreption">
                        <Form.Label className="text-center">
                          Descreption 
                        </Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.descreption}
                          name="descreption"
                          type="text"
                          placeholder="Enter une descreption"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPrix"
                      >
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                          onChange={handleValue}
                          value={datas.prix}
                          name="prix"
                          type="prix"
                          placeholder="Prix"
                        />
                      </Form.Group>
                     
                      <Form.Select
                      value={datas.menus_id}
                      name="menus_id"
                      onChange={handleValue}
                      aria-label="Default select example"
                    >
                      <option>Choisi un menu</option>
                      {categoriesContext.allMenus &&
                        categoriesContext.allMenus.map((menu) => {
                          return (
                            <option key={menu.id} value={menu.id}>
                              {menu.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                      <div className="d-grid pt-3">
                        <Button variant="primary" type="submit">
                          Ajouter
                        </Button>
                      </div>
                    </Form>
               
                  </div>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  
  );
}

export default Fadd;
