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
                <ul className="nav-menu"></ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar