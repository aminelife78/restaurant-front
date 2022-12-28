import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../../components/public/NavBar/NavBar'


const PbLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default PbLayout