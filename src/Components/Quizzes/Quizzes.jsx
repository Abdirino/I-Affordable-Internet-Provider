import React from "react";
import { useState } from "react";
import "./quizzes.css";
import Accordion from "../Accordion/Accordion";
import Reveal from "../Reveal/Reveal";

const Quizzes = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => setActive(!active);

  return (
    <>
      <div className="quizzes">
        <div className="q-head">
          <Reveal>
            <h1>
              Frequently Asked <span>Questions (FAQs)</span>
            </h1>
          </Reveal>
          <Reveal>
            <p>
              Frequently Asked Questions (FAQs) are common inquiries and their
              respective answers compiled to provide quick and helpful
              information on a particular topic or service.
            </p>
          </Reveal>
        </div>
        <div className="quiz">
          <div className="Accordion">
            <Accordion
              title="How to change my Wifi Password?"
              answer="While connected to your wifi, log into your Tenda router by typing 
              192.168.0.1 using Google Chrome in the top bar. If All goes well,
              you are now in your Tenda Router Software.Click the three white
              lines in the upper left and choose `Wireless Settings`,
              update your WiFi name and password, then save changes. Log in with your new WiFi
              username and password. Done!"
              email="For support send message to support@iaffordablenetsp.co.ke"
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="How to pay the wifi bills?"
              answer="You can pay through our M-pesa Till, goods and Service, Till Number 545527.  Following these process: 
              1. Go to Mpesa Service
              2. Select Lipa na Mpesa
              3. Select buy goods and services
              4. Enter Till No. 545527
              5. Enter Amount Due
              6. Enter Your Mpesa secret PIN
              7. Confirm with OK."
              email="Please SMS the payment  receipt for confirmation. Thank you from
              IAFFORDABLENET LIMITED;
              YOUR WISP;
              PHONE: 0721107962
              EMAIL: billing@iaffordablenetsp.co.ke "
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="How do i contact with support center?"
              active={active}
              setActive={setActive}
              answer="For support Contact:"
              email="Hotline: +254721107962; Support Email: support@iaffordablenetsp.co.ke "
            />
            <Accordion
              title="Can I upgrade or downgrade my internet plan?"
              active={active}
              setActive={setActive}
              answer="We are flexible and ready to give free advice on our client internet requirements.
               ou can contact support to explain your internet need and correct plan can be recommended for you.
              You can upgrade or downgrade accordingly. 
              It is best to discuss with support for the correct plan and upgrade or downgrade 
              is done on the next billing date."
              email="For enquiries on sales option send message to sales@iaffordablenetsp.co.ke"
            />
            <Accordion
              title="Is your internet service available at my area?"
              active={active}
              setActive={setActive}
              answer="Although our POP(Point of Presence) are located in most areas of the city with extended coverage.
              On request for service the technical team will call in for confirmation of signal strength and proper line of site determination.
              We have four main and Five booster stations, apart from the central hub at Al Yusra building.
              We are the leading service provider with stations in Elwak, Takaba and another up coming new station in Bute soon."
              email="For support send message to support@iaffordablenetsp.co.ke"
            />
            <Accordion
              title="What is the average internet speed during peak hours?"
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="How soon can I get my internet/wifi installed?"
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="Can I use my own modem/router?"
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzes;
