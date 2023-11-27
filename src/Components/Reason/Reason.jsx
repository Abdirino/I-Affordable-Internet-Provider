import React, { useState } from "react";
import "./reason.css";
import Reveal from "../Reveal/Reveal";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Reason = () => {
  const [counter, setCounter] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="reasons">
          <div className="head">
            <Reveal>
              <h1>
                Why <span>Embrace</span> Our Network?
              </h1>
            </Reveal>
          </div>
          <div className="reason">
            <div className="re">
              <h2>
                {counter && (
                  <CountUp start={0} end={800} delay={0} duration={2} />
                )}
                +
              </h2>
              <p>Happy Customers</p>
            </div>
            <div className="re">
              <h2>
                {counter && (
                  <CountUp start={0} end={12} delay={0} duration={2} />
                )}
                +
              </h2>
              <p>Support Services</p>
            </div>
            <div className="re">
              <h2>
                {counter && (
                  <CountUp start={0} end={30} delay={0} duration={2} />
                )}
                +
              </h2>
              <p>Access Points</p>
            </div>
            <div className="re">
              <h2>
                12/7
              </h2>
              <p>Customer Service</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Reason;
