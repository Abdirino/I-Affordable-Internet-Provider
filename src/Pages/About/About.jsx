import React from 'react'
import './about.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <>
        <Navbar />
        <div className="about">
            <h1>About Us</h1>
        </div>
        <Footer />
    </>
  )
}

export default About