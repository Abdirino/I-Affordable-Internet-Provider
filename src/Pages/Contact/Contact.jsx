import React from "react";
import { useRef } from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LocationIMG from "../../Images/IAffordable Location.png";

const Contact = () => {

  // function formSubmit () { 
  //   document.getElementById("frm").reset();
  // }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3oviz2h', 'template_9bmaeqd', form.current, 'Pr-4H4xBr6MljTcGR')
      .then((result) => {
        console.log(result.text);
        // console.log("Message sent successfully");
      }, (error) => {
        console.log(error.text);
      });
  };

  const notify = () => toast("Message sent successfully 👌");

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
              <p>affordableinternet@gmail.com</p>
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
            <form id="frm" ref={form} onSubmit={sendEmail} autoComplete="off">
              <h3>Contact Us</h3>
              <h1>Write us a message</h1>
              <input type="text" required placeholder="Full Name*  e.g Hussein Mohammed" name="from_name" />
              <input type="number" required placeholder="Phone*  e.g 0708 097 654" name="phone" />
              <input type="email" required placeholder="E-Mail*  e.g abdi@gmail.com" name="email" />
              <input type="text" required placeholder="Package*  e.g Home plan" name="package" />
              <textarea
                name="message"
                placeholder="Your Message*"
                required
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" value="reset" id="btnSubmit" onClick={notify} className="button">Send Message</button>
              <ToastContainer />
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
