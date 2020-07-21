import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Home.css';
import NavBar from "../components/NavBar"
import NavBarSmall from "../components/NavBarSmall"

import homeVignette from "../assets/images/characters/Programming-pana-purple.svg"
import downArrow from "../assets/images/icons/arrow-head-black.svg"
import parallelLine from "../assets/images/icons/parallel-black.svg"



function Home() {
    return (
        <main className="max-size">
            <div className="full-screen home-wrapper page-wrapper" id="top">
                <NavBar />
                <div className="vignette-wrapper">
                    <img src={homeVignette} alt="Chris At Work" className="home-vignette vignette" />
                </div>
                <Link className="down-arrow" to='#mid'>
                    <img src={downArrow} alt="" className="" />
                </Link>
            </div>
            <div className="mid-page mid-page_home" id="mid">
                <NavBarSmall />
                <h4 className="mid-page-title">BACKGROUND</h4>
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
        </main>
    );
}

export default Home;
