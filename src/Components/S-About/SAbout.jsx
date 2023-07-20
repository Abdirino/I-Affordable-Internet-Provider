import React from "react";
import "./Sabout.css";
import { Link } from "react-router-dom";

const SAbout = () => {
  return (
    <>
      <div className="S-about">
        <div className="sa-head">
          <h1>Welcome to IAffordable</h1>
        </div>
        <p>
          Our company is a leading national provider of the best internet
          services. We are dedicated to helping our customers to find perfect
          solutions and bring high quality services. We can give you much more
          than other companies do because our services are aimed at satisfying
          our customers’ needs.
        </p>
        <Link to='/about'>
          <button className="button">Discover More</button>
        </Link>
      </div>
    </>
  );
};

export default SAbout;
