import React from "react";
import moment from "moment";
import { Container, Table } from "react-bootstrap";

const ProfileReservation = ({ userReservation }) => {
  return (
    <Container className="overflow-auto p-3 ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>date</th>
            <th>heure</th>
            <th>nombre convives</th>
            <th>allergies</th>
          </tr>
        </thead>
        <tbody>
          {!userReservation ? (
            <tr>
              <td>pas de données</td>
            </tr>
          ) : (
            userReservation.map((reservation) => {
              return (
                <tr key={reservation.id}>
                  <td>{moment(reservation.date).format("DD-MM-YYYY")}</td>
                  <td>{reservation.heure}</td>
                  <td>{reservation.nombre_couverts}</td>
                  <td>{reservation.allergies}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProfileReservation;
