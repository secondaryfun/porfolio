import React from 'react';
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Menu.css';
import CloseButton from './Button-Close.jsx'
import MenuButton from './Button-Menu.jsx'
import SocialMedia from './SocialMedia.jsx'


import contact from "../assets/images/characters/Get-in-touch-bro-green.svg"


function Menu(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => props.history.listen(() => {
        setIsMenuOpen(false);
    }))
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log("clicked")
    }

    return (
        <div className="menu-wrapper">
            {props.img ? <div onClick={toggleMenu} className="pointer">
                <img alt="" src={contact} className="vignette--small grid-bottom margin-3 hide-on-mobile"></img>
            </div>
                : <MenuButton handleClick={toggleMenu} />}

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

export default withRouter(Menu);
