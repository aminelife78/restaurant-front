import React, { useState, useContext, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { categoryContext } from "../../../store/categoryContext";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";
import { formuleservice } from "../../../_services/formule.services";

function Fupdate() {
  const navigate = useNavigate();
  const params = useParams();
  const index = params.id;

  const formuleContext = useContext(categoryContext);
  const [datas, setDatas] = useState({
    title: "",
    descreption: "",
    prix: "",
    menus_id: "",
  });

  const [errs, setErrs] = useState();

  useEffect(() => {
    formuleservice
      .getOneFormule(index)
      .then((res) => {
        setDatas(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [index]);

 

  const handleValue = (e) => {
    if (!e.target.value) {
      setErrs("");
    }
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formuleservice
      .updateFormule(index, datas)
      .then((response) => {
        formuleContext.getFormules()
        setDatas({
          title: "",
          descreption: "",
          prix: "",
          menus_id: "",
        });
        navigate("/admin/formule/liste");
      })
      .catch((error) => setErrs(error.response.data.errors[0].msg));
  };

  return (
    <Container  className="w-50  mt-5">
    {errs ? <ErrorFormValidation errs={errs} /> : ""}

      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col>
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
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDescreption">
                    <Form.Label className="text-center">Descreption</Form.Label>
                    <Form.Control
                      onChange={handleValue}
                      value={datas.descreption}
                      name="descreption"
                      type="text"
                      placeholder="Enter une descreption"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPrix">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                      onChange={handleValue}
                      value={datas.prix}
                      name="prix"
                      type="prix"
                      placeholder="Prix"
                      required
                    />
                  </Form.Group>

                  <Form.Select
                    value={datas.menus_id}
                    name="menus_id"
                    onChange={handleValue}
                    aria-label="Default select example"
                    required
                  >
                    <option>Choisi un menu</option>
                    {formuleContext.allMenus &&
                      formuleContext.allMenus.map((menu) => {
                        return (
                          <option key={menu.id} value={menu.id}>
                            {menu.name}
                          </option>
                        );
                      })}
                  </Form.Select>
                  <div className="d-grid pt-3">
                    <Button variant="primary" type="submit">
                      Modifier
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

export default Fupdate;
