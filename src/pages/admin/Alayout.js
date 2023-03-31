import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidbar from "../../components/admin/SidBar/Sidbar";
import { Outlet } from "react-router-dom";
import Aheader from "../../components/admin/Aheader/Aheader";

const Alayout = () => {
  return (
    <>
      <Aheader />
      <Row >
        <Col xl="2" className="bg-secondary   fs-6  d-flex justify-content-center vh-sm-100  " ><Sidbar /></Col>
        <Col xl="10" className="p-0"> <Outlet />  </Col>
      </Row>
    </>
  );
};

export default Alayout;
