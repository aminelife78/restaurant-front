import React from "react";
import moment from "moment";
import { Container, Table } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";
import BtnDelete from "../../../components/admin/admGlobal/Buttons";
import { reservationservice } from "../../../_services/reservation.services";


const ProfileReservation = ({ userReservation,allReservations }) => {
  // suprimer une reservation
  const deleteReservation = (index) => {
    reservationservice
      .deleteReservation(index)
      .then((res) => {
        allReservations()
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
      });
  };
  return (
    <Container className="overflow-auto p-3 ">
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>date</th>
            <th>heure</th>
            <th>nombre convives</th>
            <th>allergies</th>
            <th>Suprimer</th>
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
                <tr key={reservation.id} className="text-center">
                  <td>{moment(reservation.date).format("DD-MM-YYYY")}</td>
                  <td>{reservation.heure}</td>
                  <td>{reservation.nombre_couverts}</td>
                  <td>{reservation.allergies}</td>
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
    </Container>
  );
};

export default ProfileReservation;
