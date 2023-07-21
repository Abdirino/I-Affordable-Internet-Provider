import React from "react";
import "./hSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";

const HSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 800,
    autoplaySpeed: 6000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <div className="H-slider1">
                <div className="homeS">
                  <p>Best-in-Class Internet Solutions Provider</p>
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
          </div>

          <div>
            <div className="H-slider2">
                <div className="homeS">
                  <p>Affordable and Reasonable Internet Plans</p>
                  <h1>Quality Home Connection</h1>
                  <h1>With Reasonable And Affordable Plans</h1>
                  <div className="perks">
                    <li></li>
                  </div>
                  <Link to="/package">
                    <button className="button">Explore Plans</button>
                  </Link>
                </div>
            </div>
          </div>

          <div>
            <div className="H-slider3">
                <div className="homeS">
                  <p> High-End Internet Service Company</p>
                  <h1>Premier Services</h1>
                  <h1>Designed To Elevate Your Experience</h1>
                  <div className="perks">
                    <li></li>
                  </div>
                  <Link to="/service">
                    <button className="button">Our Services</button>
                  </Link>
                </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="H-perks"></div>
    </>
  );
};

export default HSlider;
