import React from "react";
import "./plan.css";

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
              <h2>Personal Pack</h2>
              <p>For Personal User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>1Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                <span>1 Month</span> Pricing Lock Guarantee
              </li>
            </div>

            <div className="price">
              <div className="money">
                <p>Ksh</p>
                <h1>1500</h1>
              </div>
              <p>/Monthly</p>
            </div>
            <div className="order">
              <button className="button">Order This Plan</button>
            </div>
          </div>
          <div className="pack family">
            <div className="rec">
              <p>Most Popular Package</p>
            </div>
            <div className="p-head">
              <h2>Family Pack</h2>
              <p>For Family User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>3Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                <span>1 Month</span> Pricing Lock Guarantee
              </li>
            </div>

            <div className="price">
              <div className="money">
                <p>Ksh</p>
                <h1>3000</h1>
              </div>
              <p>/Monthly</p>
            </div>
            <div className="order">
              <button className="button">Order This Plan</button>
            </div>
          </div>
          <div className="pack">
            <div className="p-head">
              <h2>Business Pack</h2>
              <p>For Business User</p>
            </div>
            <div className="p-detail">
              <li>Free Installation</li>
              <li>
                Upto <span>10Mbps</span> Download Speed
              </li>
              <li>Unlimited Data Usage</li>
              <li>Unlimited Bandwidth</li>
              <li>
                <span>1 Month</span> Pricing Lock Guarantee
              </li>
            </div>

            <div className="price">
              <div className="money">
                <p>Ksh</p>
                <h1>7500</h1>
              </div>
              <p>/Monthly</p>
            </div>
            <div className="order">
              <button className="button">Order This Plan</button>
            </div>
          </div>
          <div className="pack">
            <div className="p-head">
              <h2>Corporate Pack</h2>
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
                <span>1 Month</span> Pricing Lock Guarantee
              </li>
            </div>

            <div className="price">
              <div className="money">
                <p>Ksh</p>
                <h1>15000</h1>
              </div>
              <p>/Monthly</p>
            </div>
            <div className="order">
              <button className="button">Order This Plan</button>
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
          <div className="i-pack">
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
          </div>
          <div className="i-pack">
            <div className="i-icon">
              <i class="fa-sharp fa-solid fa-chart-simple"></i>
            </div>
            <div className="i-detail">
              <h3>Upgrade And Downgrade</h3>
              <p>
                At vero eos et accusamus et iusto dignissimosus qui blanditiis
                praesentium uptatum
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
                At vero eos et accusamus et iusto dignissimosus qui blanditiis
                praesentium uptatum
              </p>
            </div>
          </div>
          <div className="i-pack">
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
          </div>
          <div className="i-pack">
            <div className="i-icon">
              <i class="fa-solid fa-video"></i>
            </div>
            <div className="i-detail">
              <h3>Video Streaming</h3>
              <p>
                At vero eos et accusamus et iusto dignissimosus qui blanditiis
                praesentium uptatum
              </p>
            </div>
          </div>
          <div className="i-pack">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
