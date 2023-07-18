import React from "react";
import "./Sabout.css";

const SAbout = () => {
  return (
    <>
      <div className="S-about">
        <div className="sa-head">
          {/* <div>1</div> */}
          <h1>Welcome to IAffordable</h1>
          {/* <div>2</div> */}
        </div>
        <p>
          Our company is a leading national provider of the best
          internet services. We are dedicated to helping our customers to
          find perfect solutions and bring high quality services. We can give
          you much more than other companies do because our services are aimed
          at satisfying our customers’ needs.
        </p>
        <button className="button">About Us</button>
      </div>
    </>
  );
};

export default SAbout;
