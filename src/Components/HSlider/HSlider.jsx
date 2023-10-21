import React from "react";
import "./hSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";

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
                <Reveal>
                  <p>Best-in-Class Internet Service Provider</p>
                </Reveal>
                <Reveal>
                  <h1>For All Your Internet Needs</h1>
                </Reveal>
                <Reveal>
                  <h1>And High Connectivity.</h1>
                </Reveal>
                <div className="perks">
                  <ul>
                    <Reveal>
                      <li>💠Free Installation</li>
                    </Reveal>
                    <Reveal>
                      <li>💠Internet Service Solutions</li>
                    </Reveal>
                    <Reveal>
                      <li>💠Top Quality Service With Affordable Pricing</li>
                    </Reveal>
                    <Reveal>
                      <li>💠Live Video Streaming With Ultra Fast Speed</li>
                    </Reveal>
                    <Reveal>
                      <li>💠Exclusive Priority Customer Care</li>
                    </Reveal>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="H-slider2">
              <div className="homeS">
                <Reveal>
                  <p>Affordable High-Speed Connections</p>
                </Reveal>
                <Reveal>
                  <h1>Quality Home Connection</h1>
                </Reveal>
                <Reveal>
                  <h1>With Affordable Budget-Friendly Plans.</h1>
                </Reveal>
                <Reveal>
                  <Link to="/package">
                    <button className="button">Explore Plans</button>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>

          {/* <div>
            <div className="H-slider3">
              <div className="homeS">
                <p> High-End Internet Service Company</p>
                <h1>Premier Services Designed To</h1>
                <h1>Elevate Your Experience And Grow Your Business.</h1>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default HSlider;
