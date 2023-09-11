import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import aboutIMG from "../../Images/IAffordable-About.jpg";
// import aboutIMG2 from "../../Images/about-four-3-1.png";
import Reason from "../../Components/Reason/Reason";
import Advert from "../../Components/Advert/Advert";
import Background from "../../Components/Background/Background";

const About = () => {
  return (
    <>
      <Navbar />
      <Background />
      <div className="about">
        <div className="About">
          <div className="about-detail">
            <h2>About Us</h2>
            <h1>
              Connecting the World, <span>One Click at a Time - Your No. 1</span> Internet Solution!
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
              <li>Exclusive Priority Customer Care</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={aboutIMG} alt="" />
          </div>
        </div>
      </div>
      <div className="Vision">
        <div className="vision">
          <div className="v">
            <h1>Our <span>Vision</span></h1>
            <p>"To be the leading and <span>most trusted Internet
              Service Provider</span>, empowering individuals and businesses with seamless connectivity,
              innovation, and exceptional customer experiences."
            </p>
          </div>
          <div className="v">
            <h1>Our <span>Mission</span></h1>
            <p>"We are committed to delivering cutting-edge 
              internet solutions that exceed expectations, 
              innovating with emerging technologies to <span>lead the 
              industry</span>, and fostering community growth."
            </p>
          </div>
          <div className="v">
            <h1>Our <span>Goals</span></h1>
            <p>"Expand our coverage, enhance <span>speed and reliability</span>,
               and prioritize customer satisfaction to provide 
               reliable internet solutions for all."
            </p>
          </div>
        </div>
      </div>
      <Reason />
      {/* <div className="team">
        <h1>
          Meet <span>Our Team</span>
        </h1>
        <p>
          "Our team is a dedicated and skilled group of professionals committed
          to delivering reliable and high-speed internet solutions, ensuring
          seamless connectivity for all your online needs."
        </p>
      </div> */}
      {/* <div className="video-tour">
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
      </div> */}
      <Advert />
      <Footer />
    </>
  );
};

export default About;
