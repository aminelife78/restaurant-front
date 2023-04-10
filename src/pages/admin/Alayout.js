import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidbar from "../../components/admin/SidBar/Sidbar";
import { Outlet } from "react-router-dom";
import Aheader from "../../components/admin/Aheader/Aheader";

const Alayout = () => {
  return (
    <>
      <Aheader />
      <Container fluid>
      <Row >
        <Col xl="2" sm="12" className="bg-secondary   fs-6  d-flex justify-content-center  " ><Sidbar /></Col>
        <Col xl="10" className="p-0 "> <Outlet />  </Col>
      </Row>
      </Container>
    </>
  );
};

export default Alayout;
