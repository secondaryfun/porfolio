import React from 'react';
import './Button-Menu.css';

import menuIcon from "../assets/images/icons/menu-icon.svg"

function MenuButton(props) {
    return (
        <div className="menu-button_wrapper" onClick={props.handleClick} >
            <img src={menuIcon} className="max-size" />
        </div>
    );
}

export default MenuButton;
