import React from 'react';
import { useState } from 'react'


import './ProjectDetail.css';
import NavBarSmall from "../components/NavBarSmall.jsx"
import ProjectStats from "../components/ProjectStats.jsx"



function ProjectDetail(props) {
    const proj = !props.location.state ? "" : props.location.state.project
    const [project, setProject] = useState(proj)


    return (
        <main className="max-size">
            <div className="" id="top">
                <NavBarSmall color={true} projectDetail={true} />
                <ProjectStats
                    title={project.title}
                    description={project.description}
                    items={project.items}
                    tech={project.tech}
                />
            </div>
        </main>
    );
}

export default ProjectDetail;
