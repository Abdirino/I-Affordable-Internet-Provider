import React from "react";
import "./Sabout.css";
import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";

const SAbout = () => {
  return (
    <>
      <div className="S-about">
        <Reveal>
          <div className="sa-head">
            <h1>Welcome to Affordable Internet Access Point</h1>
          </div>
        </Reveal>
        <Reveal>
          <p>
            Our company is a leading provider of the best internet services. We
            are dedicated to helping our customers to find perfect solutions and
            bring high quality services. We can give you much more than other
            companies do because our services are aimed at satisfying our
            customers’ needs.
          </p>
        </Reveal>
        <Reveal>
          <Link to="/about">
            <button className="button">Discover More</button>
          </Link>
        </Reveal>
      </div>
    </>
  );
};

export default SAbout;
