import React from 'react';
import './Button-Menu.css';

import menuIconBlack from "../assets/images/icons/menu-icon-black.svg"
import menuIconWhite from "../assets/images/icons/menu-icon-white.svg"

function MenuButton(props) {
    let menuIcon
    if (props.color === 'white') {
        menuIcon = menuIconWhite
    } else {
        menuIcon = menuIconBlack
    }

    return (
        <div className="MenuButton__wrapper" onClick={props.handleClick} >
            <img alt="" src={menuIcon} className="max-size" />
        </div>
    );
}

export default MenuButton;

MenuButton.defaultProps = {
    color: 'black'
};
