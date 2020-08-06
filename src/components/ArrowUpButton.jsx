import React from 'react';
import './ArrowUpButton.css';
import '../services/utilities.css';
import { useState, useEffect } from 'react'


import arrowBlack from "../assets/images/icons/arrow-up-black.svg"
import arrowWhite from "../assets/images/icons/arrow-up-white.svg"

function ArrowUpButton(props) {
    const [arrowIsBlack, setArrowIsBlack] = useState(props.arrowIsBlack)
    const [arrowColor, setArrowColor] = useState()
    const [background, setBackground] = useState()

    useEffect(() => {
        if (arrowIsBlack === false) {
            setArrowColor(arrowWhite)
            setBackground('background--black')
        } else {
            setArrowColor(arrowBlack)
            setBackground('background--white')
        }
    }, [arrowIsBlack])

    const handleMouseEnter = () => {
        setArrowIsBlack(!arrowIsBlack)
    }
    const handleMouseLeave = () => {
        setArrowIsBlack(!arrowIsBlack)
    }

    return (
        <div className={`ArrowUpButton__wrapper flex-row ${background}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <img src={arrowColor} alt="arrow" className="ArrowUpButton__arrow" />
        </div>
    );
}

export default ArrowUpButton;

ArrowUpButton.defaultProps = {
    arrowIsBlack: true,
    backgroundColor: false
};
