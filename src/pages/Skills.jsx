import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Skills.css';
import NavBar from "../components/NavBar.jsx"
import NavBarSmall from "../components/NavBarSmall.jsx"
import ArrowButton from "../components/ArrowButton.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import Preview from "../components/Preview.jsx"
import InfoCard from "../components/InfoCard.jsx"


import skillsVignette from "../assets/images/characters/JavaScript frameworks-amico-yellow.svg"
import coffeeTable from "../assets/images/characters/character-coffee-table.svg"
import laptopTable from "../assets/images/characters/character-laptop-table.svg"
import downArrow from "../assets/images/icons/arrow-head-white.svg"
import parallelLine from "../assets/images/icons/parallel-yellow.svg"
import triangle from '../assets/images/backgrounds/background-bottom-red.svg'
import logoName from "../assets/images/icons/logo-name-white.svg"




function Skills() {
    return (
        <main className="max-size">
            <div className="full-screen skills-wrapper page-wrapper" id="top">
                <NavBarSmall class='hide-on-large' color="white" />
                <img src={logoName} alt="Christopher Birkenhagen" className="page-center nav__logo-name hide-on-large" />
                <NavBar color={'white'} />

                <div className="vignette-wrapper">
                    <img src={skillsVignette} alt="Chris At Work" className="skills-vignette vignette" />
                </div>
                <Link className="down-arrow " to='#front-end-tech'>
                    <img src={downArrow} alt="" className="" />
                </Link>
            </div>
            <div className="mid-page_skills">
                <NavBarSmall color={"white"} />
                <div className="mid-page_skills grid-1x1 overflow-x" id="front-end-tech">
                    <div className="grid-position-1 page-center">
                        <div>
                            <h4 className="mid-page-title headline white">Front-End Technologies</h4>
                            <img src={parallelLine} alt="" className="mid-page_underline " />
                        </div>
                    </div>
                    <div className="flex-row space-around ">
                        <InfoCard
                            title="Programming Languages"
                            items={['HTML', 'CSS', 'JavaScript']}
                        />
                        <InfoCard
                            title="Libraries & Frameworks"
                            items={['React', 'Bootstrap']}
                        />
                        <InfoCard
                            title="General"
                            items={["Ubuntu",
                                "Linux",
                                "WSL 1&2",
                                "Git",
                                "GitHub",
                                "Heroku",
                                "Netlify",
                                "VS Code",]}
                        />
                    </div>
                </div>
                <div className="mid-page_skills grid-1x1 overflow-x" id="back-end-tech">
                    <img alt="" src={triangle} className="split-page-img grid-position-1 grid-end "></img>
                    <div className="grid-position-1 page-center">
                        <div className="flex-row page-center">
                            <img alt="" src={coffeeTable} className="vignette--small hide-on-small"></img>
                            <h4 className="mid-page-title headline white " >Back-End Technologies</h4>
                            <img alt="" src={laptopTable} className="vignette--small hide-on-small"></img>
                        </div>
                        <div className="flex-row space-around">
                            <InfoCard
                                title="Technology Stack"
                                items={[
                                    "Node.JS/Express/Mongoose",
                                    "Python/Flask/Peewee",
                                    "Python/Django",
                                ]}
                            />
                            <InfoCard
                                title="Libraries & Frameworks"
                                items={[
                                    "React.JS ",
                                    "Bootstrap",
                                ]}
                            />
                            <InfoCard
                                title="Databases"
                                items={[
                                    "PostgreSQL ",
                                    "MongoDB",
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="page-runout--red page-runout grid-1x1" id="recent-work">
                    {/* <img alt="" src={coding} className="vignette--skills vignette--small margin-3 only-mobile "></img> */}
                    <Menu img={true} />
                    <footer className="flex-row margin-5">
                        <div className="page-center">
                            <p>&copy;Red Cap Concepts | Washington DC | 2020</p>
                            <p>Design & Development by Christopher Birkenhagen</p>
                            <a href="https://stories.freepik.com/internet">Illustration by Stories by Freepik</a>
                        </div>
                        <SocialMedia large={true} className={' page-center'} />
                    </footer>
                </div>
            </div>

        </main>
    );
}

export default Skills;
