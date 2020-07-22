import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
import Menu from "../components/Menu.jsx"


import logoBlack from "../assets/images/icons/logo-black.svg"
import logoWhite from "../assets/images/icons/logo-white.svg"
import arrowUpBlack from "../assets/images/icons/arrow-up-black.svg"
import arrowUpWhite from "../assets/images/icons/arrow-up-white.svg"

function NavBarSmall(props) {
    const passInClass = props.class ? props.class : ""

    let logo, arrowUp
    if (props.color === 'white') {
        logo = logoWhite
        arrowUp = arrowUpWhite
    } else {
        logo = logoBlack
        arrowUp = arrowUpBlack
    }
    return (
        <nav className={`nav-wrapper nav-wrapper--small flex-row space-between ${passInClass}`}>
            <Link className="nav__link " to='#top'>
                <img src={logo} alt="Home Screen" className="nav__logo" />
            </Link>
            <Link className="nav__link hide-on-small" to='#top'>
                <img src={arrowUp} alt="Return to Top" className="nav__arrow-up" />
            </Link>
            <Menu color={props.color} />
        </nav>
    );
}

export default NavBarSmall;

NavBarSmall.defaultProps = {
    color: 'black'
};
