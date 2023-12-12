import React, { Fragment,useEffect } from "react";
import About from "../../../components/public/HomeComponents/About";
import Galerie from "../../../components/public/HomeComponents/Galerie";
import Header from "../../../components/public/HomeComponents/Header";
import Service from "../../../components/public/HomeComponents/Service";
import ImageReservation from "../../../components/public/HomeComponents/ImageReservation";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    
  }, [])
  return (
    <Fragment>
    <Helmet>
    <title>Ahmed-Kitchen</title>
  
  </Helmet>
      <Header />
      <About />
      <Galerie />
      <Service />
      <ImageReservation />
    </Fragment>
  );
};

export default Home;
