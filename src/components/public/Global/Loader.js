import React from "react";
import { Container } from "react-bootstrap";
import {FadeLoader} from "react-spinners";


const Loader = () => {
  return (
    <Container className="d-flex justify-content-center py-5">
      <div className="mx-auto" >
          <FadeLoader color="#36d7b7"  />
      </div>
    </Container>
  );
};

export default Loader;
