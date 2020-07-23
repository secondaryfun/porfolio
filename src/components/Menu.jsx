import React from 'react';
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Menu.css';
import CloseButton from './Button-Close.jsx'
import MenuButton from './Button-Menu.jsx'
import SocialMedia from './SocialMedia.jsx'


import contact from "../assets/images/characters/Get-in-touch-bro-green.svg"
import logoName from "../assets/images/icons/logo-name-black.svg"


function Menu(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => props.history.listen(() => {
        setIsMenuOpen(false);
    }))
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    let colorClass = "background--yellow"

    return (
        <div className={` ${props.className}`}>
            {props.img ? <div onClick={toggleMenu} className="pointer">
                <img alt="" src={contact} className="vignette--small grid-bottom margin-3 Menu__vignette"></img>
            </div>
                : <MenuButton handleClick={toggleMenu} color={props.color} />}

            {!isMenuOpen ? "" : (
                <header className={`menu-wrapper_open flex-column ${props.backgroundColor ? colorClass : "background--white"}`}>
                    <CloseButton handleClick={toggleMenu} />
                    <img src={logoName} alt="Christopher Birkenhagen" className="Menu__img" />
                    <div>
                        <Link className="menu__link oswald" to="/home" >HOME</Link>
                        {/* <Link className="menu__link oswald" to="/blog" >BLOG</Link> */}
                        <Link className="menu__link oswald" to="/skills" >SKILLS</Link>
                        <Link className="menu__link oswald" to="/projects" >PROJECTS</Link>
                        <Link className="menu__link oswald" to="/resume" >RESUME</Link>
                    </div>
                    <div className="flex-column margin-3">
                        <h3 className="open-sans headline">GET IN TOUCH</h3>
                        <SocialMedia className={' page-center'} />

                    </div>
                </header>
            )}
        </div>
    );
}

export default withRouter(Menu);

Menu.defaultProps = {
    color: 'black'
};
