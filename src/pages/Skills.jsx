import React from 'react';
import { useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import './Skills.css';
import NavBar from "../components/NavBar.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import InfoCard from "../components/InfoCard.jsx"
import ScrollTop from "../components/ScrollTop.jsx"
import ArrowUpButton from "../components/ArrowUpButton.jsx"




import skillsVignette from "../assets/images/characters/JavaScript frameworks-amico-yellow.svg"
import coffeeTable from "../assets/images/characters/character-coffee-table.svg"
import laptopTable from "../assets/images/characters/character-laptop-table.svg"
import downArrow from "../assets/images/icons/arrow-head-white.svg"
import parallelLine from "../assets/images/icons/parallel-yellow.svg"
import triangle from '../assets/images/backgrounds/background-bottom-red.svg'

function Skills(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {

        }
    }, [])
    return (
        <main className="max-size">
            <div className="full-screen skills-wrapper page-wrapper" id="top">
                <NavBar color={'white'} />

                <div className="vignette-wrapper">
                    <img src={skillsVignette} alt="Chris At Work" className="skills-vignette vignette" />
                </div>
                <Link className="down-arrow " to='#front-end-tech'>
                    <img src={downArrow} alt="" className="" />
                </Link>
            </div>
            <ScrollTop {...props}>
                <ArrowUpButton arrowIsBlack={false} />
            </ScrollTop>
            <div className="mid-page_skills">
                <div className="mid-page_skills grid-1x1 overflow-x" id="front-end-tech">
                    <div className="grid-position-1 page-center">
                        <div>
                            <h4 className="mid-page-title headline white">Technology</h4>
                            <img src={parallelLine} alt="" className="mid-page_underline " />
                        </div>
                    </div>
                    <div className="flex-row space-around ">
                        <div>
                            <div className="mid-page-title headline white">Front End</div>
                            <InfoCard
                                className="InfoCard-wrapper--orange"
                                title="Programming Languages"
                                items={['HTML', 'CSS', 'JavaScript']}
                            />
                            <InfoCard
                                className="InfoCard-wrapper--orange"
                                title="Libraries & Frameworks"
                                items={['React', 'Bootstrap']}
                            />
                        </div>
                        <div>
                            <InfoCard
                                className="InfoCard-wrapper--orange"
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
                            <InfoCard
                                className="InfoCard-wrapper--orange"
                                title="Databases"
                                items={[
                                    "PostgreSQL ",
                                    "MongoDB",
                                ]}
                            />
                        </div>

                        <div>
                            <div className="mid-page-title headline white">Back End</div>

                            <InfoCard
                                className="InfoCard-wrapper--orange"
                                title="Languages"
                                items={[
                                    "Node.JS",
                                    "Python",
                                ]}
                            />
                            <InfoCard
                                className="InfoCard-wrapper--orange"
                                title="Tech Stack"
                                items={[
                                    "Node.JS | Express",
                                    "Python | Flask | Peewee",
                                    "Python | Django",

                                ]}
                            />

                        </div>
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
                            <div>

                                <InfoCard
                                    className="InfoCard-wrapper--orange"
                                    title="Languages"
                                    items={[
                                        "Node.JS",
                                        "Python",
                                    ]}
                                />
                                <InfoCard
                                    className="InfoCard-wrapper--orange"
                                    title="Tech Stack"
                                    items={[
                                        "Node.JS | Express",
                                        "Python | Flask | Peewee",
                                        "Python | Django",

                                    ]}
                                />
                                <InfoCard
                                    className="InfoCard-wrapper--orange"
                                    title="Databases"
                                    items={[
                                        "PostgreSQL ",
                                        "MongoDB",
                                    ]}
                                />
                            </div>
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
                            <a rel='noopener noreferrer' target='_blank' href="https://stories.freepik.com/internet">Illustration by Stories by Freepik</a>
                        </div>
                        <SocialMedia large={true} className={' page-center'} />
                    </footer>
                </div>
            </div>

        </main>
    );
}

export default Skills;
