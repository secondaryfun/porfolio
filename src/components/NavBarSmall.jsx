import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
import Menu from "../components/Menu.jsx"


import logo from "../assets/images/icons/logo-black.svg"
import arrowUp from "../assets/images/icons/arrow-up-black.svg"

function NavBarSmall(props) {
    const passInClass = props.class ? props.class : ""
    return (
        <nav className={`nav-wrapper nav-wrapper--small flex-row space-between ${passInClass}`}>
            <Link className="nav__link " to='#top'>
                <img src={logo} alt="Home Screen" className="nav__logo" />
            </Link>
            <Link className="nav__link hide-on-small" to='#top'>
                <img src={arrowUp} alt="Return to Top" className="nav__arrow-up" />
            </Link>
            <Menu />
        </nav>
    );
}

export default NavBarSmall;
