import React, { useState,useEffect ,useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { galerieservice } from "../../../_services/galerie.services";
import { categoryContext } from "../../../store/categoryContext";



const Gupdate = () => {
  const navigate = useNavigate();
  const galerieContext = useContext(categoryContext);

  const params = useParams();
  const index = params.id;
  

  // const [data, setData] = useState();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  

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
        const datas = response.data.data
        galerieContext.setPhotos(datas)
        
        navigate("/admin/galerie/liste");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>

        <Form onSubmit={onsubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>title</Form.Label>
            <Form.Control type="text" name="title" value={title}  onChange={setdata} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" name="image" onChange={setimgfile} />
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
