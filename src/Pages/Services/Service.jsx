import React from "react";
import "./Service.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Quizzes from "../../Components/Quizzes/Quizzes";
import Advert from "../../Components/Advert/Advert";
import { Link } from "react-router-dom";

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
              Speedy internet connectivity that provides significantly faster
              data transmission rates enables users to access and transfer data
              at much higher speeds, making online activities smoother, more
              efficient, and more enjoyable.
            </p>
            <Link to="/service1">
              <div className="learn">
                <p>Learn More</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          </div>

          <div className="s-info">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <h2>Free Installation</h2>
            <p>
              When you subscribe to our internet service, the installation
              process typically involves setting up the necessary equipment and
              configuring the network to establish an internet connection at
              your home or business. This process may require the installation
              of modems, routers, cables, or fiber optic equipment, depending on
              the type of internet service you choose.
            </p>
            <Link to="/service2">
              <div className="learn">
                <p>Learn More</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          </div>

          <div className="s-info">
            <i class="fa-solid fa-server"></i>
            <h2>Dedicated Server</h2>
            <p>
              We offer dedicated server which has exclusive access to the
              server's processing power, memory, storage, and network bandwidth.
              This level of isolation and control makes dedicated servers ideal
              for websites or applications with high traffic volumes,
              resource-intensive tasks, specific security requirements, or
              customized configurations.
            </p>
            <Link to="/service3">
              <div className="learn">
                <p>Learn More</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
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
