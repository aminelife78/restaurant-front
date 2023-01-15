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
        <Col xl="2" className="bg-primary" ><Sidbar /></Col>
        <Col xl="10" > <Outlet />  </Col>
      </Row>
    </>
  );
};

export default Alayout;
