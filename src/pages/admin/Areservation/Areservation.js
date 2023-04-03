import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import BtnDelete from "../../../components/admin/admGlobal/Buttons";
import { reservationservice } from "../../../_services/reservation.services";
import { BsTrashFill } from "react-icons/bs";
import moment from "moment";

const Areservation = () => {
  const [allReservations, setAllReservations] = useState([]);

  const getReservations = () => {
    reservationservice
      .getAllReservation()
      .then((response) => {
        const resultTab = response.data.data;
        setAllReservations(resultTab);
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  useEffect(function () {
    getReservations();
  }, []);

  // suprimer une reservation

  const deleteReservation = (index) => {
    reservationservice
      .deleteReservation(index)
      .then((res) => {
        getReservations();
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };

  return (
    <Container>
      <Row className="  m-2 ">
        <Col className="overflow-auto"  xs="12">
          <Table striped bordered hover className="m-2" >
            <thead>
              <tr>
                <th>id</th>
                <th>date</th>
                <th>heure</th>
                <th>nombre couverts</th>
                <th>allergies</th>
                <th>Nom</th>
                <th>email</th>
                <th>telephone</th>
                <th>suprimer</th>
              </tr>
            </thead>
            <tbody>
              {!allReservations ? (
                <tr>
                  <td>pas de données</td>
                </tr>
              ) : (
                allReservations.map((reservation) => {
                  return (
                    <tr key={reservation.id}>
                      <td>{reservation.id}</td>
                      <td>{moment(reservation.date).format("DD-MM-YYYY")}</td>
                      <td>{reservation.heure}</td>
                      <td>{reservation.nombre_couverts}</td>
                      <td>{reservation.allergies}</td>
                      <td>{reservation.nom}</td>
                      <td>{reservation.email}</td>
                      <td>{reservation.phone}</td>
                      <td className="d-flex justify-content-center">
                        <BtnDelete
                          handleBtn={deleteReservation}
                          idx={reservation.id}
                          color="dark"
                        >
                          <BsTrashFill />
                        </BtnDelete>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Areservation;
