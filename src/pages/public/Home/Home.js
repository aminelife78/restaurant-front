import React, { Fragment } from 'react'
import About from '../../../components/public/HomeComponents/About'
import Galerie from '../../../components/public/HomeComponents/Galerie'
import Header from "../../../components/public/HomeComponents/Header"
import Service from '../../../components/public/HomeComponents/Service'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <About />
        <Service />
        <Galerie />
        
    </Fragment>
  )
}

export default Home
