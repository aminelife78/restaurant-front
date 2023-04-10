import React,{useEffect} from "react";
import { Container } from "react-bootstrap";
import Title from "../../../components/public/Global/Title";
import FormReservation from "../../../components/public/Reservation/FormReservation";



const Reservation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    
  }, [])

  return (
    <>
      <Title title="Réservation" />
      <Container className="py-5">
        <FormReservation />
      </Container>
    </>
  );
};

export default Reservation;
