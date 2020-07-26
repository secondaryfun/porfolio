import React from 'react';
import './ArrowButton.css';

import arrow from "../assets/images/icons/arrow-button.svg"

function ArrowButton(props) {

    return (
        <div className="ArrowButton__wrapper flex-row">
            <div className="ArrowButton__title">{props.title}</div>
            <img src={arrow} alt="arrow" className="ArrowButton-arrow" />
        </div>
    );
}

export default ArrowButton;
