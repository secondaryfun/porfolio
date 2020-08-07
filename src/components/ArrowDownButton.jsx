import React from 'react';
import './ArrowDownButton.css';
import '../services/utilities.css';
import { useState, useEffect } from 'react'
import handleScroll from '../services/services.js'

import arrowBlack from "../assets/images/icons/arrow-head-black.svg"
import arrowWhite from "../assets/images/icons/arrow-head-white.svg"

function ArrowUpButton(props) {
    const [arrowIsBlack] = useState(props.arrowIsBlack)
    const [arrowColor, setArrowColor] = useState()

    useEffect(() => {
        if (arrowIsBlack === false) {
            setArrowColor(arrowWhite)
        } else {
            setArrowColor(arrowBlack)
        }
    }, [arrowIsBlack])


    return (
        <div className={`ArrowDownButton__wrapper button-pop ${""}`}
            onClick={() => handleScroll(props.page)}
        >
            <img src={arrowColor} alt="down arrow" className="ArrowDownButton__arrow" />
        </div>
    )
}

export default ArrowUpButton;

ArrowUpButton.defaultProps = {
    arrowIsBlack: true,
};
