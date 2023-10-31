import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HSlider/HSlider'
import Footer from '../../Components/Footer/Footer'
import Plan from '../../Components/Plan/Plan'
import Advert from '../../Components/Advert/Advert'
import Quizzes from '../../Components/Quizzes/Quizzes'
import { Partytown } from '@builder.io/partytown/react'

const Home = () => {
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Navbar />
      <HSlider />
      <Plan />
      <Quizzes />
      <Advert />
      <Footer />
    </>
  )
}

export default Home