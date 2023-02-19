import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";
import "./Global.scss";

const Loader = ({ loadingMsg, styling }) => {
  return (
    <>
    <p>Wait...</p>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </>
  );
};

export default Loader;
