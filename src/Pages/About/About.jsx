import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import aboutIMG from "../../Images/IAffordable-About.jpg";
// import aboutIMG2 from "../../Images/about-four-3-1.png";
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
      <div className="vision">
        <div className="v">
          <h1>Our Vision</h1>
          <p>"To be the leading and most trusted Internet
            Service Provider, empowering individuals and businesses with seamless connectivity,
            innovation, and exceptional customer experiences."
          </p>
        </div>
        <div className="v">
          <h1>Our Mission</h1>
          <li>Deliver cutting-edge and reliable internet solutions that exceed customer expectations, ensuring
            high-speed connectivity for homes and businesses.
          </li>
          <li>Strive to continuously innovate and evolve our services, embracing emerging
            technologies to stay at the forefront of the industry.
          </li>
          <li>Contribute positively to the communities we serve, promoting digital inclusion and
            supporting initiatives that drive progress and education.
          </li>
        </div>
        <div className="v">
          <h1>Our Goals</h1>
          <li>Expand Coverage: Extend our network infrastructure
            to reach underserved areas, ensuring that more communities have access to reliable internet connectivity.
          </li>
          <li>Enhance Speed and Reliability: Continuously invest
            in network upgrades and advanced technologies to deliver faster and more stable internet services.
          </li>
          <li>Customer Satisfaction: Strive to achieve and
            maintain high levels of customer satisfaction by offering prompt and efficient support and addressing customer concerns proactively.
          </li>
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
