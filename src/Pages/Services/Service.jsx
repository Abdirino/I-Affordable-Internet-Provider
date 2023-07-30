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
        <div className="service"></div>
      </div>
      <Advert />
      <Quizzes />
      <Footer />
    </>
  );
};

export default Service;
