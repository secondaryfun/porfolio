import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Home.css';
import NavBar from "../components/NavBar.jsx"
import NavBarSmall from "../components/NavBarSmall.jsx"
import ArrowButton from "../components/ArrowButton.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import Preview from "../components/Preview.jsx"


import homeVignette from "../assets/images/characters/Programming-pana-purple.svg"
import onlineShopping from "../assets/images/characters/Online shopping-bro-purple.svg"
import coding from "../assets/images/characters/Coding-bro-purple.svg"
import downArrow from "../assets/images/icons/arrow-head-black.svg"
import parallelLine from "../assets/images/icons/parallel-black.svg"
import triangle from '../assets/images/backgrounds/background-bottom-1.svg'
import logoName from "../assets/images/icons/logo-name-black.svg"




function Home() {
    return (
        <main className="max-size">
            <div className="full-screen home-wrapper page-wrapper" id="top">
                <NavBarSmall class='hide-on-large' />
                <img src={logoName} alt="Christopher Birkenhagen" className="page-center nav__logo-name hide-on-large" />
                <NavBar />

                <div className="vignette-wrapper">
                    <img src={homeVignette} alt="Chris At Work" className="home-vignette vignette" />
                </div>
                <Link className="down-arrow " to='#home-mid'>
                    <img src={downArrow} alt="" className="" />
                </Link>
            </div>
            <div className="yellow--dark">
                <NavBarSmall />
                <div className="mid-page yellow--dark" id="home-mid">
                    <h4 className="mid-page-title headline">BACKGROUND</h4>
                    <img src={parallelLine} alt="" className="mid-page-underline" />
                    <h2 className="mid-page-callout oswald bold ">
                        Software Engineer. Operations Guru. Entrepreneur.
                </h2>
                    <p className="mid-page-text">
                        I am a full-stack software engineer in Washington DC .
                        As a dedicated entrepreneur with expertise in project management, operations, and finance,
                        I help companies find technical solutions to achieve their goals.
                </p>
                </div>
                <div className="mid-page_home grid-1x1 overflow-x" id="recent-work">
                    <div className="grid-center grid-position-1 z-index-top recent-work__heading-wrapper ">
                        <h1 className="mid-page_home__title">Recent Work</h1>
                        <ArrowButton title="VIEW ALL WORK" />
                    </div>
                    <img alt="" src={triangle} className="split-page-img grid-position-1 grid-end z-index-mid"></img>
                    <img alt="" src={onlineShopping} className="vignette--small 
                    grid-position-1 z-index-top margin-3 hide-on-small"></img>
                    <img alt="" src={coding} className="vignette--small 
                    grid-position-1 grid-end margin-3 hide-on-small "></img>
                    <Preview title="Checkers" link="/checkers"
                        className={"grid-position-1 z-index-top grid-end margin-3 hide-on-small"}
                    />
                    <Preview title="Course Correct" link="/course-correct"
                        className={"grid-position-1 z-index-top margin-3 hide-on-small auto-size"}
                    />
                </div>
                <div className="page-runout--yellow page-runout grid-1x1" id="recent-work">
                    {/* <img alt="" src={coding} className="vignette--home vignette--small margin-3 only-mobile "></img> */}
                    <Menu img={true} />
                    <footer className="flex-row margin-5">
                        <div>
                            <p>&copy;Red Cap Concepts | Washington DC | 2020</p>
                            <p>Design & Development by Christopher Birkenhagen</p>
                            <a href="https://stories.freepik.com/internet">Illustration by Stories by Freepik</a>
                        </div>
                        <SocialMedia large={true} classNames={'page-center'} />
                    </footer>
                </div>
            </div>

        </main>
    );
}

export default Home;
