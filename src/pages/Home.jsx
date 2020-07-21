import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import './Home.css';
import NavBar from "../components/NavBar"



function Home() {
    return (
        <div className="full-screen home-wrapper page-wrapper">
            <NavBar />
        </div>
    );
}

export default Home;
