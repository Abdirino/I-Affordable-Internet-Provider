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
    speed: 900,
    autoplaySpeed: 3900,
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
                <p>Best-in-Class Internet Service Provider</p>
                <h1>For All Your Internet Needs,</h1>
                <h1>And High Connectivity.</h1>
                <div className="perks">
                  <ul>
                    <li>Free Installation</li>
                    <li>Internet Service Solutions</li>
                    <li>Top Quality Service With Affordable Pricing</li>
                    <li>Live Video Streaming With Ultra Fast Speed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="H-slider2">
              <div className="homeS">
                <p>Affordable High-Speed Connections</p>
                <h1>Quality Home Connection</h1>
                <h1>With Affordable Budget-Friendly Plans.</h1>
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
                <h1>Premier Services Designed To</h1>
                <h1>Elevate Your Experience And Grow Your Business.</h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HSlider;
