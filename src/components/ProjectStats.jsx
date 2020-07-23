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
                <div className="ProjectStats__section flex-row space-around">
                    <div className="inline-block">
                        <div className="ProjectStats__title--stat">YEAR</div>
                        <p className="ProjectStats__info">2020</p>
                    </div>
                    <div className="inline-block">
                        <div className="ProjectStats__title--stat">DELIVERABLES</div>
                        <div>
                            {!props.items ? "" : props.items.map(item =>
                                <p className="ProjectStats__info">{item}</p>)}
                        </div>
                        <div className="ProjectStats__title--stat">TECHNOLOGY</div>
                        <p className="ProjectStats__info">{props.tech}</p>
                    </div>
                </div>
                <div className="ProjectStats__section">
                    <div className="ProjectStats__title">{props.title}</div>
                    <p className="ProjectStats__title__info">{props.description}</p>
                </div>
            </div>
        </div >
    );
}

export default ProjectStats;
