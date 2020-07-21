import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import './NavBar.css';

import logoName from "../assets/images/icons/logo-name-black.svg"

function NavBar() {
    return (
        <nav className="nav-wrapper responsive-flex-row">
            <img src={logoName} alt="Christopher Birkenhagen" className="nav__logo-name" />
            <div className="nav__link-wrapper responsive-flex-row">
                <Link className="nav__link" to="/" >HOME</Link>
                <Link className="nav__link" to="/skills" >SKILLS</Link>
                <Link className="nav__link" to="/Projects" >PROJECTS</Link>
            </div>
            <Link className="nav__link">CONTACT</Link>
        </nav>
    );
}

export default NavBar;
