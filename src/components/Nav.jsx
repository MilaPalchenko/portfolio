import '../scss/components/_nav.scss'
import '../scss/components/_header.scss'
import "../scss/components/_hamburger-menu.scss"
import React from 'react';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';
import { Link } from "react-router-dom"

const Nav = () => {
    
    const [navOpen, setNavOpen] = useState(false);


    return (
        <nav className='nav'>
            <div className="nav-container">
                <div className="navbar">
                <div className="personal-name">Mila Palchenko</div>
                    <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                        <HamburgerMenu/>
                    </div>
                    <div className="nav-overlay" style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                }}>
                    <NavLinks/>
                </div>
                </div>
               
            </div>
        </nav>
   
    );
}

export default Nav