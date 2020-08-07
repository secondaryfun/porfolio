import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect, useCallback } from 'react'

import './Home.css';
import '../services/animations.css';
import handleScroll, { getScrollingDiv } from '../services/services.js'
import NavBar from "../components/NavBar.jsx"
import ArrowButton from "../components/ArrowButton.jsx"
import PageSplitter from "../components/PageSplitter.jsx"
import ArrowDownButton from "../components/ArrowDownButton.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import Preview from "../components/Preview.jsx"
import projects from "../assets/data/projects"
import ScrollTop from "../components/ScrollTop.jsx"


import homeVignette from "../assets/images/characters/Programming-pana-purple.svg"
import onlineShopping from "../assets/images/characters/Online shopping-bro-purple.svg"
import coding from "../assets/images/characters/Coding-bro-purple.svg"
import parallelLine from "../assets/images/icons/parallel-black.svg"

import { PageView, initGA } from '../components/Tracking';


export default function Home(props) {
    const page = 'home'
    const [scrollDiv, setScrollDiv] = useState()
    const [showCurrentProjects, setShowCurrentProjects] = useState(false)



    const hideOnScroll = useCallback(
        () => {
            let navHeight = scrollDiv?.scrollTop
            let elementHeight = document.querySelector('.mid-page_home').getBoundingClientRect().top
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
        <main className="main__wrapper" onScroll={handleScroll} id='homePage'>
            <div className="full-screen home-wrapper page-wrapper" id="top" onScroll={handleScroll}>
                <NavBar page={page} />
                <div>
                    <div className="mid-page-callout oswald bold ">Christopher Birkenhagen</div>
                    <p className="mid-page-text" >Full-Stack Developer. Operations Guru. Entrepreneur.</p>
                </div>
                <div className="vignette-wrapper">
                    <img src={homeVignette} alt="Chris At Work" className="home__vignette vignette" />
                </div>
                <ArrowDownButton page={page} />
            </div>
            <ScrollTop {...props} btnIsBlack={true} page={page} />
            <div className="background--yellow--dark">
                {/* <NavBarSmall midPage={true} /> */}

                <div className="mid-page_home grid-1x1 overflow-x" id="recent-work">
                    <div className="grid-center grid-position-1 z-index-top recent-work__heading-wrapper ">
                        <h1 className="mid-page_home__title">Recent Work</h1>
                        <Link to="/projects" >
                            <ArrowButton title="VIEW ALL WORK" />
                        </Link>
                    </div>
                    {/* <img alt="" src={triangle} className="split-page-img grid-position-1 grid-end z-index-mid"></img> */}
                    <PageSplitter className="grid-position-1 grid-end z-index-mid background--yellow--midtone"
                        page={page} />
                    <img alt="" src={onlineShopping} className={`vignette--small hover-opacity
                        grid-position-1 z-index-top margin-3 hide-on-small opacity--0 
                        ${showCurrentProjects ? "load--slow-opacity load--slow-delay-1" : ""}`} ></img>
                    <img alt="" src={coding} className={`vignette--small  hover-opacity
                        grid-position-1 grid-end margin-3 hide-on-small opacity--0 
                        ${showCurrentProjects ? "load--slow-opacity load--slow-delay-1-5" : ""}`}></img>
                    <Preview title={projects[0].title} project={projects[0]} id="preview-1"
                        className={"grid-position-1 z-index-top grid-end hide-on-small "}
                    />
                    <Preview title={projects[1].title} project={projects[1]} id="preview-2"
                        className={"grid-position-1 z-index-top grid-start hide-on-small"}
                    />

                </div>
                <div className="mid-page background--yellow--midtone" id="home-mid">
                    <h4 className="mid-page-title headline">BACKGROUND</h4>
                    <img src={parallelLine} alt="" className="" />

                    <p className="mid-page-text">
                        I am a full-stack software engineer in Washington DC .
                        As a dedicated entrepreneur with expertise in project management, operations, and finance,
                        I help companies find technical solutions to achieve their goals.
                    </p>
                    <Link to="/skills" >
                        <ArrowButton title="MORE INFO" />
                    </Link>
                </div>
                <div className="page-runout--yellow page-runout grid-1x1" id="recent-work">
                    <Menu img={true} />
                    <footer className="flex-row space-between margin-5">
                        <div className="page-center">
                            <p>&copy;Red Cap Concepts | Washington DC | 2020</p>
                            <p>Design & Development by Christopher Birkenhagen</p>
                            <a rel='noopener noreferrer' target='_blank' href="https://stories.freepik.com/internet">Illustration by Stories by Freepik</a>
                        </div>
                        <SocialMedia large={true} className={' page-center'} />
                    </footer>
                </div>
            </div>
        </main >
    )
}
