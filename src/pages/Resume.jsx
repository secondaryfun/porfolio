import React from 'react';
import { useEffect } from 'react'


import './Resume.css';
import NavBar from "../components/NavBar.jsx"
import { PageView, initGA } from '../components/Tracking';


function Resume(props) {
    const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vTtUdyD3K4CPRy4VS8Asljy2CfWDg5dWj6hZkCowlVlc9dUKlduCtLm7DnY7rWjyBTumGQ-hZC5CtpA/pub?embedded=true"

    useEffect(() => {
        window.scrollTo(0, 0)
        initGA()
        PageView()
        return () => {

        }
    }, [])

    return (
        <main className="main__wrapper">
            <div className="full-screen padding-2" id="top">
                <NavBar backgroundColor={true} />
                <div className="Resume__link__wrapper page-center">
                    <a
                        href="https://docs.google.com/document/d/10dKFkaYYcR4rsMwazfmztfZQ6fjOe6LjVa354-rAcjc/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="oswald pointer hover--blue-bar Resume__link"
                    >Google Doc Link</a>
                </div>

                <iframe src={resumeLink} className="Resume__iframe page-center" title="Chris Birkenhagen Resume"></iframe>
            </div>
        </main>
    );
}

export default Resume
