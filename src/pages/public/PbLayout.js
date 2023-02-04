import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/public/Footer/Footer";
import NavBar from "../../components/public/NavBar/NavBar";

const PbLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PbLayout;
