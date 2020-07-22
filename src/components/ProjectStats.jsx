import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ProjectStats.css';
import Menu from "../components/Menu.jsx"


import logoBlack from "../assets/images/icons/logo-black.svg"
import logoWhite from "../assets/images/icons/logo-white.svg"
import arrowUpBlack from "../assets/images/icons/arrow-up-black.svg"
import arrowUpWhite from "../assets/images/icons/arrow-up-white.svg"

function ProjectStats(props) {
    return (
        <div className="ProjectStats-wrapper">
            <div className="flex-row flex-center">
                <div className="flex-row">
                    <div>
                        <h4 className="ProjectStats__title--stat">YEAR</h4>
                        <p className="ProjectStats__info">2020</p>
                    </div>
                    <div>
                        <h4 className="ProjectStats__title--stat">DELIVERABLES</h4>
                        <div>
                            {!props.items ? "" : props.items.map(item =>
                                <p className="ProjectStats__info">{item}</p>)}
                        </div>
                        <h4 className="ProjectStats__title--stat">TECHNOLOGY</h4>
                        <p className="ProjectStats__info">{props.tech}</p>
                    </div>
                </div>
                <div>
                    <h3 className="ProjectStats__title">{props.title}</h3>
                    <p className="ProjectStats__title__info">{props.description}</p>
                </div>
            </div>
        </div >
    );
}

export default ProjectStats;
