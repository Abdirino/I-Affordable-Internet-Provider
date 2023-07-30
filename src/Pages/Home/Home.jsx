import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HSlider/HSlider'
import Footer from '../../Components/Footer/Footer'
import SAbout from '../../Components/S-About/SAbout'
import Plan from '../../Components/Plan/Plan'
import Advert from '../../Components/Advert/Advert'
import Quizzes from '../../Components/Quizzes/Quizzes'

const Home = () => {
  return (
    <>
      <Navbar />
      <HSlider />
      <SAbout />
      <Plan />
      <Quizzes />
      <Advert />
      <Footer />
    </>
  )
}

export default Home