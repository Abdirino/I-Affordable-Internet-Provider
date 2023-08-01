import React from "react";
import "./services.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Plan from "../../Components/Plan/Plan";
import Quizzes from "../../Components/Quizzes/Quizzes";

import ServiceIMG2 from "../../Images/Service-2.png";

const Service2 = () => {
  return (
    <>
      <Navbar />
      <div className="Services">
        <h1>
          Free <span>Installation</span>
        </h1>
        <div className="Service">
          <div className="S-detail">
            <h2>
              Enjoy the best services with our free installation for a
              <span> seamless experience!</span>
            </h2>
            <p>
              As your trusted Internet Service Provider (ISP), we are delighted
              to offer you the fantastic benefit of "free installation." This
              means that when you subscribe to our high-speed internet service,
              you won't incur any additional charges for the setup and
              installation process.With "free installation," we aim to make it
              easy for you to get connected to our reliable internet service
              without worrying about any upfront installation costs.
            </p>
            <i>
              Our team of skilled technicians will handle everything to ensure a
              seamless and hassle-free experience for you. We'll take care of
              installing the necessary equipment, configuring your network, and
              ensuring that your internet connection is up and running smoothly.
            </i>
            <ul>
              <li>Home Services</li>
              <li>Eligibility and Terms</li>
              <li>Upselling Opportunities</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>
          <div className="S-image">
            <img src={ServiceIMG2} alt="" />
          </div>
        </div>
      </div>
      <Plan />
      <Quizzes />
      <Footer />
    </>
  );
};

export default Service2;
