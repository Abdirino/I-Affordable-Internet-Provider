import React from "react";
import './accordion.css'

const Accordion = ({title, active, setActive}) => {

  // const handleActive = () => setActive(!active)
  return (
    <>
        <div className="accordion" onClick={true ? () => setActive(title) : () => setActive(!title)}>
          <div className="acc-head">
            <div className="container">
              <h4>{title}</h4>
              <span>
                <i className={active === title ? "fa fa-caret-down" : "fa fa-caret-down"}></i>
              </span>
            </div>
          </div>
          <div className={( active === title ? "show" : "") + " acc-content"}>
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quae quam, veritatis alias esse, quis repellat earum corporis
                reiciendis.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Accordion;
