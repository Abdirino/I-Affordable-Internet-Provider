import React from "react";
import "./hSlider.css";

import { Link } from "react-router-dom";

const HSlider = () => {
  return (
    <>
      <div className="H-slider">
        <div className="homeS">
          <p>Best Internet Service provider in Kenya</p>
          <h1>Don't Suffer The Buffer,</h1>
          <h1>Speeds Upto 1Gbps With Unlimited Data</h1>
          <div className="perks">
            <li></li>
          </div>
          <Link to="/about">
            <button className="button">Discover More</button>
          </Link>
        </div>
      </div>
      <div className="H-perks"></div>
    </>
  );
};

export default HSlider;
