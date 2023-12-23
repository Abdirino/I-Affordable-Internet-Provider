import React from "react";
import "./accordion.css";
import Reveal from "../Reveal/Reveal";

const Accordion = ({
  title,
  active,
  setActive,
  handleActive,
  answer,
  email,
}) => {
  return (
    <>
      <Reveal>
        <div className="accordion" onClick={active ? () => setActive(!title) : () => setActive(title)}>
          <div className="acc-head">
            <div className="container">
              <h4>{title}</h4>
              <span>
                <i
                  className={
                    active === title ? "fa-solid fa-minus" : "fa-solid fa-plus"
                  }
                ></i>
              </span>
            </div>
          </div>
            <div className={(active === title ? "show" : "") + " acc-content"}>
              <div className="container">
                <p>
                  {answer}
                  <h4> {email}</h4>
                </p>
              </div>
            </div>
        </div>
      </Reveal>
    </>
  );
};

export default Accordion;
