import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import './NavBar.css';

import logoName from "../assets/images/icons/logo-name-black.svg"


function NavBar() {
    return (
        <nav className="nav-wrapper">
            <img src={logoName} alt="Christopher Birkenhagen" className="nav__logo-name" />
            <div className="nav__links">
                <Link style={{ textDecoration: 'none' }} to="/" >HOME</Link>
                <Link style={{ textDecoration: 'none' }} to="/skills" >SKILLS</Link>
                <Link style={{ textDecoration: 'none' }} to="/Projects" >PROJECTS</Link>
            </div>
            <div className="nav__contact"></div>
        </nav>
    );
}

export default NavBar;
