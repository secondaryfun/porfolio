import React from 'react';
import { useEffect } from 'react'


import './Resume.css';
import NavBar from "../components/NavBar.jsx"



function Resume(props) {
    const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vTtUdyD3K4CPRy4VS8Asljy2CfWDg5dWj6hZkCowlVlc9dUKlduCtLm7DnY7rWjyBTumGQ-hZC5CtpA/pub?embedded=true"

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {

        }
    }, [])

    return (
        <main className="max-size">
            <div className="full-screen page-wrapper" id="top">
                <NavBar backgroundColor={true} />
                <iframe src={resumeLink} className="Resume__iframe page-center" title="Chris Birkenhagen Resume"></iframe>
            </div>
        </main>
    );
}

export default Resume
