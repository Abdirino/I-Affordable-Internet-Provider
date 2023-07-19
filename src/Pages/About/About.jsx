import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import aboutIMG from "../../Images/IAffordable-About.jpg";
import Reason from "../../Components/Reason/Reason";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="About">
          <div className="about-detail">
            <h1>
              Who <span>We Are</span>
            </h1>
            <h3>
              🔷 We are the largest Internet Service Provider in the market
            </h3>
            <p>
              We’re committed to making Internet simple for all clients to
              connect across both our own network and the National Network. Our
              vision is to lead the market wit services that harness the
              potential of the Internet and then differentiate with an ning
              customer service. We employ more than 2,500 enthusiastic.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutIMG} alt="" />
          </div>
        </div>
      </div>
      <Reason />
      <div className="team"></div>
      <Footer />
    </>
  );
};

export default About;
