import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="footer">
          <section>
            <h2>Contact Us</h2>
            <li>
              Set your ambitions with us and watch us deliver you the best there
              is.
            </li>
            <div className="c-info">
              <i class="fa-solid fa-phone"></i>
              <p>(1) +254 721 107 062</p>
            </div>
            <div className="c-info">
              <i class="fa-solid fa-phone"></i>
              <p>(2) +254 721 261 197</p>
            </div>
            <div className="c-info">
              <i class="fa-solid fa-envelope"></i>
              <p>internetaffordable@gmail.com</p>
            </div>
            <div className="c-info">
              <i class="fa-solid fa-location-dot"></i>
              <p>Al-Yusra Building, Moyale Town, Kenya</p>
            </div>
          </section>
          <section>
            <h2>My Account</h2>
            <li>Manage My Account</li>
            <li>Payment Information</li>
            <li>Subscriptions</li>
            <li>Settings</li>
          </section>
          <section>
            <h2>Support Links</h2>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <Link to='/contact' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li>E-Mail Support</li>
            </Link>
            <li>Payment Methods</li>
          </section>
          <section>
            <h2>Links</h2>
            <Link to='/about' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li>About Us</li>
            </Link>
            <Link to='/service' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li>IAffordableAP Services</li>
            </Link>
            <Link to='/Package' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li>Packages</li>
            </Link>
            <Link to='/contact' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li>Contact Us</li>
            </Link>
          </section>
        </div>
      </div>
      <div className="copy-write">
        <p>©2023 Affordable Internet Access Point | All rights reserved</p>
        <div className="social">
          <i class="fa-brands fa-square-facebook"></i>
          <a href="tel: +254 721 107062" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <i class="fa-brands fa-square-whatsapp"></i>
          </a>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
