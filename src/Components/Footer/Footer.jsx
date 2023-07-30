import React from "react";
import "./footer.css";

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
              <p>affordableinternetap@gmail.com</p>
            </div>
            <div className="c-info">
              <i class="fa-solid fa-location-dot"></i>
              <p>Al-Yusra Building, Moyale Town, Kenya</p>
            </div>
          </section>
          <section>
            <h2>My Account</h2>
            <li>Manage My Account</li>
            <li>Constant Guard</li>
            <li>Cable Customer Agreement</li>
            <li>More Services</li>
          </section>
          <section>
            <h2>Support Links</h2>
            <li>IAffordable Services</li>
            <li>Payment Methods</li>
            <li>Privacy Statement</li>
            <li>Social Responsibilities</li>
          </section>
          <section>
            <h2>Popular</h2>
            <li>IAffordable Services</li>
            <li>Internet Help</li>
            <li>Privacy Statement</li>
            <li>Social Responsibilities</li>
          </section>
        </div>
      </div>
      <div className="copy-write">
        <p>© 2023 Affordable Internet Access Point All rights reserved | Engineered by @Abdirino</p>
        <div className="social">
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-whatsapp"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
