import React from 'react';
import './Preview.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react'


import arrow from "../assets/images/icons/arrow-button-white.svg"

function Preview(props) {
    const project = props.project
    const [showElement, setShowElement] = useState(false)


    const loadElement = () => {
        setShowElement(true)
    }
    const hideElement = () => {
        setShowElement(false)
    }

    return (
        <div className={`${props.className} ${!showElement ? "Preview__close" : "Preview__open"}`}
            onMouseEnter={loadElement}
            onMouseLeave={hideElement}
        >
            <Link to={{
                pathname: `/project-detail`,
                state: { project }
            }}
                className={`open-sans headline Preview__link `}
            >
                <div className={`Preview__wrapper flex-column space-around `}>
                    <h2 className={`oswald Preview__title 
                    opacity--0 load--slow-delay-0-5 
                    ${!showElement ? "" : "enter--left opacity--1"}`}>
                        {props.title}
                    </h2>
                    <p className={`opacity--0 load--slow-delay-0-5 
                    ${!showElement ? "" : "enter--right opacity--1"}`}>
                        <span className="Preview__nav-text white">
                            view project
                        </span>
                        <img src={arrow} alt="arrow" className="Preview__img" />
                    </p>
                </div>
            </Link >
        </div>
    );
}

export default Preview;
