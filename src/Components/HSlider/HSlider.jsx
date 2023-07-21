import React from "react";
import "./hSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";

const HSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1200,
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
              <div>
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
            </div>
          </div>

          <div>
            <div className="H-slider2">
              <div>
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
            </div>
          </div>

          <div>
            <div className="H-slider3">
              <div>
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
            </div>
          </div>
        </Slider>
      </div>
      <div className="H-perks"></div>
    </>
  );
};

export default HSlider;
