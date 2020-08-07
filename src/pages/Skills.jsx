import React from 'react';
import { useState, useEffect, useCallback } from 'react'

import './Skills.css';
import handleScroll, { getScrollingDiv } from '../services/services.js'

import NavBar from "../components/NavBar.jsx"
import ArrowDownButton from "../components/ArrowDownButton.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import InfoCard from "../components/InfoCard.jsx"
import ScrollTop from "../components/ScrollTop.jsx"
import PageSplitter from "../components/PageSplitter.jsx"

import skillsVignette from "../assets/images/characters/JavaScript frameworks-amico-yellow.svg"
import parallelLine from "../assets/images/icons/parallel-yellow.svg"
import { PageView, initGA } from '../components/Tracking';
function Skills(props) {
    const page = 'skills'

    const [scrollDiv, setScrollDiv] = useState()
    const [showCurrentProjects, setShowCurrentProjects] = useState(false)



    const hideOnScroll = useCallback(
        () => {
            let navHeight = scrollDiv?.scrollTop
            let elementHeight = document.querySelector('.mid-page_skills').getBoundingClientRect().top
            let activationHeight = elementHeight
            // console.log(elementHeight)
            if (navHeight > activationHeight) loadCurrProj()
            if (navHeight < activationHeight) hideCurrProj()
        },
        [scrollDiv],
    )

    const loadCurrProj = () => {
        setShowCurrentProjects(true)
    }

    const hideCurrProj = () => {
        setShowCurrentProjects(false)
    }
    useEffect(() => {
        handleScroll(page, 'top')
        initGA()
        PageView()
        setScrollDiv(getScrollingDiv(page))
        if (scrollDiv) {
            scrollDiv.addEventListener('scroll', (e) => hideOnScroll(e))
            return (
                scrollDiv.removeEventListener('scroll', (e) => hideOnScroll(e))
            )
        }
    }, [scrollDiv, hideOnScroll, props.page])
    return (
        <main className="main__wrapper" id='skillsPage'>
            <div className="full-screen skills-wrapper page-wrapper" id="top">
                <NavBar color={'white'} page={page} />
                <div>
                    <div className="mid-page-callout oswald bold white hide-on-large">Skillset</div>
                    <p className="mid-page-text white" >Full-Stack Developer. Operations Guru. Entrepreneur.</p>
                </div>
                <div className="vignette-wrapper">
                    <img src={skillsVignette} alt="Chris At Work" className=" vignette" />
                </div>
                <ArrowDownButton page={page} />

            </div>
            <ScrollTop {...props} btnIsBlack={false} page={page} />
            <div className="mid-page mid-page_skills">
                <div className="mid-page_skills grid-1x1 overflow-x" id="front-end-tech">
                    <div className="grid-position-1 page-center">
                        <div>
                            <h4 className="mid-page-title headline white">Technology</h4>
                            <img src={parallelLine} alt="" className="mid-page_underline " />
                        </div>
                    </div>
                    <div className={`flex-row space-around 
                        ${showCurrentProjects ? "enter--right load--slow-delay-0-5" : "close--slow-opacity"}
                    `}>

                        <InfoCard
                            className=""
                            title="Languages"
                            items={['HTML', 'CSS', 'JavaScript', 'Python']}
                        />
                        <InfoCard
                            className=""
                            title="Libraries & Frameworks"
                            items={['React', 'Django', 'Express']}
                        />
                        <InfoCard
                            className=""
                            title="CMS"
                            items={['Shopify', 'Expression Engine', 'WordPress']}
                        />
                        <InfoCard
                            className=""
                            title="General"
                            items={["Ubuntu",
                                "Linux",
                                "WSL 1&2",
                                "Git",
                                "GitHub",
                                "VS Code",]}
                        />
                        <InfoCard
                            className=""
                            title="Databases"
                            items={[
                                "PostgreSQL ",
                                "MongoDB",
                            ]}
                        />
                        <InfoCard
                            className=""
                            title="Deployment Apps"
                            items={[
                                "Heroku",
                                "Netlify",
                            ]}
                        />
                        <InfoCard
                            className=""
                            title="Tech Stacks"
                            items={[
                                "Node.JS | Express",
                                "Python | Flask | Peewee",
                                "Python | Django",
                                "MERN: MongoDB | Express | React | NodeJS"
                            ]}
                        />


                    </div>
                </div><PageSplitter className="grid-position-1 grid-end z-index-mid background--yellow--midtone"
                    page={page} />
                <div className="mid-page_skills grid-1x1 overflow-x Skills__triangle" id="front-end-tech">
                    <div className="grid-position-1 page-center">
                        <div>
                            <h4 className="mid-page-title headline white">Business</h4>
                            <img src={parallelLine} alt="" className="mid-page_underline " />
                        </div>

                        <div className={`flex-row space-around 
                        ${showCurrentProjects ? "enter--left load--slow-delay-1" : "close--slow-opacity"}
                    `}>
                            <InfoCard
                                className=""
                                title="Operations"
                                items={['Inventory Management', 'Logistics', 'Manufacturing', 'Human Resources']}
                            />
                            <InfoCard
                                className=""
                                title="Finance"
                                items={['Contract Negotiation', 'Licensing', 'Forecasting', 'Fund Raising']}
                            />
                            <InfoCard
                                className=""
                                title="Sales & Marketing"
                                items={['Account Relationships', 'Client Building', 'Event Management', 'Crowd Funding']}
                            />
                            <InfoCard
                                className=""
                                title="Tech"
                                items={['Advanced Excel', 'Google Apps Scripting', 'Monday.com', 'Trello', 'Basecamp', 'Stitch Labs', 'Shopify']}
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
