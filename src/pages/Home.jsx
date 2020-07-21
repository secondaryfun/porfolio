import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Home.css';
import NavBar from "../components/NavBar.jsx"
import NavBarSmall from "../components/NavBarSmall.jsx"
import ArrowButton from "../components/ArrowButton.jsx"

import homeVignette from "../assets/images/characters/Programming-pana-purple.svg"
import downArrow from "../assets/images/icons/arrow-head-black.svg"
import parallelLine from "../assets/images/icons/parallel-black.svg"
import triangle from '../assets/images/backgrounds/background-bottom-1.svg'



function Home() {
    return (
        <main className="max-size">
            <div className="full-screen home-wrapper page-wrapper" id="top">
                <NavBarSmall class='hide-on-large' />
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
                <div className="mid-page_home grid-1x1" id="recent-work">
                    <div className="grid-center grid-position-1 recent-work__heading-wrapper">
                        <h1 className="mid-page_home__title">Recent Work</h1>
                        <ArrowButton title="VIEW ALL WORK" />
                    </div>
                    <img src={triangle} className="split-page-img grid-stretch grid-position-1"></img>
                </div>
                <div className="page-runout--yellow page-runout" id="recent-work">
                </div>
            </div>

        </main>
    );
}

export default Home;
