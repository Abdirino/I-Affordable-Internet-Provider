import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import aboutIMG from "../../Images/AboutSec.webp";
import Reason from "../../Components/Reason/Reason";
import Background from "../../Components/Background/Background";
import Reveal from "../../Components/Reveal/Reveal";
import { Partytown } from "@builder.io/partytown/react";
import Quizzes from "../../Components/Quizzes/Quizzes";

const About = () => {
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Navbar />
      <Background />
      <div className="about">
        <div className="About">
          <div className="about-detail">
            <Reveal>
              <h2>About Us</h2>
            </Reveal>
            <Reveal>
              <h1>
                Elevate Your <span>Digital</span> Experience:{" "}
                <span>IAffordableNet</span>, Where Speed Meets{" "}
                <span>Innovation.</span>
              </h1>
            </Reveal>
            <Reveal>
              <p>
                Upgrade to lightning fast internet speed and unlock a world of
                seamless online experience with our high speed internet solution.
              </p>
            </Reveal>
            <Reveal>
              <div className="about-head">
                <i class="fa-solid fa-check-to-slot"></i>
                <h3>Reliable and Fast Internet</h3>
              </div>
              <li>💠 Get a reliable and high-speed internet connection.</li>
              <li>💠 Transparent pricing with no hidden fees.</li>
            </Reveal>
            <Reveal>
              <div className="about-head">
                <i class="fa-solid fa-check-to-slot"></i>
                <h3>Exceptional Support</h3>
              </div>
              <li>💠 12/7 customer support.</li>
              <li>💠 Transparent policies and practices.</li>
              <li>💠 Diverse plans to meet different needs.</li>
            </Reveal>
          </div>
          <div className="about-image">
            <img src={aboutIMG} alt="" />
          </div>
        </div>
      </div>
      <div className="Vision">
        <div className="vision">
          <Reveal>
            <div className="v">
              <h1>
                Our <span>Vision</span>
              </h1>
              <p>
                "To be the leading and{" "}
                <span>most trusted Internet Service Provider</span>, empowering
                individuals and businesses with seamless connectivity and
                exceptional customer experiences."
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="v">
              <h1>
                Our <span>Mission</span>
              </h1>
              <p>
                "We are committed to delivering cutting-edge internet solutions
                that exceed expectations, innovating with emerging technologies
                to <span>lead the industry</span>, and fostering community
                growth."
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="v">
              <h1>
                Our <span>Goals</span>
              </h1>
              <p>
                "Expand our coverage, enhance <span>speed and reliability</span>
                , and prioritize customer satisfaction to provide reliable
                internet solutions for all."
              </p>
            </div>
          </Reveal>
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
      <Quizzes />
      <Footer />
    </>
  );
};

export default About;
