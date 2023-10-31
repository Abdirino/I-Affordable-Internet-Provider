import React from 'react'
import './Packages.css'
import Navbar from '../../Components/Navbar/Navbar'
import Plan from '../../Components/Plan/Plan'
import Footer from '../../Components/Footer/Footer'
import Background from '../../Components/Background/Background'
import { Partytown } from '@builder.io/partytown/react'

const Packages = () => {
  return (
    <>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <Navbar />
        <Background />
        <Plan />
        <Footer />
    </>
  )
}

export default Packages