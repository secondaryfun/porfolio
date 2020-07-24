import React from 'react';
import './ProjectStats.css';

function ProjectStats(props) {
    const project = props.project
    return (
        <div className="ProjectStats-wrapper">
            <div className="flex-row flex-center">
                <div className="ProjectStats__section flex-row space-around">
                    <div className="inline-block">
                        <div className="ProjectStats__title--stat">YEAR</div>
                        <p className="ProjectStats__info">2020</p>
                        <a href={project.github} rel='noopener noreferrer' target='_blank'
                            className="ProjectStats__info">github link</a>
                        <a href={project.link} rel='noopener noreferrer' target='_blank'
                            className="ProjectStats__info">project link</a>
                    </div>
                    <div className="inline-block">
                        <div className="ProjectStats__title--stat">DELIVERABLES</div>
                        <div>
                            {!project.items ? "" : project.items.map((item, index) =>
                                <p className="ProjectStats__info" key={index} >{item}</p>)}
                        </div>
                        <div className="ProjectStats__title--stat">TECHNOLOGY</div>
                        {!project.tech ? "" : project.tech.map((item, index) => {
                            return <p className="ProjectStats__info" key={index} >{project.tech}</p>
                        })}
                    </div>
                </div>
                <div className="ProjectStats__section">
                    <div className="ProjectStats__title">{project.title}</div>
                    <p className="ProjectStats__title__info">{project.description}</p>
                </div>
            </div>
        </div >
    );
}

export default ProjectStats;
