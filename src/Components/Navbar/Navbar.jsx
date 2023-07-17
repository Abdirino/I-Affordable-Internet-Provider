import React from 'react'
import './navbar.css'

import Logo from '../../Images/IAffordable-Logo.png'

const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
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
  )
}

export default Navbar