import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HSlider/HSlider'
import Footer from '../../Components/Footer/Footer'
import SAbout from '../../Components/S-About/SAbout'
import Plan from '../../Components/Plan/Plan'

const Home = () => {
  return (
    <>
      <Navbar />
      <HSlider />
      <SAbout />
      <Plan />
      <Footer />
    </>
  )
}

export default Home