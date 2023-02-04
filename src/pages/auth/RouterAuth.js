import React from 'react'
import {Routes,Route} from "react-router-dom"
import Footer from '../../components/public/Footer/Footer'
import NavBar from '../../components/public/NavBar/NavBar'
import Login from './Login/Login'
import Register from './Register/Register'

const RouterAuth = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route index element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default RouterAuth