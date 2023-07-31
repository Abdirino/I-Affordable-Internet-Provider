import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import aboutIMG from "../../Images/IAffordable-About.jpg";
import Reason from "../../Components/Reason/Reason";
import Advert from "../../Components/Advert/Advert";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="About">
          <div className="about-detail">
            <h2>About Us</h2>
            <h1>
              We are <span>no. 1 internet service provider</span> company in
              Kenya.
            </h1>
            <p>
              We’re committed to making Internet simple for all clients to
              connect across our own network. Our vision is to lead the market
              with services that harness the potential of the Internet.
            </p>
            <ul>
              <li>Free Installation</li>
              <li>Internet Service Solutions</li>
              <li>Top Quality Service With Affordable Pricing</li>
              <li>Live Video Streaming With Ultra Fast Speed</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={aboutIMG} alt="" />
          </div>
        </div>
      </div>
      <Reason />
      <div className="team">
        <h1>
          Meet <span>Our Team</span>
        </h1>
        <p>
          "Our team is a dedicated and skilled group of professionals committed
          to delivering reliable and high-speed internet solutions, ensuring
          seamless connectivity for all your online needs."
        </p>
        <div className="people">
          {/* <div className="person">
            <img src={person1} alt="" />
            <h2>Abdulaziz Abdulwahid</h2>
            <p>(Founder)</p>
          </div> */}
        </div>
      </div>
      <div className="video-tour">
        <h1>
          Video <span>Tour</span>
        </h1>
        <p>
          "Discover how iAffordable, your trusted internet service provider,
          offers unbeatable value and exceptional connectivity in our latest
          video showcasing our top-notch services and satisfied customers."
        </p>
        <video
          controlsList=""
          poster="../../Images/IAffordable Home 1.jpg"
          className="video"
        >
          <source />
        </video>
      </div>
      <Advert />
      <Footer />
    </>
  );
};

export default About;
