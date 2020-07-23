import React from 'react';
import './ProjectStats.css';

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
                        {!props.tech ? "" : props.tech.map((item, index) => {
                            return <p className="ProjectStats__info" key={index} >{props.tech}</p>
                        })}
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
