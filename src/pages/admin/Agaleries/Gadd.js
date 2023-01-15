import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrlProd from "../../../Api/baseUrl";
import { accountService } from "../../../_services/account_services";

const Gadd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const setdata = (e) => {
    setTitle(e.target.value);
  };

  const setimgfile = (e) => {
    setImage(e.target.files[0]);
  };

  const addUserData = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    console.log(formData);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accountService.getToken()}`,
      },
    };

    axios
      .post(`${baseUrlProd}/api/v1/galerie`, formData, config)
      .then((response) => {
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

        <Form onSubmit={addUserData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>title</Form.Label>
            <Form.Control type="text" name="title" onChange={setdata} />
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

export default Gadd;
