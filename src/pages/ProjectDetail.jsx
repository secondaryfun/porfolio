import React from 'react';
import { useState, useEffect } from 'react'

import './ProjectDetail.css';
import NavBarSmall from "../components/NavBarSmall.jsx"
import ProjectStats from "../components/ProjectStats.jsx"
import { PageView, initGA } from '../components/Tracking';
import projects from "../assets/data/projects"


function ProjectDetail(props) {
    const proj = !props.location.state ? props.project : props.location.state.project
    const [project] = useState(proj)

    useEffect(() => {
        window.scrollTo(0, 0)
        initGA()
        PageView()
        return () => {

        }
    }, [])

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

ProjectDetail.defaultProps = {
    project: projects[0]
};
