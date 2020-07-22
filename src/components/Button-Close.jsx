import React from 'react';
import './Button-Close.css';

import xIcon from "../assets/images/icons/icon-x-button.svg"

function closeButton(props) {
    return (
        <div className="close-button_wrapper pointer blue-on-hover" onClick={props.handleClick} >
            <img src={xIcon} className="max-size" />
        </div>
    );
}

export default closeButton;
