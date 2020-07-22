import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './ProjectDetail.css';
import NavBar from "../components/NavBar.jsx"
import NavBarSmall from "../components/NavBarSmall.jsx"
import ArrowButton from "../components/ArrowButton.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
import Menu from "../components/Menu.jsx"
import Preview from "../components/Preview.jsx"
import ProjectStats from "../components/ProjectStats.jsx"


import homeVignette from "../assets/images/characters/Programming-pana-purple.svg"
import onlineShopping from "../assets/images/characters/Online shopping-bro-purple.svg"
import coding from "../assets/images/characters/Coding-bro-purple.svg"
import downArrow from "../assets/images/icons/arrow-head-black.svg"
import parallelLine from "../assets/images/icons/parallel-black.svg"
import triangle from '../assets/images/backgrounds/background-bottom-1.svg'
import logoName from "../assets/images/icons/logo-name-black.svg"




function ProjectDetail() {
    return (
        <main className="max-size">
            <div className="full-screen home-wrapper page-wrapper" id="top">
                <NavBarSmall />
                <ProjectStats
                    title="Course Correct"
                    description="Online Learning App"
                    items={[
                        "Visual Design",
                        "Webscraping",
                        "API Design",
                    ]}
                    tech="MERN: MongoDB | Express | React | NodeJS"
                />
            </div>
        </main>
    );
}

export default ProjectDetail;
