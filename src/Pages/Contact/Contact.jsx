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
          <div className="contact-detail">
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h2>Address</h2>
              <p>Dead Street, Moyale Town,</p>
              <p>Marsabit, KENYA</p>
            </div>
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h2>Phone</h2>
              <p>+254 721 107062</p>
              <p>+254 721 261197</p>
            </div>
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h2>E-Mail</h2>
              <p>ahash@gmail.com</p>
              <p>iaffordable@gmail.com</p>
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
          <div className="location">
            <div className="l-image">
              <img src={LocationIMG} alt="" />
            </div>
          </div>
          <div className="form">
            <div className="form-img">
              <h3>Contact Us</h3>
              <h1>
                Ready To Get In Touch With <span>IAffordable</span>
              </h1>
              <img src={ContactIMG} alt="" />
            </div>
            <form>
              <input type="text" placeholder="Name*" />{" "}
              <input type="number" placeholder="Phone*" />
              <input type="email" placeholder="E-Mail*" />
              <textarea
                placeholder="Your Message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
