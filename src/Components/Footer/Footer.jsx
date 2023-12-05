import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Reveal from "../Reveal/Reveal";

const Footer = () => {
  // const year = document.querySelector("#year");
  // year.innerHTML = new Date().getFullYear();

  return (
    <>
      <ScrollToTop smooth top="20" color="#0339c1" />
      <div className="Footer">
        <div className="footer">
          <Reveal>
            <section>
              <h2>Contact Us</h2>
              <div className="c-info">
                <i class="fa-solid fa-phone"></i>
                <p>(1) +254 721 107062</p>
              </div>
              <div className="c-info">
                <i class="fa-solid fa-phone"></i>
                <p>(2) +254 721 261197</p>
              </div>
              <div className="c-info">
                <i class="fa-solid fa-envelope"></i>
                <p>support@iaffordablenetsp.co.ke</p>
              </div>
              <div className="c-info">
                <i class="fa-solid fa-location-dot"></i>
                <p>Al-Yusra Building, Moyale Town, Kenya</p>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section>
              <h2>My Account</h2>
              <li>Manage My Account</li>
              <li>Payment Information</li>
              <li>Subscriptions</li>
            </section>
          </Reveal>
          <Reveal>
            <section>
              <h2>Support Links</h2>
              <Link
                to="/FAQs"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>FAQs</li>
              </Link>
              <Link
                to="/privacy"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Privacy Policy</li>
              </Link>
              <Link
                to="/Package"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Payment Options</li>
              </Link>
            </section>
          </Reveal>
          <Reveal>
            <section>
              <h2>Website Links</h2>
              {/* <Link to='/about' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li>About Us</li>
            </Link> */}
              <Link
                to="/service"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>IAffordableAP Services</li>
              </Link>
              <Link
                to="/about"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>About Us</li>
              </Link>
              <Link
                to="/contact"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Contact</li>
              </Link>
            </section>
          </Reveal>
        </div>
      </div>
      <div className="copy-write">
        <Reveal>
          <p>
            Affordable Internet Access Point © <span id="year"></span>2023 ||
            All rights reserved
          </p>
        </Reveal>
        <Reveal>
          <div className="social">
            <i class="fa-brands fa-square-facebook"></i>
            <a
              href="tel: +254 721 107062"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <i class="fa-brands fa-square-whatsapp"></i>
            </a>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Footer;
