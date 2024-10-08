import React from "react";
import "./plan.css";
import { Link } from "react-router-dom";
import Reason from "../Reason/Reason";
import Reveal from "../Reveal/Reveal";

const Plan = () => {
  return (
    <>
      <div className="plans">
        <div className="head">
          <Reveal>
            <h1>
              Our <span>Monthly</span> Internet Plans For <span>You</span>.
            </h1>
          </Reveal>
          <Reveal>
            <p>
              Affordable ISP - The Fast, Reliable , Locally Available Internet
              Service Provider. For Speed of up to 100Mbps, Connect your
              Business and Home to super-fast internet speeds.
            </p>
          </Reveal>
        </div>
        <div className="plan">
          <Reveal>
            <div className="pack">
              <div className="p-head">
                <h2>Home Package</h2>
                <p>For Family</p>
              </div>
              <div className="p-detail">
                <li>Moderate Web Browsing</li>
                <li>
                  Upto <span>10Mbps</span> Download Speed
                </li>
                <li>Unlimited Data Usage</li>
                <li>YouTube and E-Mails</li>
                <li>
                  <span>Basic</span> Attachments
                </li>
              </div>

              <div className="price">
                <div className="money">
                  <p>Ksh</p>
                  <h1>2,500</h1>
                </div>
                <p>/Monthly</p>
              </div>
              <div className="order">
                <Link to="/contact">
                  <button className="button">Order This Plan</button>
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="pack family">
              {/* <div className="rec">
              <p>Most Popular Package</p>
            </div> */}
              <div className="p-head">
                <h2>Business Package 1</h2>
                <p>For Businesses</p>
              </div>
              <div className="p-detail">
                <li>Free Installation</li>
                <li>
                  Upto <span>12Mbps</span> Download Speed
                </li>
                <li>Unlimited Data Usage</li>
                <li>Social-Media Browsing</li>
                <li>
                  Continual TV <span>Streaming</span>
                </li>
              </div>

              <div className="price">
                <div className="money">
                  <p>Ksh</p>
                  <h1>3,500</h1>
                </div>
                <p>/Monthly</p>
              </div>
              <div className="order">
                <Link to="/contact">
                  <button className="button">Order This Plan</button>
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="pack">
              <div className="p-head">
                <h2>Business Package 2</h2>
                <p>For Businesses</p>
              </div>
              <div className="p-detail">
                <li>Fast Web Browsing</li>
                <li>
                  Upto <span>15Mbps</span> Download Speed
                </li>
                <li>Unlimited Data Usage</li>
                <li>HD Video Streaming</li>
                <li>
                  Clear <span>CCTV</span> Access
                </li>
              </div>

              <div className="price">
                <div className="money">
                  <p>Ksh</p>
                  <h1>4,500</h1>
                </div>
                <p>/Monthly</p>
              </div>
              <div className="order">
                <Link to="/contact">
                  <button className="button">Order This Plan</button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="pack">
              <div className="p-head">
                <h2>Premium Package</h2>
                <p>For Companies</p>
              </div>
              <div className="p-detail">
                <li>Fast File Sharing</li>
                <li>
                  Upto <span>20Mbps</span> Download Speed
                </li>
                <li>Unlimited Data Usage</li>
                <li>4K Video Streaming</li>
                <li>
                  Video <span>Conference</span>
                </li>
              </div>

              <div className="price">
                <div className="money">
                  <p>Ksh</p>
                  <h1>7,500</h1>
                </div>
                <p>/Monthly</p>
              </div>
              <div className="order">
                <Link to="/contact">
                  <button className="button">Order This Plan</button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="pack">
              <div className="p-head">
                <h2>Corporate Plan</h2>
                <p>For Corporations</p>
              </div>
              <div className="p-detail">
                <li>Tailored to meet your Needs</li>
                <li>
                  Upto <span>100Mbps</span> Download Speed
                </li>
                <li>Unlimited Data Usage</li>
                <li>
                  CCTV &<span> VOIP</span> Access
                </li>
                <li>
                  Continues <span>Conference</span> Broadcast
                </li>
              </div>

              <div className="price">
                <div className="money">
                  <p>Ksh</p>
                  <h1>Inquire</h1>
                </div>
                <p>/Monthly</p>
              </div>
              <div className="order">
                <Link to="/contact">
                  <button className="button">Order This Plan</button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="included">
        <div className="head">
          <Reveal>
            <h1>All Plans Include</h1>
          </Reveal>
          <Reveal>
            <p>
              Our basic or essential offerings are the same across all
              subscription levels. However, there might be variations in terms
              of additional features, usage limits, or premium services
              available at higher-tier plans.
            </p>
          </Reveal>
        </div>
        <div className="include-pack">
          <Reveal>
            <div className="i-pack">
              <div className="i-icon">
                <i class="fa-sharp fa-solid fa-chart-simple"></i>
              </div>
              <div className="i-detail">
                <h3>Upgrade And Downgrade</h3>
                <p>
                  Want to modify your plan, increase or decrease it's speed,
                  features and other aspects.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="i-pack">
              <div className="i-icon">
                <i class="fa-sharp fa-solid fa-database"></i>
              </div>
              <div className="i-detail">
                <h3>No Data Limits</h3>
                <p>
                  There are no restrictions on the amount of data a customer can
                  use within a specified period (typically a month).
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="i-pack">
              <div className="i-icon">
                <i class="fa-solid fa-video"></i>
              </div>
              <div className="i-detail">
                <h3>Video Streaming</h3>
                <p>
                  Watch videos live and streaming without having to download the
                  entire file beforehand
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        {/* <div className="include-img">
          <img src="../../Images/AboutSec.webp" alt="" />
        </div> */}
      </div>
      <Reason />
    </>
  );
};

export default Plan;
