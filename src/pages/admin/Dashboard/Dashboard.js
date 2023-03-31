import React from "react";
import "./Dashboard.scss"
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="img-dashboard" >
      <Row>
        <Col>
          <h2 className="text-center fw-bold fs-1 text-primary">Tableau de bord</h2>
          <h3 className="text-center fw-bold fs-3 text-succes ">Restaurant Ahmed Kitchen</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
