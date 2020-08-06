import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react'


import './Projects.css';
import handleScroll from '../services/services.js'

import NavBar from "../components/NavBar.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import InfoCard from "../components/InfoCard.jsx"
import projects from "../assets/data/projects"
import ScrollTop from "../components/ScrollTop.jsx"
import ArrowUpButton from "../components/ArrowUpButton.jsx"




import downArrow from "../assets/images/icons/arrow-head-white.svg"
import parallelLine from "../assets/images/icons/parallel-yellow.svg"
import { PageView, initGA } from '../components/Tracking';
function Projects(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
        initGA()
        PageView()
        return () => {

        }
    }, [])

    return (
        <main className="main__wrapper" id='projectPage'>
            <div className="full-screen projects-wrapper page-wrapper" id="top">
                <NavBar color={'white'} page="projects" />

                <div className="projects__quote" >
                    <div className="mid-page-callout oswald bold white margin-3">Personal Projects</div>
                    <p className="mid-page-text white left" >I am always doing that which I cannot do, in order that I may learn how to do it.  - Pablo Picasso</p>
                </div>
                <div className="down-arrow " onClick={handleScroll}>
                    <img src={downArrow} alt="" className="" />
                </div>
            </div>
            <ScrollTop {...props}>
                <ArrowUpButton arrowIsBlack={false} />
            </ScrollTop>
            <div className="mid-page_projects padding-2">
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
