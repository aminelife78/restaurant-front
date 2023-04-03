import React, { useState,useEffect ,useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { galerieservice } from "../../../_services/galerie.services";
import { categoryContext } from "../../../store/categoryContext";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";



const Gupdate = () => {
  const navigate = useNavigate();
  const galerieContext = useContext(categoryContext);

  const params = useParams();
  const index = params.id;
  

  // const [data, setData] = useState();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [errs, setErrs] = useState("");

  

  useEffect(
    function () {
      galerieservice.getOneGalerie(index).then((response) => {
        const resultTab = response.data.data[0];
        setTitle(resultTab.title);
        setImage(resultTab.image)
              
      });
    },
    [index]
  );



  const setdata = (e)=>{
    if (!e.target.value) {
      setErrs("");
    }
    setTitle(e.target.value)
   
  }

  const setimgfile = (e)=>{
    setImage(e.target.files[0]) 
   
  }


  const onsubmit = (e) => {
    e.preventDefault();
  
    let formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);

 

    galerieservice.updateGalerie(index,formData)
      .then((response) => {
        galerieContext.getGaleries()
        
        navigate("/admin/galerie/liste");
      })
      .catch((error) => {
        setErrs(error.response.data.errors[0].msg)

      });
  };

  
  return (
    <>
      <div className="container w-50 mt-3">
      {errs ? <ErrorFormValidation errs={errs} /> : ""}

        <Form onSubmit={onsubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>titre</Form.Label>
            <Form.Control type="text" name="title" value={title}  onChange={setdata} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="image" onChange={setimgfile} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Gupdate;
