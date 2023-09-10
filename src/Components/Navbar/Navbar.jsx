import React from "react";
import "./navbar.css";
import Logo from "../../Images/IAffordable-Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <div className="header">
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <NavLink to='/' className="logo">
            <div className="logo-img">
              <img src={Logo} alt="website icon" />
            </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>

            <div className="drop">
              <li className="nav-item">Pages
                <ul id="subMenu">
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/about"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/package"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Packages
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/FAQs"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      FAQs
                    </NavLink>
                  </li>
                </ul>
              </li>
              <i class="fa-solid fa-caret-down"></i>
            </div>

            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-phone">
            <h3>Call Now</h3>
            <a href="tel: +254 721 107062">+254 721 107062</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
