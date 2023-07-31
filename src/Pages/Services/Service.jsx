import React from "react";
import "./Service.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Quizzes from "../../Components/Quizzes/Quizzes";
import Advert from "../../Components/Advert/Advert";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="services">
        <div className="service">

          <div className="s-info">
            <i class="fa-solid fa-globe"></i>
            <h2>High Speed Internet</h2>
            <p>
              Speedy internet connectivity that provides significantly faster data
              transmission rates enables users to access and transfer data at
              much higher speeds, making online activities smoother, more
              efficient, and more enjoyable.
            </p>
            <div className="learn">
              <p>Learn More</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          
        </div>
      </div>
      <Advert />
      <Quizzes />
      <Footer />
    </>
  );
};

export default Service;
