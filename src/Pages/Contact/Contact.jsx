import React from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import LocationIMG from "../../Images/IAffordable Location.png";
import ContactIMG from "../../Images/contact IMG.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contacts">
        <div className="contact">
          <h1>Contact <span>Our Team</span></h1>
          <div className="contact-detail">
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h2>Address</h2>
              <p>Al-Yusra Building</p>
              <p>Moyale Town, KENYA</p>
            </div>
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h2>Phone</h2>
              <p>+254 721 107 062</p>
              <p>+254 721 261 197</p>
            </div>
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h2>E-Mail</h2>
              <p>ahash8@gmail.com</p>
              <p>affordableinternetap@gmail.com</p>
            </div>
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-clock"></i>
              </div>
              <h2>Opening Hours</h2>
              <p>Weekdays 9am - 5pm</p>
              <p>Weekend 9am - 1pm</p>
            </div>
          </div>
          
          <div className="form">
            <div className="form-img">
              <h3>Connect with Us</h3>
              <h1>
                Ready To Get In Touch With <span>Affordable Internet Access Point?</span>
              </h1>
              <img src={ContactIMG} alt="" />
            </div>
            <form>
              <h3>Contact Us</h3>
              <h1>Write a message</h1>
              <input type="text" required placeholder="Name*" />{" "}
              <input type="number" required placeholder="Phone*" />
              <input type="email" required placeholder="E-Mail*" />
              <textarea
                placeholder="Your Message*"
                required
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="button">Send Message</button>
            </form>
          </div>

          <div className="location">
            <div className="l-image">
              <img src={LocationIMG} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
