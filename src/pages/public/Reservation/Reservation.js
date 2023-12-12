import React,{useEffect} from "react";
import { Container } from "react-bootstrap";
import Title from "../../../components/public/Global/Title";
import ReservationForm from "../../../components/public/Reservation/ReservationForm";
import { Helmet } from "react-helmet-async";



const Reservation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    
  }, [])

  return (
    <>
    <Helmet>
    <title>Réservation</title>
  
  </Helmet>
      <Title title="Réservation" />
      <Container className="py-5">
        <ReservationForm />
      </Container>
    </>
  );
};

export default Reservation;
