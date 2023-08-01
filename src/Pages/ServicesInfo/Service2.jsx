import React from 'react'
import './services.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Plan from '../../Components/Plan/Plan'
import Quizzes from '../../Components/Quizzes/Quizzes'

const Service2 = () => {
  return (
    <>
        <Navbar />
        <div className="Service">
            <h1>Service 2</h1>
        </div>
        <Plan />
        <Quizzes />
        <Footer />
    </>
  )
}

export default Service2