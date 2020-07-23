import React from 'react';
import './Preview.css';
import { Link } from 'react-router-dom';

import arrow from "../assets/images/icons/arrow-button-white.svg"

function Preview(props) {
    const project = props.project
    return (
        <div className={`Preview-wrapper flex-column space-around ${props.className}`}>
            <h2 className="oswald">{props.title}</h2>
            <Link to={
                {
                    pathname: `/project-detail`,
                    state: { project }
                }
            } className="open-sans headline Preview__link">
                view project
                <img src={arrow} alt="arrow" className="Preview__img" />
            </Link>
        </div>
    );
}

export default Preview;
