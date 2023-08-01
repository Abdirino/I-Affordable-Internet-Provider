import React from 'react'
import './services.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Plan from '../../Components/Plan/Plan'
import Quizzes from '../../Components/Quizzes/Quizzes'

const Service1 = () => {
  return (
    <>
        <Navbar />
        <div className="Services">
            <div className="Service">
                <div className="S-detail"></div>
                <div className="S-image"></div>
            </div>
        </div>
        <Plan />
        <Quizzes />
        <Footer />
    </>
  )
}

export default Service1