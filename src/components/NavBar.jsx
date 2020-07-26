import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './NavBar.css';
import Menu from "../components/Menu.jsx"


import logoBlack from "../assets/images/icons/logo-black.svg"
import logoWhite from "../assets/images/icons/logo-white.svg"

function NavBar(props) {
    const match = useRouteMatch()
    let textColor, logo, hover
    if (props.color === 'white') {
        textColor = "#FFF3F3"
        logo = logoWhite
        hover = 'NavBar__white'
    } else {
        textColor = '#412222'
        logo = logoBlack
        hover = 'NavBar__black'
    }

    return (
        <nav className={`nav-wrapper flex-row space-between sticky hide-on-small ${props.className}`}>
            <Link to="/" >
                <img src={logo} alt="Christopher Birkenhagen" className="nav__logo" />
            </Link>
            <div className="nav__link-wrapper nav-bar-margins flex-row hide-on-small">
                {/* <Link className={`nav__link ${hover} ${match !== "/blog" ? "" : 
                "Menu__link--underline"}`} style={{ color: textColor }} to="/blog" >BLOG</Link> */}
                <Link className={`nav__link ${hover} ${match !== "/skills" ? "" :
                    "Menu__link--underline"}`} style={{ color: textColor }} to="/skills" >SKILLS</Link>
                <Link className={`nav__link ${hover} ${match !== "/projects" ? "" :
                    "Menu__link--underline"}`} style={{ color: textColor }} to="/projects" >PROJECTS</Link>
                <Link className={`nav__link ${hover} ${match !== "/resume" ? "" :
                    "Menu__link--underline"}`} style={{ color: textColor }} to="/resume" >RESUME</Link>
            </div>
            <Menu backgroundColor={props.backgroundColor} color={props.color} className={"nav__logo"} />

        </nav>
    );
}

export default NavBar;

NavBar.defaultProps = {
    color: 'black',
    backgroundColor: false
};
