import React from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contacts">
        <div className="contact">
          <div className="contact-detail"></div>
          <div className="location"></div>
          <div className="form"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
