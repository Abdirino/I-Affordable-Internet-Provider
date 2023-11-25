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
          <NavLink to="/" className="logo">
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
                <div className="icon">
                  <i class="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="icon">
                  <i class="fa-solid fa-circle-info"></i>
                  <p>About</p>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="icon">
                  <i class="fa-solid fa-briefcase"></i>
                  <p>Services</p>
                </div>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/package"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <p>Plans</p>
                </div>
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                exact
                to="/FAQs"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="icon">
                  <i class="fa-solid fa-circle-question"></i>
                  <p>FAQs</p>
                </div>
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
                <div className="icon">
                  <i class="fa-solid fa-phone"></i>
                  <p>Contacts</p>
                </div>
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
