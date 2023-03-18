import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/public/Footer/Footer";
import NavBar from "../../components/public/NavBar/NavBar";
import Forgotpassword from "./ForgotPassword/Forgotpassword";
import ResetPassword from "./ForgotPassword/ResetPassword";
import VirifyCodeRestPassword from "./ForgotPassword/VirifyCodeRestPassword";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";

const RouterAuth = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/forgotPassword" element={<Forgotpassword />} />
        <Route path="/verifyResetCode" element={<VirifyCodeRestPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterAuth;
