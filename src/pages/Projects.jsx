import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react'


import './Projects.css';
import NavBar from "../components/NavBar.jsx"
import NavBarSmall from "../components/NavBarSmall.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import InfoCard from "../components/InfoCard.jsx"
import projects from "../assets/data/projects"


import projectsVignette from "../assets/images/characters/Organizing projects-pana-mint.svg"
import downArrow from "../assets/images/icons/arrow-head-white.svg"
import parallelLine from "../assets/images/icons/parallel-yellow.svg"
import logoName from "../assets/images/icons/logo-name-white.svg"

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {

        }
    }, [])

    return (
        <main className="max-size">
            <div className="full-screen projects-wrapper page-wrapper" id="top">
                <NavBar color={'white'} />

                <div className="vignette-wrapper">
                    <img src={projectsVignette} alt="Chris At Work" className="projects-vignette vignette" />
                </div>
                <Link className="down-arrow " to='#mid-page-projects'>
                    <img src={downArrow} alt="" className="" />
                </Link>
            </div>
            <div className="mid-page_projects">
                <div className="mid-page_projects " id="mid-page-projects">
                    <div>
                        <h4 className="mid-page-title headline white">Select Projects</h4>
                        <img src={parallelLine} alt="" className="mid-page_underline " />
                    </div>
                    {!projects ? "" : projects.map((project, index) => {
                        return (
                            <Link to={{
                                pathname: `/project-detail`,
                                state: { project }
                            }}
                                key={index}
                            >
                                <div className="mid-page-project__wrapper flex-row space-around flex-align-center">
                                    <div className="mid-page-project__title">{project.title}</div>
                                    <InfoCard
                                        title="Technology:"
                                        items={project.tech}
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className="page-runout--blue page-runout grid-1x1" id="recent-work">
                    {/* <img alt="" src={coding} className="vignette--projects vignette--small margin-3 only-mobile "></img> */}
                    <Menu img={true} />
                    <footer className="flex-row margin-5">
                        <div className="page-center">
                            <p>&copy;Red Cap Concepts | Washington DC | 2020</p>
                            <p>Design & Development by Christopher Birkenhagen</p>
                            <a rel='noopener noreferrer' target='_blank' href="https://stories.freepik.com/internet">Illustration by Stories by Freepik</a>
                        </div>
                        <SocialMedia large={true} className={' page-center'} />
                    </footer>
                </div>
            </div>

        </main>
    );
}

export default Projects;
