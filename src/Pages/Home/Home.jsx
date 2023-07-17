import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HSlider/HSlider'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HSlider />
      <Footer />
    </>
  )
}

export default Home