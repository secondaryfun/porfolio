import React from 'react';
import './Preview.css';
import { Link } from 'react-router-dom';

import arrow from "../assets/images/icons/arrow-button-white.svg"

function Preview(props) {
    const project = props.project
    return (
        <div className={`Preview__animate ${props.className}`}>
            <Link to={{
                pathname: `/project-detail`,
                state: { project }
            }}
                className={`open-sans headline Preview__link `}
            >
                <div className={`Preview-wrapper flex-column space-around `}>
                    <h2 className="oswald Preview__title">{props.title}</h2>
                    <p>
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
