import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
import Menu from "../components/Menu.jsx"


import logoBlack from "../assets/images/icons/logo-black.svg"
import logoWhite from "../assets/images/icons/logo-white.svg"
import arrowUpBlack from "../assets/images/icons/arrow-up-black.svg"
import arrowUpWhite from "../assets/images/icons/arrow-up-white.svg"
import arrowLeft from "../assets/images/icons/arrow-left-1.svg"

function NavBarSmall(props) {
    let logo, arrowUp
    if (props.color === 'white') {
        logo = logoWhite
        arrowUp = arrowUpWhite
    } else {
        logo = logoBlack
        arrowUp = arrowUpBlack
    }

    return (
        <nav className={`nav-wrapper nav-wrapper--small flex-row space-between ${props.className}`}>
            <Link className=" " to='#top'>
                <img src={logo} alt="Home Screen" className="nav__logo" />
            </Link>
            {!props.midPage ? "" :
                <Link className=" hide-on-small" to='#top'>
                    <img src={arrowUp} alt="Return to Top" className="nav__arrow-up" />
                </Link>
            }
            {!props.projectDetail ? "" :
                <Link className=" " to='/projects'>
                    <p className="ProjectDetail__back-button">
                        BACK TO PROJECTS
                    </p>
                    <img src={arrowLeft} alt="Return to Top" className="nav__arrow-up" />
                </Link>

            }
            <Menu backgroundColor={props.backgroundColor} color={props.color} className={props.menuClassName} />
        </nav>
    );
}

export default NavBarSmall;

NavBarSmall.defaultProps = {
    color: 'black'
};
