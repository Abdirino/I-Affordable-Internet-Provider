import React from "react";
import "./services.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Plan from "../../Components/Plan/Plan";
import Quizzes from "../../Components/Quizzes/Quizzes";

import ServiceIMG2 from "../../Images/Service-2.png";
import { Link } from "react-router-dom";
import Background from "../../Components/Background/Background";
import Reveal from "../../Components/Reveal/Reveal";
import { Partytown } from "@builder.io/partytown/react";

const Service2 = () => {
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Navbar />
      <Background />
      <div className="Services">
        <div className="S-head">
          <Link
            to="/service"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <h2>Services</h2>
          </Link>
          <h1>||</h1>
          <h1>
            Free <span>Quick</span> Installation
          </h1>
        </div>
        <div className="Service">
          <div className="S-detail">
            <Reveal>
              <h2>
                Enjoy the best services with our free installation for a
                <span> seamless experience!</span>
              </h2>
            </Reveal>
            <Reveal>
              <p>
                As your trusted Internet Service Provider (ISP), we are
                delighted to offer you the fantastic benefit of "free
                installation." This means that when you subscribe to our
                high-speed internet service, you won't incur any additional
                charges for the setup and installation process.With "free
                installation," we aim to make it easy for you to get connected
                to our reliable internet service without worrying about any
                upfront installation costs.
              </p>
            </Reveal>
            <Reveal>
              <span>
                Our team of skilled technicians will handle everything to ensure
                a seamless and hassle-free experience for you. We'll take care
                of installing the necessary equipment, configuring your network,
                and ensuring that your internet connection is up and running
                smoothly.
              </span>
            </Reveal>
            <Reveal>
              <ul>
                <li>Home Services</li>
                <li>Eligibility and Terms</li>
                <li>Up-Selling Opportunities</li>
                <li>Customer Satisfaction</li>
              </ul>
            </Reveal>
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
