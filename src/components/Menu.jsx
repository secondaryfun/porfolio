import React from 'react';
import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Menu.css';
import CloseButton from './Button-Close.jsx'
import MenuButton from './Button-Menu.jsx'
import SocialMedia from './SocialMedia.jsx'


import arrowUp from "../assets/images/icons/arrow-up-black.svg"

function Menu(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="menu-wrapper">
            <MenuButton handleClick={toggleMenu} />
            {!isMenuOpen ? "" : (
                <header className="menu-wrapper_open flex-column ">
                    <CloseButton handleClick={toggleMenu} />
                    <Link className="menu__link oswald" to="/" >HOME</Link>
                    <Link className="menu__link oswald" to="/skills" >SKILLS</Link>
                    <Link className="menu__link oswald" to="/Projects" >PROJECTS</Link>
                    <div className="flex-column margin-3">
                        <h3 className="open-sans headline">GET IN TOUCH</h3>
                        <SocialMedia />

                    </div>
                </header>
            )}
        </div>
    );
}

export default Menu;
