import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { categoryContext } from "../../../store/categoryContext";
import { useNavigate } from "react-router-dom";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";
import { Tableservice } from "../../../_services/tables.services";

const Tadd = () => {
  const navigate = useNavigate();
  const tableContext = useContext(categoryContext);


  const [datas, setDatas] = useState({
    
    nbr_convive: "",
    time: "",
    temps:"",
  })
  const [errs, setErrs] = useState();


  const handleChange = (e)=>{
    setDatas({...datas,[e.target.name]:e.target.value})
  }

  



  const onsubmit = (e) => {
    e.preventDefault();

    Tableservice.addTable(datas)
      .then((response) => {
        tableContext.getTables();

        setErrs("");
        navigate("/admin/tables/liste");
      })
      .catch((error) => {
        setErrs(error.response.data.errors[0].msg);
      });
  };

  return (
    <Container className="w-50 h-50 mt-5">
      {errs ? <ErrorFormValidation errs={errs} /> : ""}
      <Form onSubmit={onsubmit}>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter l'heure"
            onChange={handleChange}
            name="time"
            value={datas.time}
          />
        </Form.Group>
        <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter le nombre de couverts disponibles"
            onChange={handleChange}
            name="nbr_convive"
            value={datas.nbr_convive}
          />
          </Form.Group>
          <Form.Group>
          <Form.Select
            onChange={handleChange}
            name="temps"
            value={datas.temps}
            aria-label="Default select example"
            required
          >
            <option value="">midi ou soir</option>
            <option value="midi">midi</option>
            <option value="soir">soir</option>
          </Form.Select>
          </Form.Group>
       

        <Button variant="primary" type="submit" className="my-4">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
};

export default Tadd;
