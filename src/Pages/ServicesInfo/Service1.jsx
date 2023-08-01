import React from "react";
import "./services.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Plan from "../../Components/Plan/Plan";
import Quizzes from "../../Components/Quizzes/Quizzes";

import ServiceIMG1 from "../../Images/Service-1.png";

const Service1 = () => {
  return (
    <>
      <Navbar />
      <div className="Services">
        <h1>
          High <span>Speed</span> Internet
        </h1>
        <div className="Service">
          <div className="S-detail">
            <h2>
              Enjoy high speed internet up to 10Mbps download speed from
              <span> Ksh.2500/m</span>
            </h2>
            <p>
              High-speed internet, also known as broadband internet, refers to
              internet connections that provide significantly faster data
              transmission rates than traditional dial-up connections. These
              high speeds enable users to access online content, download files,
              stream media, play online games, and engage in video conferencing
              with minimal delays and buffering.
            </p>
            <i>
              We offer Satellite Internet which Utilizes satellites in space to
              transmit data to and from a dish installed at the user's location,
              making it accessible even in remote areas.
            </i>
            <ul>
              <li>Wifi Control</li>
              <li>Pro Installation</li>
              <li>AIAP Security</li>
              <li>Wall-to-wall fast Wifi</li>
            </ul>
          </div>
          <div className="S-image">
            <img src={ServiceIMG1} alt="" />
          </div>
        </div>
      </div>
      <Plan />
      <Quizzes />
      <Footer />
    </>
  );
};

export default Service1;
