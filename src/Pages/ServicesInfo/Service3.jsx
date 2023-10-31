import React from "react";
import "./services.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Plan from "../../Components/Plan/Plan";
import Quizzes from "../../Components/Quizzes/Quizzes";

import ServiceIMG3 from "../../Images/Service-3.png";
import { Link } from "react-router-dom";
import Background from "../../Components/Background/Background";
import Reveal from "../../Components/Reveal/Reveal";
import { Partytown } from "@builder.io/partytown/react";

const Service3 = () => {
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
            Premium <span>Dedicated</span> Server
          </h1>
        </div>
        <div className="Service">
          <div className="S-detail">
            <Reveal>
              <h2>
                Extreme power, flexibility and control with world class
                <span> support</span>
              </h2>
            </Reveal>
            <Reveal>
              <p>
                A dedicated server is a type of web hosting service that
                provides exclusive use of an entire physical server for a single
                client or organization. Unlike shared hosting, where multiple
                websites share the resources of a single server, a dedicated
                server ensures that all the server's computing power, memory,
                storage, and network bandwidth are dedicated solely to the needs
                of the client.
              </p>
            </Reveal>
            <Reveal>
              <i>
                This exclusive access to resources offers numerous advantages,
                making dedicated servers a preferred choice for businesses and
                individuals with specific hosting requirements.
              </i>
            </Reveal>
            <Reveal>
              <ul>
                <li>Server Hardware and Resources</li>
                <li>Unique IP Address</li>
                <li>Performance and reliability</li>
                <li>High Scalability</li>
              </ul>
            </Reveal>
          </div>
          <div className="S-image">
            <img src={ServiceIMG3} alt="" />
          </div>
        </div>
      </div>
      <Plan />
      <Quizzes />
      <Footer />
    </>
  );
};

export default Service3;
