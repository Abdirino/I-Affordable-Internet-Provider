import React from "react";
import "./navbar.css";
import Logo from "../../Images/IAffordable-Logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <div className="header">
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <NavLink className="logo">
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
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
                to="/car-listing"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Listings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
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
            <Link>
              <p>+254 721 107062</p>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
