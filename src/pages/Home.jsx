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
        <body>
            <NavBar />
        </body>
    );
}

export default Home;
