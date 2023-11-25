import { useRef } from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LocationIMG from "../../Images/IAffordable Location.png";
import Background from "../../Components/Background/Background";
import { Partytown } from "@builder.io/partytown/react";
import Reveal from "../../Components/Reveal/Reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const frm = document.querySelector("#frm");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3oviz2h",
        "template_9bmaeqd",
        form.current,
        "Pr-4H4xBr6MljTcGR"
      )
      .then(
        (result) => {
          console.log(result.text);
          frm.reset();
          // console.log("Message sent successfully");
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  const notify = () => toast("Message sent successfully 👌");

  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Navbar />
      <Background />
      <div className="contacts">
        <div className="contact">
          <h1>
            Contact <span>Our Team</span>
          </h1>
          <div className="contact-detail">
            <div className="c-detail">
              <div className="c-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h2>E-Mail</h2>
              <p>support@iaffordablenetsp.co.ke</p>
              <p>abdulaziz@iaffordablenetsp.co.ke</p>
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
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h2>Address</h2>
              <p>Al-Yusra Building</p>
              <p>Moyale Town, KENYA</p>
            </div>
          </div>

          <div className="form">
            <form id="frm" ref={form} onSubmit={sendEmail} autoComplete="off">
              <h1>
                Get <span>Connected</span> Now
              </h1>
              <Reveal>
                <input
                  type="text"
                  required
                  placeholder="Full Name*  e.g Hussein Mohammed"
                  name="from_name"
                />
              </Reveal>
              <Reveal>
                <input
                  type="number"
                  required
                  placeholder="Phone*  e.g 0708 097 654"
                  name="phone"
                />
              </Reveal>
              <Reveal>
                <input
                  type="email"
                  required
                  placeholder="E-Mail*  e.g abdi@gmail.com"
                  name="email"
                />
              </Reveal>
              <Reveal>
                <input
                  type="text"
                  required
                  placeholder="Package*  e.g Home plan"
                  name="package"
                />
              </Reveal>
              <Reveal>
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  required
                  cols="30"
                  rows="10"
                ></textarea>
              </Reveal>
              <Reveal>
                <button
                  type="submit"
                  value="reset"
                  id="btnSubmit"
                  onSubmit={notify}
                  className="button"
                >
                  Send Message
                </button>
              </Reveal>

              <ToastContainer />
            </form>
            <div className="location">
              <h1>Real <span>Time</span> Location</h1>
              <div className="l-image">
                <iframe
                  className="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.2847458404513!2d39.05537007376088!3d3.521518496452762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1795b740b84b1ddd%3A0x45f4fb8b05bf36b4!2sAl%20Yusra%20Hotel!5e0!3m2!1sen!2ske!4v1700925254489!5m2!1sen!2ske"
                  // width="auto"
                  // height="auto"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
