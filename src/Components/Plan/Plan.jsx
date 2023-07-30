import React from "react";
import "./plan.css";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <>
      <div className="plans">
        <div className="head">
          <h1>
            Choose <span>Affordable</span> Packages
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="plan">
          <div className="pack">
            <div className="p-head">
              <h2>Individual Plan</h2>
              <p>For Individual User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>5Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
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
          <div className="pack family">
            <div className="rec">
              <p>Most Popular Package</p>
            </div>
            <div className="p-head">
              <h2>Home Plan</h2>
              <p>For Family User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>10Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                <span>Basic</span> Attachments
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
          <div className="pack">
            <div className="p-head">
              <h2>Business Plan 1</h2>
              <p>For Small Business</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>15Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                Clear <span>CCTV</span> Access
              </li>
            </div>

            <div className="price">
              <div className="money">
                <p>Ksh</p>
                <h1>6,000</h1>
              </div>
              <p>/Monthly</p>
            </div>
            <div className="order">
              <Link to="/contact">
                <button className="button">Order This Plan</button>
              </Link>
            </div>
          </div>
          <div className="pack">
            <div className="p-head">
              <h2>Business Plan 2</h2>
              <p>For Corporate User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>20Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                Clear <span>CCTV</span> Access
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
          <div className="pack">
            <div className="p-head">
              <h2>Corporate Plan</h2>
              <p>For Corporate User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>50Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                CCTV &<span>VOIP</span> Access
              </li>
              <li>Uninterrupted <span>Conference</span> Streaming</li>
            </div>

            <div className="price">
              <div className="money">
                <p>Ksh</p>
                <h1>Inquire Price</h1>
              </div>
              <p>/Monthly</p>
            </div>
            <div className="order">
              <Link to="/contact">
                <button className="button">Order This Plan</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="included">
        <div className="head">
          <h1>All Plans Include</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="include-pack">
          {/* <div className="i-pack">
            <div className="i-icon">
              <i class="fa-solid fa-server"></i>
            </div>
            <div className="i-detail">
              <h3>Own FPT Server</h3>
              <p>
                At vero eos et accusamus et iusto dignissimosus qui blanditiis
                praesentium uptatum
              </p>
            </div>
          </div> */}
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
          {/* <div className="i-pack">
            <div className="i-icon">
              <i class="fa-sharp fa-solid fa-lock"></i>
            </div>
            <div className="i-detail">
              <h3>Lock In Low Rates</h3>
              <p>
                At vero eos et accusamus et iusto dignissimosus qui blanditiis
                praesentium uptatum
              </p>
            </div>
          </div> */}
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
          {/* <div className="i-pack">
            <div className="i-icon">
              <i class="fa-solid fa-right-to-bracket"></i>
            </div>
            <div className="i-detail">
              <h3>Access To All Websites</h3>
              <p>
                At vero eos et accusamus et iusto dignissimosus qui blanditiis
                praesentium uptatum
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Plan;
