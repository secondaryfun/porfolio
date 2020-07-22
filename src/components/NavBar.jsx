import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Menu from "../components/Menu.jsx"


import logoBlack from "../assets/images/icons/logo-name-black.svg"
import logoWhite from "../assets/images/icons/logo-name-white.svg"

function NavBar(props) {
    let textColor, logo
    if (props.color === 'white') {
        textColor = "#FFF3F3"
        logo = logoWhite
    } else {
        textColor = '#412222'
        logo = logoBlack
    }

    return (
        <nav className="nav-wrapper flex-row space-between hide-on-small">
            <img src={logo} alt="Christopher Birkenhagen" className="nav__logo-name" />
            <div className="nav__link-wrapper nav-bar-margins flex-row hide-on-small">
                <Link className="nav__link " style={{ color: textColor }} to="/" >HOME</Link>
                <Link className="nav__link " style={{ color: textColor }} to="/skills" >SKILLS</Link>
                <Link className="nav__link " style={{ color: textColor }} to="/Projects" >PROJECTS</Link>
            </div>
            <Menu color={props.color} className={"margin-top-2"} />
            {/* <Link className="nav__link nav-bar-margins hide-on-small" style={{ color: textColor }} to="/Projects">CONTACT</Link> */}
        </nav>
    );
}

export default NavBar;

NavBar.defaultProps = {
    color: 'black'
};
