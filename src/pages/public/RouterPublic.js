import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import PbLayout from './PbLayout'
import Home from "./Home/Home"
import Carte from "./Carte/Carte"
import Menu from "./Menu/Menu"
import Contact from "./Contact/Contact"
import Reservation from "./Reservation/Reservation"
import ErrorPage from "../../utils/ErrorPage.js"



const RouterPublic = () => {
  return (
    
      <Routes>
          <Route element={<PbLayout />}>
              <Route path="/" element={<Navigate to="home" />} />  
              <Route path="/home" element={<Home />} />
              <Route path="/carte" element={<Carte />} /> 
              <Route path="/menu" element={<Menu />} /> 
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/reservation" element={<Reservation />} /> 
               <Route path='*' element={<ErrorPage />} />  
          </Route>  
      </Routes>
    
  )
}

export default RouterPublic

