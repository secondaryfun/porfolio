import React from 'react';
import { useState } from 'react'


import './ProjectDetail.css';
import NavBarSmall from "../components/NavBarSmall.jsx"
import ProjectStats from "../components/ProjectStats.jsx"


function ProjectDetail(props) {
    const proj = !props.location.state ? "" : props.location.state.project
    const [project] = useState(proj)


    return (
        <main className="max-size background--white">
            <div className="" id="top">
                <NavBarSmall backgroundColor={true} projectDetail={true} />
                <ProjectStats
                    project={project}
                    title={project.title}
                    description={project.description}
                    items={project.items}
                    tech={project.tech}
                    github={project.github}
                />
                <iframe title="project detail" src={project.link} className="ProjectDetail__iframe" />
            </div>
        </main>
    );
}

export default ProjectDetail;
