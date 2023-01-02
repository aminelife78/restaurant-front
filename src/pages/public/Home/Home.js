import React from 'react'
import Footer from '../../../components/public/Footer/Footer'
import About from '../../../components/public/HomeComponents/About'
import Galerie from '../../../components/public/HomeComponents/Galerie'
import Header from "../../../components/public/HomeComponents/Header"

const Home = () => {
  return (
    <div className='bg-dark overflow-hidden'>
        <Header />
        <About />
        <Galerie />
        <Footer />
    </div>
  )
}

export default Home
