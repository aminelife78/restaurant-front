import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import baseUrlProd from "../../../Api/baseUrl";
import { accountService } from "../../../_services/account_services";

const Gupdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const index = params.id;

  // const [data, setData] = useState();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  

  useEffect(
    function () {
      axios.get(`${baseUrlProd}/api/v1/galerie/${index}`).then((response) => {
        const resultTab = response.data.result[0];
        setTitle(title);
        setImage(image)
        console.log(resultTab);
      });
    },
    [index,image,title]
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

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accountService.getToken()}`
      },
    };

    axios
      .put(`${baseUrlProd}/api/v1/galerie/${index}`, formData, config)
      .then((response) => {
        navigate("/admin/galerie/liste");
        console.log(formData);
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
            <Form.Control type="text" name="title" value={title} onChange={setdata} />
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
