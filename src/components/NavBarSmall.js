import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

import logo from "../assets/images/icons/logo-black.svg"
import arrowUp from "../assets/images/icons/arrow-up-black.svg"

function NavBarSmall() {
    return (
        <nav className="nav-wrapper responsive-flex-row space-between">
            <Link className="nav__link" to='#top'>
                <img src={logo} alt="Home Screen" className="nav__logo" />
            </Link>
            <Link className="nav__link" to='#top'>
                <img src={arrowUp} alt="Return to Top" className="nav__arrow-up" />
            </Link>
        </nav>
    );
}

export default NavBarSmall;
