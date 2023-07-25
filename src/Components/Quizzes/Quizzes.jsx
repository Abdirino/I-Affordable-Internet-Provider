import React from "react";
import { useState } from "react";
import "./quizzes.css";
import Accordion from "../Accordion/Accordion";

const Quizzes = () => {
  const [active, setActive] = useState("How to change my Wifi Password?");



  return (
    <>
      <div className="quizzes">
        <div className="q-head">
          <h1>
            Frequently Asked <span>Questions (FAQs)</span>
          </h1>
          <p>
            Frequently Asked Questions (FAQs) are common inquiries and their
            respective answers compiled to provide quick and helpful information
            on a particular topic or service.
          </p>
        </div>
        <div className="quiz">
          <div className="Accordion">
            <Accordion title="How to change my Wifi Password?" active={active} setActive={setActive} />
            <Accordion title="How do i contact with support center?" active={active} setActive={setActive} />
            <Accordion title="Can I upgrade or downgrade my internet plan?" active={active} setActive={setActive} />
            <Accordion title="Is your internet service available at my area?" active={active} setActive={setActive} />
            <Accordion title="What is the average internet speed during peak hours?" active={active} setActive={setActive} />
            <Accordion title="How soon can I get my internet/wifi installed?" active={active} setActive={setActive} />
            <Accordion title="Can I use my own modem/router?" active={active} setActive={setActive} />
            <Accordion title="How to pay the wifi bills?" active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzes;
