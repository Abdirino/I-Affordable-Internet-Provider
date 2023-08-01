import React from "react";
import "./services.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Plan from "../../Components/Plan/Plan";
import Quizzes from "../../Components/Quizzes/Quizzes";

import ServiceIMG3 from "../../Images/Service-3.png";

const Service3 = () => {
  return (
    <>
      <Navbar />
      <div className="Services">
        <h1>
          Dedicated <span>Server</span>
        </h1>
        <div className="Service">
          <div className="S-detail">
            <h2>
              Extreme power, flexibility and control with world class
              <span> support</span>
            </h2>
            <p>
              A dedicated server is a type of web hosting service that provides
              exclusive use of an entire physical server for a single client or
              organization. Unlike shared hosting, where multiple websites share
              the resources of a single server, a dedicated server ensures that
              all the server's computing power, memory, storage, and network
              bandwidth are dedicated solely to the needs of the client.
            </p>
            <i>
              This exclusive access to resources offers numerous advantages,
              making dedicated servers a preferred choice for businesses and
              individuals with specific hosting requirements.
            </i>
            <ul>
              <li>Server Hardware and Resources</li>
              <li>Unique IP Address</li>
              <li>Performance and reliability</li>
              <li>High Scalability</li>
            </ul>
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
