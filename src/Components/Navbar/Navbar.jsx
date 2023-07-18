import React, { useState } from "react";
import "./navbar.css";

import Logo from "../../Images/IAffordable-Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)
  return (
    <>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <header>
        <nav onClick={(e) => e.stopPropagation()}>
          <NavLink className="logo">
            <div className="nav-icon" onClick={handleClick()}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <img src={Logo} alt="" />
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Services</li>
            <li className="nav-link">Packages</li>
            <li className="nav-link">Contact</li>
          </ul>
          <div className="call">
            <h3>Call Now</h3>
            <p>+254 721 107062</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
