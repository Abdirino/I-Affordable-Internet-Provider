import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HSlider/HSlider'
import Footer from '../../Components/Footer/Footer'
import SAbout from '../../Components/S-About/SAbout'
import Plan from '../../Components/Plan/Plan'
import Reason from '../../Components/Reason/Reason'
import Advert from '../../Components/Advert/Advert'

const Home = () => {
  return (
    <>
      <Navbar />
      <HSlider />
      <SAbout />
      <Plan />
      <Reason />
      <Advert />
      <Footer />
    </>
  )
}

export default Home